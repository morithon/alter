import React from 'react';
import {AsyncStorage} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {connect, Dispatch, Provider} from 'react-redux';
import {createStore} from 'redux';

import changeUserInfoActionCreator from './src/actions/changeUserInfo';
import {devConfig} from './src/configs/devConfig';
import {AppAction} from './src/interfaces/AppAction';
import UserInfo from './src/interfaces/UserInfo';
import rootReducer from './src/reducers/rootReducer';
import CalmGameScreen from './src/screens/calm/components/CalmGameScreen';
import CalmIntroScreen from './src/screens/calm/components/CalmIntroScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import ScoreScreen from './src/screens/score/components/ScoreScreen';

const AppStack = StackNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: {
			header: null
		}
	},
	CalmGame: {
		screen: CalmGameScreen,
		navigationOptions: {
			header: null
		}
	},
	Score: {
		screen: ScoreScreen,
		navigationOptions: {
			header: null
		}
	},
	CalmIntro: {
		screen: CalmIntroScreen,
		navigationOptions: {
			header: null
		}
	}
});

interface AppProps {
	changeUserInfo: (userInfo: UserInfo) => void;
}

console.disableYellowBox = true;

const App = ({changeUserInfo}: AppProps) => {
	const loadUserInfo = async () => {
		const hasUserSeenCalmIntro = await AsyncStorage.getItem('@ABM:hasUserSeenCalmIntro');
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

const store = createStore(rootReducer);

const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => ({
	changeUserInfo: (userInfo: UserInfo) => dispatch(changeUserInfoActionCreator(userInfo)),
});

const ConnectedApp = connect(() => ({}), mapDispatchToProps)(App);

const AppComponent = () => (
	<Provider store={store}>
		<ConnectedApp/>
	</Provider>
);

export default AppComponent;
