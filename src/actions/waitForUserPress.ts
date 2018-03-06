import {WAIT_FOR_USER_PRESS} from './actionTypes';
import {GameStates} from '../components/GameStates';

export default () => ({
	type: WAIT_FOR_USER_PRESS,
	gameState: GameStates.WAIT_FOR_USER_PRESS,
	startTime: Date.now()
});