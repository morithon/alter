import {GameStates} from '../components/GameStates';
import { Action } from 'redux';

export default interface ChangeGameStateAction extends Action {
	gameState: GameStates;
}