import ChangeUserInfoAction from '../interfaces/ChangeUserInfoAction';
import UserInfo from '../interfaces/UserInfo';
import { CHANGE_USER_INFO } from './actionTypes';

export default (userInfo: UserInfo): ChangeUserInfoAction => ({
	type: CHANGE_USER_INFO,
	userInfo
});
