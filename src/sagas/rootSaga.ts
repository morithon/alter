import { AsyncStorage } from 'react-native';
import {all, call, put, takeEvery} from 'redux-saga/effects';

import { ADD_CACHED_GAME_POINT, REMOVE_CACHED_GAME_POINT, SET_CACHED_GAME_POINTS } from '../actions/actionTypes';
import { config } from '../configs/config';

export default function* rootSaga() {
	yield all([
		loadCachedGamePointsData(),
		watchAddCachedGamePoint(),
		watchRemoveCachedGamePoint()
	]);
}

function* watchAddCachedGamePoint() {
	yield takeEvery(ADD_CACHED_GAME_POINT, addCachedGamePoint);
}

function* watchRemoveCachedGamePoint() {
	yield takeEvery(REMOVE_CACHED_GAME_POINT, removeCachedGamePoint);
}

function* addCachedGamePoint() {
	yield call(async () => {
		const gamePointsString: string = await AsyncStorage.getItem('@ABM:gamePoints');
		let gamePoints = parseInt(gamePointsString, 10);
		gamePoints += 1;

		return await AsyncStorage.setItem('@ABM:gamePoints', `${gamePoints}`);
	});
}

function* removeCachedGamePoint() {
	yield call(async () => {
		const gamePointsString: string = await AsyncStorage.getItem('@ABM:gamePoints');
		let gamePoints = parseInt(gamePointsString, 10);
		gamePoints -= 1;

		return await AsyncStorage.setItem('@ABM:gamePoints', `${gamePoints}`);
	});
}

function* loadCachedGamePointsData() {
	const gamePointsString: string = yield call(AsyncStorage.getItem, '@ABM:gamePoints');
	let cachedGamePoints = parseInt(gamePointsString, 10);

	if (gamePointsString === null) {
		yield call(AsyncStorage.setItem, '@ABM:gamePoints', `${config.maxGamePoints}`);
		cachedGamePoints = config.maxGamePoints;
	}

	yield put({type: SET_CACHED_GAME_POINTS, cachedGamePoints});
}
