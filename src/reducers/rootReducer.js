import GAME_STATES from '../components/gameStates';
import { CHANGE_GAME_STATE, HANDLE_WORD_PRESS, WAIT_FOR_USER_PRESS, END_GAME} from '../actions/actionTypes';

const initialState = {
	gameState: GAME_STATES.Countdown,
	scores: [],
	score: 0
};

const calculateScore = (waitForUserPressStartTime, userPressTime) => {
	const timeElapsed = userPressTime - waitForUserPressStartTime;
	return Math.max(-1 * (timeElapsed / 20) + 100, 0);
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
	case CHANGE_GAME_STATE: {
		const {gameState} = action;
		return {...state, gameState};
	}
	case WAIT_FOR_USER_PRESS: {
		const {gameState, waitForUserPressTimeStart} = action;
		return {
			...state,
			gameState,
			waitForUserPressTimeStart
		};
	}
	case HANDLE_WORD_PRESS: {
		const {gameState, userPressTime, waitForUserPressStartTime} = action;
		return {
			...state,
			gameState,
			score: state.score + calculateScore(waitForUserPressStartTime, userPressTime),
			waitForUserPressStartTime
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