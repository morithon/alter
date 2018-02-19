import { CHANGE_GAME_STATE } from './actionTypes';

export default (gameState) => ({
	type: CHANGE_GAME_STATE,
	gameState
});