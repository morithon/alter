import { Action } from 'redux';
import HandleWordPressAction from './HandleWordPressAction';
import ChangeGameStateAction from './ChangeGameStateAction';
import WaitForUserPressAction from './WaitForUserPressAction';

export type AppAction = Action | HandleWordPressAction | ChangeGameStateAction | WaitForUserPressAction;
