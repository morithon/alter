import { CHANGE_GAME_STATE } from './actionTypes';
import {GameStates} from '../components/GameStates';
import ChangeGameStateAction from '../interfaces/ChangeGameStateAction';

export default (gameState: GameStates): ChangeGameStateAction => ({
	type: CHANGE_GAME_STATE,
	gameState
});