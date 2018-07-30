import React from 'react';
import {Text, View} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

import ReturnHomeButton from '../../components/ReturnHomeButton';
import withGamePoints, { GamePointsProps } from '../home/components/withGamePoints';
import styles from './styles/gamePointsScreen';

export type GamePointsScreenProps = GamePointsProps & NavigationScreenProps;

const GamePointsScreen = ({gamePoints, secondsToPoint, navigation: {popToTop}}: GamePointsScreenProps) => (
	<View style={styles.container}>
		<View>
			<Text style={{color: 'white'}}>
				You have {gamePoints} game points
			</Text>
			{(secondsToPoint !== null) && (<Text style={{color: 'white'}}>
				Next point in {secondsToPoint} seconds
			</Text>)
			}
		</View>
		<View>
			<ReturnHomeButton
				popToTop={popToTop}
			/>
		</View>
	</View>
);

export default withGamePoints<GamePointsScreenProps>(GamePointsScreen);
