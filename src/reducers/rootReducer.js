import GAME_STATES from '../components/gameStates';
import { CHANGE_GAME_STATE } from '../actions/actionTypes';

const initialState = {
	gameState: GAME_STATES.Countdown
};

const rootReducer = (state = initialState, action) => {
	if (action.type === CHANGE_GAME_STATE) {
		const {gameState} = action;
		return {...state, ...{gameState}};
	}

	return state;
};

export default rootReducer;