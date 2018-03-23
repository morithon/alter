import {CHANGE_GAME_STATE, END_GAME, HANDLE_WORD_PRESS, WAIT_FOR_USER_PRESS} from '../actions/actionTypes';
import {GameStates} from '../components/GameStates';
import {AppAction} from '../interfaces/AppAction';
import AppState from '../interfaces/AppState';
import ChangeGameStateAction from '../interfaces/ChangeGameStateAction';
import HandleWordPressAction from '../interfaces/HandleWordPressAction';
import WaitForUserPressAction from '../interfaces/WaitForUserPressAction';

const initialState = {
	gameState: GameStates.COUNTDOWN,
	scores: [],
	score: 0,
	startTime: null
};

const getRoundScore = (isSuccess: boolean, startTime: number | null, userPressTime: number) => {
	if (!isSuccess || !startTime) { // Sanity check, start time should always be defined at this stage
		return 0;
	}

	const timeElapsed = userPressTime - startTime;
	return Math.max(-1 * timeElapsed + 2000, 0);
};

const rootReducer = (state: AppState = initialState, action: AppAction) => {
	switch (action.type) {
	case CHANGE_GAME_STATE: {
		const {gameState} = action as ChangeGameStateAction;
		return {
			...state,
			gameState
		};
	}
	case WAIT_FOR_USER_PRESS: {
		const {startTime} = action as WaitForUserPressAction;
		return {
			...state,
			startTime,
			gameState: GameStates.WAIT_FOR_USER_PRESS
		};
	}
	case HANDLE_WORD_PRESS: {
		const {userPressTime, startTime, isSuccess} = action as HandleWordPressAction;
		return {
			...state,
			score: state.score + getRoundScore(isSuccess, state.startTime, userPressTime),
			startTime,
			gameState: isSuccess ? GameStates.SUCCESS : GameStates.FAILURE
		};
	}
	case END_GAME: {
		return {
			...state,
			scores: [...state.scores, state.score],
			score: 0,
			gameState: GameStates.COUNTDOWN
		};
	}
	default:
		return state;
	}
};

export default rootReducer;
