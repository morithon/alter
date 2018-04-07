import {GameStates} from '../components/GameStates';
import UserInfo from './UserInfo';

export default interface AppState {
	gameState: GameStates,
	scores: number[];
	score: number;
	startTime: number | null;
	userInfo: UserInfo;
}
