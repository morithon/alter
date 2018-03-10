import { Action } from 'redux';

export default interface WaitForUserPressAction extends Action {
	startTime: number;
}