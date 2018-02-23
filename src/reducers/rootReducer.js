import GAME_STATES from '../components/gameStates';
import { CHANGE_GAME_STATE, ADD_SCORE } from '../actions/actionTypes';

const initialState = {
	gameState: GAME_STATES.Countdown,
	scores: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
	case CHANGE_GAME_STATE: {
		const {gameState} = action;
		return {...state, gameState};
	}
	case ADD_SCORE: {
		const {score} = action;
		return {
			...state,
			scores: [...state.scores, score]
		};
	}
	default:
		return state;
	}
};

export default rootReducer;