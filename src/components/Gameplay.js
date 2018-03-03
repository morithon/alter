import React from 'react';
import {connect} from 'react-redux';
import {View } from 'react-native';

import ValueDisplay from './ValueDisplay';
import Divider from './Divider';
import wordsGenerator from './wordsGenerator';
import handleWordPress from '../actions/handleWordPress';
import waitForUserPress from '../actions/waitForUserPress';
import endGame from '../actions/endGame';
import changeGameState from '../actions/changeGameState';
import GAME_STATES from './gameStates';

type GameplayProps = {
	displayValues: Function;
	waitForUserPress: Function;
	handleWordPress: Function;
	endGame: Function;
	onGameEnd: Function;
	mode: string;
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
			this.props.waitForUserPress();
		}, this.displayWordsInterval);
	}

	handlePress(result) {
		this.props.handleWordPress(result);

		setTimeout(this.checkForNextRound.bind(this), this.feedbackInterval);
	}

	checkForNextRound() {
		if (this.shouldRunNextRound()) {
			this.runNextRound();
		} else {
			this.props.endGame();
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
				...this.wordsGenerator.next().value
			}));

		this.props.displayValues();

		this.startWordsShownTimeout();
	}

	getIsSuccess() {
		if (this.props.mode === GAME_STATES.Success) {
			return true;
		} else if (this.props.mode === GAME_STATES.Failure) {
			return false;
		} else {
			return;
		}
	}

	renderValueDisplay(word) {
		return (
			<ValueDisplay
				mode={this.props.mode}
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

				<Divider isSuccess={this.getIsSuccess()}/>

				{this.renderValueDisplay(this.state.bottomValue)}
			</View>
		);
	}
}

const mapStateToProps = state => ({
	mode: state.gameState
});

const mapDispatchToProps = dispatch => ({
	waitForUserPress: () => dispatch(waitForUserPress()),
	handleWordPress: isSuccess => dispatch(handleWordPress(isSuccess)),
	endGame: () => dispatch(endGame()),
	displayValues: () => dispatch(changeGameState(GAME_STATES.DisplayValues))
});

const GameplayComponent = connect(mapStateToProps, mapDispatchToProps)(Gameplay);

export default GameplayComponent;