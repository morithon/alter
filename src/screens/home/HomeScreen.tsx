import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {NavigationScreenProps} from 'react-navigation';

import {utils} from '../../styles/utils';
import CalmGameIconButton from './components/CalmGameIconButton';
import {DisabledIconButton} from './components/DisabledIconButton';
import {homeScreenStyles as styles} from './styles/homeScreen';

export default class HomeScreen extends React.Component<NavigationScreenProps, {}> {
	public render() {
		const {navigate} = this.props.navigation;
		return (
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
						iconName="glasses"
						iconType="material-community"
						caption="Sharp"
						releaseDateCaption="(Coming Fall 2018)"
					/>
				</View>
				<View style={styles.row}>
					<DisabledIconButton
						caption="Sober"
					/>
					<DisabledIconButton
						caption="Non-smoking"
					/>
				</View>
				<View style={styles.bottomSpace}>
				</View>
			</View>
		);
	}
}
