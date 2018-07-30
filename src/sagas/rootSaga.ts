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
		const gamePoints = await getGamePoints();
		const newGamePoints = Math.min(gamePoints + 1, config.maxGamePoints);

		const cachedReloadingStartTime = gamePoints === config.maxGamePoints ? null : Date.now();

		return await setGamePointsData(newGamePoints, cachedReloadingStartTime);
	});
}

function* removeCachedGamePoint() {
	yield call(async () => {
		const gamePoints = await getGamePoints();
		const newGamePoints = Math.max(gamePoints - 1, 0);

		const cachedReloadingStartTime = await getReloadingStartTime() || Date.now();

		return await setGamePointsData(newGamePoints, cachedReloadingStartTime);
	});
}

function* loadCachedGamePointsData() {
	const gamePointsString: string = yield call(AsyncStorage.getItem, '@ABM:gamePoints');
	let cachedGamePoints = parseInt(gamePointsString, 10);
	const cachedReloadingStartTime = yield call(getReloadingStartTime) || null;

	// If first run, initialize game points to max
	if (gamePointsString === null) {
		yield call(AsyncStorage.setItem, '@ABM:gamePoints', `${config.maxGamePoints}`);
		cachedGamePoints = config.maxGamePoints;
	}

	yield put({
		type: SET_CACHED_GAME_POINTS_DATA,
		cachedGamePoints,
		cachedReloadingStartTime
	});
}

const getGamePoints = async (): Promise<number> => {
	const gamePointsString: string = await AsyncStorage.getItem('@ABM:gamePoints');
	return parseInt(gamePointsString, 10);
};

const getReloadingStartTime = async (): Promise<number> => {
	const reloadingStartTimeString: string = await AsyncStorage.getItem('@ABM:reloadingStartTime');
	return parseInt(reloadingStartTimeString, 10);
};

const setGamePointsData = async (cachedGamePoints: number, cachedReloadingStartTime: number | null): Promise<void[]> =>
	Promise.all([
			AsyncStorage.setItem('@ABM:gamePoints', `${cachedGamePoints}`),
			AsyncStorage.setItem('@ABM:reloadingStartTime', `${cachedReloadingStartTime}`)
		]);
