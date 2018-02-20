import React from 'react';
import {View } from 'react-native';

import ValueDisplay from './ValueDisplay';
import Divider from './Divider';
import wordsGenerator from './wordsGenerator';

type GameplayProps = {
	onGameEnd: Function;
};

class Gameplay extends React.Component<GameplayProps> {
	displayWordsInterval = 500;
	feedbackInterval = 700;
	numberOfRounds = 1;

	constructor(props) {
		super(props);

		this.wordsGenerator = wordsGenerator();

		this.state = {
			roundNumber: 0,
			mode: 'displayValues',
			topValue: {},
			bottomValue: {}
		};
	}

	componentWillMount() {
		this.startGame();
	}

	startGame() {
		this.runNextRound();
	}

	startWordsShownTimeout() {
		setTimeout(() => {
			this.setState({mode: 'waitForTouch'});
		}, this.displayWordsInterval);
	}

	handlePress(result) {
		const mode = result ? 'success' : 'failure';

		this.setState({mode});

		setTimeout(this.checkForNextRound.bind(this), this.feedbackInterval);
	}

	checkForNextRound() {
		if (this.shouldRunNextRound()) {
			this.runNextRound();
		} else {
			this.props.onGameEnd();
		}
	}

	shouldRunNextRound() {
		return this.state.roundNumber < this.numberOfRounds;
	}

	runNextRound() {
		this.setState(currentState =>
			({
				roundNumber: ++currentState.roundNumber,
				mode: 'displayValues',
				...this.wordsGenerator.next().value
			}));

		this.startWordsShownTimeout();
	}

	getIsSuccess() {
		if (this.state.mode === 'success') {
			return true;
		} else if (this.state.mode === 'failure') {
			return false;
		} else {
			return;
		}
	}

	renderValueDisplay(word) {
		return (
			<ValueDisplay
				mode={this.state.mode}
				value={word.value}
				focusOn={word.focusOn}
				onPress={this.handlePress.bind(this)}
			></ValueDisplay>
		);
	}

	render() {
		return (
			<View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center'}}>
				{this.renderValueDisplay(this.state.topValue)}

				<Divider isSuccess={this.getIsSuccess()}></Divider>

				{this.renderValueDisplay(this.state.bottomValue)}
			</View>
		);
	}
}

export default Gameplay;