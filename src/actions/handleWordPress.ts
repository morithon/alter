import HandleWordPressAction from '../interfaces/HandleWordPressAction';
import {HANDLE_WORD_PRESS} from './actionTypes';

export default (isSuccess: boolean): HandleWordPressAction => ({
	type: HANDLE_WORD_PRESS,
	isSuccess,
	userPressTime: Date.now(),
	startTime: null
});
