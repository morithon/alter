import { Action } from 'redux';
import UserInfo from './UserInfo';

export default interface ChangeUserInfoAction extends Action {
	userInfo: UserInfo;
}
