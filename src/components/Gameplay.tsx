import React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';

import AppState from '../interfaces/AppState';
import ValueDisplay from './ValueDisplay';
import Divider from './Divider';
import wordsGenerator from './wordsGenerator';
import handleWordPress from '../actions/handleWordPress';
import waitForUserPress from '../actions/waitForUserPress';
import endGame from '../actions/endGame';
import changeGameState from '../actions/changeGameState';
import Word from '../interfaces/Word';
import {GameStates} from './GameStates';

interface GameplayStateProps {
	mode: GameStates;
}

interface GameplayDispatchProps {
	displayValues: () => null;
	waitForUserPress: () => null;
	handleWordPress: (result: boolean) => null;
	endGame: () => null;
}

export interface GameplayOwnProps {
	onGameEnd: () => boolean;
};

type GameplayProps = GameplayStateProps & GameplayDispatchProps & GameplayOwnProps;

export interface GameplayState {
	roundNumber: number;
	topValue?: Word;
	bottomValue?: Word;
};

class Gameplay extends React.Component<GameplayProps, GameplayState> {
	wordsGenerator = wordsGenerator();
	displayWordsInterval = 500;
	numberOfRounds = 5;

	constructor(props) {
		super(props);

		this.state = {
			roundNumber: 0
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
				roundNumber: currentState.roundNumber + 1,
				...this.wordsGenerator.next().value
			}));

		this.props.displayValues();

		this.startWordsShownTimeout();
	}

	getIsSuccess() {
		if (this.props.mode === GameStates.SUCCESS) {
			return true;
		} else if (this.props.mode === GameStates.FAILURE) {
			return false;
		} else {
			return;
		}
	}

	renderValueDisplay(word) {
		return (
			<View style={{flex: 20}}>
				<ValueDisplay
					mode={this.props.mode}
					value={word.value}
					focusOn={word.focusOn}
					onPress={this.handlePress.bind(this)}
				/>
			</View>
		);
	}

	render() {
		return (
			<View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center'}}>
				{this.renderValueDisplay(this.state.topValue)}

				<View style={{flex: 1}}>
					<Divider
						isSuccess={this.getIsSuccess()}
						onFadeOut={this.checkForNextRound.bind(this)}
					/>
				</View>

				{this.renderValueDisplay(this.state.bottomValue)}
			</View>
		);
	}
}

const mapStateToProps = (state: AppState) => ({
	mode: state.gameState
});

const mapDispatchToProps = dispatch => ({
	waitForUserPress: () => dispatch(waitForUserPress()),
	handleWordPress: isSuccess => dispatch(handleWordPress(isSuccess)),
	endGame: () => dispatch(endGame()),
	displayValues: () => dispatch(changeGameState(GameStates.DISPLAY_VALUES))
});

const GameplayComponent = connect<GameplayStateProps, GameplayDispatchProps, GameplayOwnProps>(mapStateToProps, mapDispatchToProps)(Gameplay);

export default GameplayComponent;