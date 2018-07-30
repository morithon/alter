import {Action} from 'redux';

export default interface SetCachedGamePointsDataAction extends Action {
	cachedGamePoints: number;
	cachedReloadingStartTime: number | null;
}
