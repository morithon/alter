import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {NavigationScreenProps} from 'react-navigation';

import I18n from '../../i18n/i18n';
import {utils} from '../../styles/utils';
import CalmGameIconButton from './components/CalmGameIconButton';
import {DisabledIconButton} from './components/DisabledIconButton';
import GamePointsCounter from './components/GamePointsCounter';
import {homeScreenStyles as styles} from './styles/homeScreen';

const HomeScreen = ({navigation: {navigate}}: NavigationScreenProps) => (
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
			<DisabledIconButton
				caption={I18n.t('soberGameName')}
			/>
		</View>
		<View style={styles.row}>
			<DisabledIconButton
				caption={I18n.t('nonSmokingGameName')}
			/>
		</View>
		<View style={styles.bottomSpace}>
			<GamePointsCounter/>
		</View>
	</View>
);

export default HomeScreen;
