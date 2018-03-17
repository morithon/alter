import React from 'react';
import {connect, Dispatch} from 'react-redux';
import {View, StyleSheet} from 'react-native';

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
import { AppAction } from '../interfaces/AppAction';
import { brightBlue } from '../styles/colors';
import { utils } from '../styles/utils';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'stretch',
		justifyContent: 'center'
	},
	divider: {
		height: 5,
		backgroundColor: brightBlue
	}
});

interface GameplayStateProps {
	mode: GameStates;
}

interface GameplayDispatchProps {
	displayValues: () => AppAction;
	waitForUserPress: () => AppAction;
	handleWordPress: (result: boolean) => AppAction;
	endGame: () => AppAction;
}

export interface GameplayOwnProps {
	onGameEnd: () => boolean;
};

type GameplayProps = GameplayStateProps & GameplayDispatchProps & GameplayOwnProps;

export interface GameplayState {
	roundNumber: number;
	topValue: Word;
	bottomValue: Word;
};

class Gameplay extends React.Component<GameplayProps, GameplayState> {
	wordsGenerator = wordsGenerator();
	numberOfRounds = 10;

	constructor(props: GameplayProps) {
		super(props);

		this.state = {
			roundNumber: 0,
			topValue: {
				value: '',
				focusOn: false
			},
			bottomValue: {
				value: '',
				focusOn: false
			}
		};
	}

	componentWillMount() {
		this.startGame();
	}

	startGame() {
		this.runNextRound();
	}

	handlePress(result: boolean) {
		this.props.handleWordPress(result);
	}

	checkForNextRound() {
		if (this.shouldRunNextRound()) {
			this.runNextRound();
		} else {
			this.props.onGameEnd();
			this.props.endGame();
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

	renderValueDisplay(word: Word) {
		const onWordFadeOut = word.focusOn ? this.props.waitForUserPress : undefined;
		return (
			<View style={{flex: 20}}>
				<ValueDisplay
					mode={this.props.mode}
					value={word.value}
					focusOn={word.focusOn}
					onPress={this.handlePress.bind(this)}
					onWordFadeOut={onWordFadeOut}
				/>
			</View>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				{this.renderValueDisplay(this.state.topValue)}

				<View style={[styles.divider, utils.shadow]}>
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

const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => ({
	waitForUserPress: () => dispatch(waitForUserPress()),
	handleWordPress: (isSuccess: boolean) => dispatch(handleWordPress(isSuccess)),
	endGame: () => dispatch(endGame()),
	displayValues: () => dispatch(changeGameState(GameStates.DISPLAY_VALUES))
});

const GameplayComponent = connect<GameplayStateProps, GameplayDispatchProps, GameplayOwnProps, AppState>(mapStateToProps, mapDispatchToProps)(Gameplay);

export default GameplayComponent;