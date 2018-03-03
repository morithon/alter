import { HANDLE_WORD_PRESS } from './actionTypes';
import GAME_STATES from '../components/gameStates';

export default (isSuccess) => ({
	type: HANDLE_WORD_PRESS,
	isSuccess,
	gameState: isSuccess ? GAME_STATES.Success : GAME_STATES.Failure,
	userPressTime: Date.now(),
	startTime: null
});