import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {NavigationScreenProps} from 'react-navigation';

import {utils} from '../../styles/utils';
import CalmGameIconButton from './components/CalmGameIconButton';
import {homeScreenStyles as styles} from './styles/homeScreen';

type HomeScreenProps = NavigationScreenProps;

const HomeScreen = ({navigation: {navigate}}: HomeScreenProps) => (
	<View style={styles.container}>
		<View style={[styles.header, utils.shadow]}>
			<Text style={styles.headerText}>
				Alter
			</Text>
		</View>
		<View style={styles.topSpace}>
		</View>
		<View style={styles.row}>
			<CalmGameIconButton
				navigate={navigate}
			/>
		</View>
		<View style={styles.row}>
		</View>
	</View>
);

export default HomeScreen;
