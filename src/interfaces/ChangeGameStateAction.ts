import { Action } from 'redux';

import {GameStates} from '../components/GameStates';

export default interface ChangeGameStateAction extends Action {
	gameState: GameStates;
}
