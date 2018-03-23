import {GameStates} from '../components/GameStates';
import ChangeGameStateAction from '../interfaces/ChangeGameStateAction';
import { CHANGE_GAME_STATE } from './actionTypes';

export default (gameState: GameStates): ChangeGameStateAction => ({
	type: CHANGE_GAME_STATE,
	gameState
});
