import {GameStates} from '../components/GameStates';

export default interface AppState {
	gameState: GameStates,
	scores: number[];
	score: number;
	startTime: number | null;
}