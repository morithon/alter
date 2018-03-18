import {HANDLE_WORD_PRESS} from './actionTypes';
import HandleWordPressAction from '../interfaces/HandleWordPressAction';

export default (isSuccess: boolean): HandleWordPressAction => ({
	type: HANDLE_WORD_PRESS,
	isSuccess,
	userPressTime: Date.now(),
	startTime: null
});