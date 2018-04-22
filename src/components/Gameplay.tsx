import React from 'react';
import {View} from 'react-native';
import {connect, Dispatch} from 'react-redux';

import changeGameState from '../actions/changeGameState';
import endGame from '../actions/endGame';
import handleWordPress from '../actions/handleWordPress';
import waitForUserPress from '../actions/waitForUserPress';
import wordsGenerator from '../helpers/wordsGenerator/wordsGenerator';
import {AppAction} from '../interfaces/AppAction';
import AppState from '../interfaces/AppState';
import {
	GameplayDispatchProps,
	GameplayOwnProps,
	GameplayProps,
	GameplayState,
	GameplayStateProps
} from '../interfaces/Gameplay';
import Word from '../interfaces/Word';
import {gameplay as styles} from '../styles/gameplay';
import Divider from './Divider';
import {GameStates} from './GameStates';
import ValueDisplay from './ValueDisplay';

class GameplayComponent extends React.Component<GameplayProps, GameplayState> {
	private wordsGenerator = wordsGenerator();
	private numberOfRounds = 25;

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

	public componentDidMount() {
		this.startGame();
	}

	public render() {
		return (
			<View style={styles.container}>
				{this.renderValueDisplay(this.state.topValue)}

				<View style={[styles.divider]}>
					<Divider
						isSuccess={this.getIsSuccess()}
						onFadeOut={this.checkForNextRound.bind(this)}
					/>
				</View>

				{this.renderValueDisplay(this.state.bottomValue)}
			</View>
		);
	}

	private startGame() {
		this.runNextRound();
	}

	private handlePress(result: boolean) {
		this.props.handleWordPress(result);
	}

	private checkForNextRound() {
		if (this.shouldRunNextRound()) {
			this.runNextRound();
		} else {
			this.props.onGameEnd();
			this.props.endGame();
		}
	}

	private shouldRunNextRound() {
		return this.state.roundNumber < this.numberOfRounds;
	}

	private runNextRound() {
		this.setState(currentState =>
			({
				roundNumber: currentState.roundNumber + 1,
				...this.wordsGenerator.next().value
			}));

		this.props.displayValues();
	}

	private getIsSuccess() {
		if (this.props.mode === GameStates.SUCCESS) {
			return true;
		} else if (this.props.mode === GameStates.FAILURE) {
			return false;
		} else {
			return;
		}
	}

	private renderValueDisplay(word: Word) {
		const onWordFadeOut = word.focusOn ? this.props.waitForUserPress : undefined;
		return (
			<View style={[styles.valueDisplay]}>
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

const Gameplay = connect<GameplayStateProps, GameplayDispatchProps, GameplayOwnProps, AppState>
	(mapStateToProps, mapDispatchToProps)(GameplayComponent);

export default Gameplay;
