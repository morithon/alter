import React from 'react';
import {StackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import rootReducer from './src/reducers/rootReducer';
import CalmGameScreen from './src/screens/CalmGameScreen';
import CalmIntroScreen from './src/screens/CalmIntroScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import ScoreScreen from './src/screens/ScoreScreen';

const App = StackNavigator({
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

const store = createStore(rootReducer);

const AppComponent = () => (
	<Provider store={store}>
		<App></App>
	</Provider>
);

export default AppComponent;
