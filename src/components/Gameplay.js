import React from 'react';
import {connect} from 'react-redux';
import {View } from 'react-native';

import ValueDisplay from './ValueDisplay';
import PentagonDivider from './PentagonDivider';
import wordsGenerator from './wordsGenerator';
import addScore from '../actions/addScore';

type GameplayProps = {
	onGameEnd: Function;
	addScore: Function;
};

class Gameplay extends React.Component<GameplayProps> {
	displayWordsInterval = 500;
	feedbackInterval = 700;
	numberOfRounds = 5;

	constructor(props) {
		super(props);

		this.wordsGenerator = wordsGenerator();

		this.state = {
			roundNumber: 0,
			mode: 'displayValues',
			topValue: {},
			bottomValue: {},
			waitForTouchStartTime: null,
			score: []
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
			this.setState({
				mode: 'waitForTouch',
				waitForTouchStartTime: Date.now()
			});
		}, this.displayWordsInterval);
	}

	handlePress(result) {
		const mode = result ? 'success' : 'failure';

		const score = this.calculateScore();

		this.setState(oldState => ({
			mode,
			waitForTouchStartTime: null,
			score: [...oldState.score, score]
		}));

		setTimeout(this.checkForNextRound.bind(this), this.feedbackInterval);
	}

	calculateScore() {
		const timeElapsed = Date.now() - this.state.waitForTouchStartTime;
		return timeElapsed;
	}

	checkForNextRound() {
		if (this.shouldRunNextRound()) {
			this.runNextRound();
		} else {
			this.props.addScore(this.state.score);
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

				<PentagonDivider isSuccess={this.getIsSuccess()}/>

				{this.renderValueDisplay(this.state.bottomValue)}
			</View>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	addScore: (score) => dispatch(addScore(score))
});

const GameplayComponent = connect(() => ({}), mapDispatchToProps)(Gameplay);

export default GameplayComponent;