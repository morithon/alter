import { Action } from 'redux';

export default interface HandleWordPressAction extends Action {
	isSuccess: boolean;
	userPressTime: number;
	startTime: null;
}
