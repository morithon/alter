import SetCachedGamePointAction from '../interfaces/SetCachedGamePointsDataAction';
import {SET_CACHED_GAME_POINTS_DATA} from './actionTypes';

export default (
	cachedGamePoints: number,
	cachedReloadingStartTime: number | null = null
): SetCachedGamePointAction => ({
	type: SET_CACHED_GAME_POINTS_DATA,
	cachedGamePoints,
	cachedReloadingStartTime
});
