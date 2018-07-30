import { Action } from 'redux';

import ChangeGameStateAction from './ChangeGameStateAction';
import ChangeUserInfoAction from './ChangeUserInfoAction';
import HandleWordPressAction from './HandleWordPressAction';
import SetCachedGamePointsDataAction from './SetCachedGamePointsDataAction';
import WaitForUserPressAction from './WaitForUserPressAction';

export type AppAction = Action | HandleWordPressAction | ChangeGameStateAction | WaitForUserPressAction
	| ChangeUserInfoAction | SetCachedGamePointsDataAction;
