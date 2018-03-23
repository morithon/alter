import { Action } from 'redux';

import ChangeGameStateAction from './ChangeGameStateAction';
import HandleWordPressAction from './HandleWordPressAction';
import WaitForUserPressAction from './WaitForUserPressAction';

export type AppAction = Action | HandleWordPressAction | ChangeGameStateAction | WaitForUserPressAction;
