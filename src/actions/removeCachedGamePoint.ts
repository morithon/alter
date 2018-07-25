import {Action} from 'redux';
import {REMOVE_CACHED_GAME_POINT} from './actionTypes';

export default (): Action => ({
	type: REMOVE_CACHED_GAME_POINT
});
