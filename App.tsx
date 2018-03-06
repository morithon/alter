import * as React from 'react';
import {StackNavigator, NavigationComponent} from 'react-navigation';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import rootReducer from './src/reducers/rootReducer';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';
import ScoreScreen from './src/screens/ScoreScreen';
import ConfigScreen from './src/screens/ConfigScreen';

const App = StackNavigator({
	Home: {
		screen: HomeScreen
	},
	Game: {
		screen: GameScreen,
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
	Config: {
		screen: ConfigScreen
	}
});

const store = createStore(rootReducer);

const AppComponent = () => (
	<Provider store={store}>
		<App></App>
	</Provider>
);

export default AppComponent;