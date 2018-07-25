import {Action} from 'redux';

export default interface SetCachedGamePointsAction extends Action {
	cachedGamePoints: number;
}
