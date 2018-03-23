import React from 'react';
import {View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {NavigationScreenProps} from 'react-navigation';

import {DisabledIconButton} from '../components/DisabledIconButton';
import {brightBlue, darkBrightBlue} from '../styles/colors';
import {homeScreenStyles as styles} from '../styles/homeScreen';
import {utils} from '../styles/utils';

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
					<View style={styles.column} >
						<Icon
							name="sun"
							type="feather"
							reverse={false}
							containerStyle={{backgroundColor: brightBlue}}
							iconStyle={{color: '#fff'}}
							underlayColor={darkBrightBlue}
							size={32}
							raised={true}
							onPress={() => navigate('Game')}
						/>
						<Text style={{color: brightBlue}}>
							Calm
						</Text>
					</View>
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
