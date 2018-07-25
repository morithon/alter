import SetCachedGamePointAction from '../interfaces/SetCachedGamePointsAction';
import {SET_CACHED_GAME_POINTS} from './actionTypes';

export default (cachedGamePoints: number): SetCachedGamePointAction => ({
	type: SET_CACHED_GAME_POINTS,
	cachedGamePoints
});
