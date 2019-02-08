import React from 'react';
import {AsyncStorage} from 'react-native';
import {connect, Dispatch, Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

import changeUserInfoActionCreator from './src/actions/changeUserInfo';
import {AppStack} from './src/AppStack';
import {devConfig} from './src/configs/devConfig';
import {AppAction} from './src/interfaces/AppAction';
import UserInfo from './src/interfaces/UserInfo';
import rootReducer from './src/reducers/rootReducer';

interface AppDispatchProps {
	changeUserInfo: (userInfo: UserInfo) => void;
}

type AppProps = AppDispatchProps;

if (__DEV__) {
	console.disableYellowBox = devConfig.disableYellowBox;
}

const App = ({changeUserInfo}: AppProps) => {
	const loadUserInfo = async () => {
		const hasUserSeenCalmIntro: string | null = await AsyncStorage.getItem('@ABM:hasUserSeenCalmIntro');

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

const store = createStore(
	rootReducer,
);

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<AppAction>): AppDispatchProps => ({
	changeUserInfo: (userInfo: UserInfo) => dispatch(changeUserInfoActionCreator(userInfo))
});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

const AppComponent = () => (
	<Provider store={store}>
		<ConnectedApp/>
	</Provider>
);

export default AppComponent;
