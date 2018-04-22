import {GameStates} from '../components/GameStates';
import {AppAction} from './AppAction';
import Word from './Word';

export interface GameplayStateProps {
	mode: GameStates;
}

export interface GameplayDispatchProps {
	displayValues: () => AppAction;
	waitForUserPress: () => AppAction;
	handleWordPress: (result: boolean) => AppAction;
	endGame: () => AppAction;
}

export interface GameplayOwnProps {
	onGameEnd: () => boolean;
}

export type GameplayProps = GameplayStateProps & GameplayDispatchProps & GameplayOwnProps;

export interface GameplayState {
	roundNumber: number;
	topValue: Word;
	bottomValue: Word;
}
