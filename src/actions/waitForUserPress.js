import { WAIT_FOR_USER_PRESS } from './actionTypes';
import GAME_STATES from '../components/gameStates';

export default () => ({
	type: WAIT_FOR_USER_PRESS,
	gameState: GAME_STATES.WaitForUserPress,
	startTime: Date.now()
});