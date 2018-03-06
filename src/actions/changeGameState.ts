import { CHANGE_GAME_STATE } from './actionTypes';
import {GameStates} from '../components/GameStates';

export default (gameState: GameStates) => ({
	type: CHANGE_GAME_STATE,
	gameState
});