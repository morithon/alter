import React from 'react';
import {AsyncStorage} from 'react-native';
import {connect, Dispatch, Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import changeUserInfoActionCreator from './src/actions/changeUserInfo';
import setGamePointsCacheActionCreator from './src/actions/setCachedGamePoints';
import {AppStack} from './src/AppStack';
import {devConfig} from './src/configs/devConfig';
import {AppAction} from './src/interfaces/AppAction';
import UserInfo from './src/interfaces/UserInfo';
import rootReducer from './src/reducers/rootReducer';
import rootSaga from './src/sagas/rootSaga';

interface AppDispatchProps {
	changeUserInfo: (userInfo: UserInfo) => void;
	setGamePointsCache: (gamePoints: number) => void;
}

type AppProps = AppDispatchProps;

if (__DEV__) {
	console.disableYellowBox = devConfig.disableYellowBox;
}

const App = ({changeUserInfo, setGamePointsCache}: AppProps) => {
	const loadUserInfo = async () => {
		const hasUserSeenCalmIntro: string = await AsyncStorage.getItem('@ABM:hasUserSeenCalmIntro');

		if (__DEV__ && devConfig.alwaysShowIntro) {
			return;
		}

		changeUserInfo({hasSeenCalmIntro: hasUserSeenCalmIntro === 'true'});
	};

	loadUserInfo();

	return (
		<AppStack/>
	);
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<AppAction>): AppDispatchProps => ({
	changeUserInfo: (userInfo: UserInfo) => dispatch(changeUserInfoActionCreator(userInfo)),
	setGamePointsCache: (gamePoints: number) => dispatch(setGamePointsCacheActionCreator(gamePoints))
});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

const AppComponent = () => (
	<Provider store={store}>
		<ConnectedApp/>
	</Provider>
);

export default AppComponent;
