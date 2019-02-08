import {
	CHANGE_GAME_STATE,
	CHANGE_USER_INFO,
	END_GAME,
	HANDLE_WORD_PRESS,
	WAIT_FOR_USER_PRESS
} from '../actions/actionTypes';
import {GameStates} from '../components/GameStates';
import calculateRoundScore from '../helpers/calculateRoundScore';
import {AppAction} from '../interfaces/AppAction';
import AppState from '../interfaces/AppState';
import ChangeGameStateAction from '../interfaces/ChangeGameStateAction';
import ChangeUserInfoAction from '../interfaces/ChangeUserInfoAction';
import HandleWordPressAction from '../interfaces/HandleWordPressAction';
import WaitForUserPressAction from '../interfaces/WaitForUserPressAction';

const initialState = {
	gameState: GameStates.COUNTDOWN,
	scores: [],
	score: 0,
	roundScore: 0,
	startTime: null,
	userInfo: {
		hasSeenCalmIntro: false
	},
};

const rootReducer = (state: AppState = initialState, action: AppAction): AppState => {
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
		const roundScore = calculateRoundScore(isSuccess, state.startTime, userPressTime);
		return {
			...state,
			score: state.score + roundScore,
			roundScore,
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
	case CHANGE_USER_INFO: {
		const {userInfo} = action as ChangeUserInfoAction;
		return {
			...state,
			userInfo
		};
	}
	default:
		return state;
	}
};

export default rootReducer;
