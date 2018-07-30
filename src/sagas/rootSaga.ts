import { AsyncStorage } from 'react-native';
import {all, call, put, takeEvery} from 'redux-saga/effects';

import { ADD_CACHED_GAME_POINT, REMOVE_CACHED_GAME_POINT, SET_CACHED_GAME_POINTS_DATA} from '../actions/actionTypes';
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
		const gamePoints = parseInt(gamePointsString, 10);
		const newGamePoints = Math.min(gamePoints + 1, 0);

		const cachedReloadingStartTime = gamePoints === config.maxGamePoints ? null : Date.now();

		await AsyncStorage.setItem('@ABM:reloadingStartTime', `${cachedReloadingStartTime}`);
		return await AsyncStorage.setItem('@ABM:gamePoints', `${newGamePoints}`);
	});
}

function* removeCachedGamePoint() {
	yield call(async () => {
		const gamePointsString: string = await AsyncStorage.getItem('@ABM:gamePoints');
		const reloadingStartTimeString: string = await AsyncStorage.getItem('@ABM:reloadingStartTime');

		const gamePoints = parseInt(gamePointsString, 10);
		const newGamePoints = Math.max(gamePoints - 1, 0);

		const cachedReloadingStartTime = parseInt(reloadingStartTimeString, 10) || Date.now();

		console.log(cachedReloadingStartTime);
		await AsyncStorage.setItem('@ABM:reloadingStartTime', `${cachedReloadingStartTime}`);
		return await AsyncStorage.setItem('@ABM:gamePoints', `${newGamePoints}`);
	});
}

function* loadCachedGamePointsData() {
	const gamePointsString: string = yield call(AsyncStorage.getItem, '@ABM:gamePoints');
	const reloadingStartTimeString: string = yield call(AsyncStorage.getItem, '@ABM:reloadingStartTime');
	let cachedGamePoints = parseInt(gamePointsString, 10);
	const cachedReloadingStartTime = parseInt(reloadingStartTimeString, 10) || null;

	if (gamePointsString === null) {
		yield call(AsyncStorage.setItem, '@ABM:gamePoints', `${config.maxGamePoints}`);
		cachedGamePoints = config.maxGamePoints;
	}

	yield put({type: SET_CACHED_GAME_POINTS_DATA, cachedGamePoints, cachedReloadingStartTime});
}
