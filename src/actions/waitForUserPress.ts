import {WAIT_FOR_USER_PRESS} from './actionTypes';
import WaitForUserPressAction from '../interfaces/WaitForUserPressAction';

export default (): WaitForUserPressAction => ({
	type: WAIT_FOR_USER_PRESS,
	startTime: Date.now()
});