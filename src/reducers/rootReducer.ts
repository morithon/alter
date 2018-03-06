import AppState from '../interfaces/AppState';
import {GameStates} from '../components/GameStates';
import { CHANGE_GAME_STATE, HANDLE_WORD_PRESS, WAIT_FOR_USER_PRESS, END_GAME} from '../actions/actionTypes';

const initialState = {
	gameState: GameStates.COUNTDOWN,
	scores: [],
	score: 0
};

const getRoundScore = (isSuccess, startTime, userPressTime) => {
	if (!isSuccess) {
		return 0;
	}

	const timeElapsed = userPressTime - startTime;
	return Math.max(-1 * timeElapsed + 2000, 0);
};

const rootReducer = (state: AppState = initialState, action) => {
	switch (action.type) {
	case CHANGE_GAME_STATE: {
		const {gameState} = action;
		return {...state, gameState};
	}
	case WAIT_FOR_USER_PRESS: {
		const {gameState, startTime} = action;
		return {
			...state,
			gameState,
			startTime
		};
	}
	case HANDLE_WORD_PRESS: {
		const {gameState, userPressTime, startTime, isSuccess} = action;
		return {
			...state,
			gameState,
			score: state.score + getRoundScore(isSuccess, state.startTime, userPressTime),
			startTime
		};
	}
	case END_GAME: {
		return {
			...state,
			scores: [...state.scores, state.score],
			score: 0
		};
	}
	default:
		return state;
	}
};

export default rootReducer;