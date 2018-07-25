import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {NavigationScreenProps} from 'react-navigation';
import {connect} from 'react-redux';

import I18n from '../../i18n/i18n';
import AppState from '../../interfaces/AppState';
import {utils} from '../../styles/utils';
import CalmGameIconButton from './components/CalmGameIconButton';
import {DisabledIconButton} from './components/DisabledIconButton';
import {homeScreenStyles as styles} from './styles/homeScreen';

export interface HomeScreenStateProps {
	gamePoints: number;
}

type HomeScreenProps = HomeScreenStateProps & NavigationScreenProps;

const HomeScreen = ({navigation: {navigate}, gamePoints}: HomeScreenProps) => (
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
			<Text>
				{gamePoints}
			</Text>
		</View>
	</View>
);

const mapStateToProps = ({cachedGamePoints}: AppState) => ({
	gamePoints: cachedGamePoints
});

export default connect<HomeScreenStateProps, {}, {}, AppState>(mapStateToProps)(HomeScreen);
