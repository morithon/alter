import WaitForUserPressAction from '../interfaces/WaitForUserPressAction';
import {WAIT_FOR_USER_PRESS} from './actionTypes';

export default (): WaitForUserPressAction => ({
	type: WAIT_FOR_USER_PRESS,
	startTime: Date.now()
});
