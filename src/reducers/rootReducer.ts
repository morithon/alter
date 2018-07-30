import {
	ADD_CACHED_GAME_POINT,
	CHANGE_GAME_STATE,
	CHANGE_USER_INFO,
	END_GAME,
	HANDLE_WORD_PRESS,
	REMOVE_CACHED_GAME_POINT,
	SET_CACHED_GAME_POINTS_DATA,
	WAIT_FOR_USER_PRESS
} from '../actions/actionTypes';
import {GameStates} from '../components/GameStates';
import {config} from '../configs/config';
import calculateRoundScore from '../helpers/calculateRoundScore';
import {AppAction} from '../interfaces/AppAction';
import AppState from '../interfaces/AppState';
import ChangeGameStateAction from '../interfaces/ChangeGameStateAction';
import ChangeUserInfoAction from '../interfaces/ChangeUserInfoAction';
import HandleWordPressAction from '../interfaces/HandleWordPressAction';
import SetCachedGamePointAction from '../interfaces/SetCachedGamePointsDataAction';
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
	cachedGamePoints: 0,
	cachedReloadingStartTime: null
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
	case SET_CACHED_GAME_POINTS_DATA: {
		let {cachedGamePoints} = action as SetCachedGamePointAction;
		const {cachedReloadingStartTime} = action as SetCachedGamePointAction;

		cachedGamePoints = Math.min(cachedGamePoints, config.maxGamePoints);

		return {
			...state,
			cachedGamePoints,
			cachedReloadingStartTime
		};
	}
	case ADD_CACHED_GAME_POINT: {
		let {cachedGamePoints} = state;
		if (cachedGamePoints < config.maxGamePoints) {
			cachedGamePoints += 1;
		}

		const cachedReloadingStartTime = cachedGamePoints === config.maxGamePoints ? null : Date.now();

		return {
			...state,
			cachedGamePoints,
			cachedReloadingStartTime
		};
	}
	case REMOVE_CACHED_GAME_POINT: {
		let {cachedGamePoints} = state;
		if (cachedGamePoints > 0) {
			cachedGamePoints -= 1;
		}

		const cachedReloadingStartTime = state.cachedReloadingStartTime || Date.now();

		return {
			...state,
			cachedGamePoints,
			cachedReloadingStartTime
		};
	}
	default:
		return state;
	}
};

export default rootReducer;
