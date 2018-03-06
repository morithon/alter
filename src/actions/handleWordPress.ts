import {HANDLE_WORD_PRESS} from './actionTypes';
import {GameStates} from '../components/GameStates';

export default (isSuccess) => ({
	type: HANDLE_WORD_PRESS,
	isSuccess,
	gameState: isSuccess ? GameStates.SUCCESS : GameStates.FAILURE,
	userPressTime: Date.now(),
	startTime: null
});