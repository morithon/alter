import {StackNavigator} from 'react-navigation';

import CalmGameScreen from './screens/calm/components/CalmGameScreen';
import CalmIntroScreen from './screens/calm/components/CalmIntroScreen';
import GamePointsScreen from './screens/gamePoints/GamePointsScreen';
import HomeScreen from './screens/home/HomeScreen';
import ScoreScreen from './screens/score/components/ScoreScreen';

export const AppStack = StackNavigator({
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
	},
	GamePoints: {
		screen: GamePointsScreen,
		navigationOptions: {
			header: null
		}
	}
});
