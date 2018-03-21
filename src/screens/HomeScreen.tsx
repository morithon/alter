import React from 'react';
import {View} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {Icon, Text} from 'react-native-elements';
import {brightBlue, darkBrightBlue} from '../styles/colors';
import { utils } from '../styles/utils';
import {homeScreenStyles as styles} from '../styles/homeScreen';
import { DisabledIconButton } from '../components/DisabledIconButton';

export default class HomeScreen extends React.Component<NavigationScreenProps, {}> {
	render() {
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
						iconName='glasses'
						iconType='material-community'
						caption='Sharp'
						releaseDateCaption='(Coming Fall 2018)'
					/>
				</View>
				<View style={styles.row}> 
					<DisabledIconButton
						caption='Sober'
					/>
					<DisabledIconButton
						caption='Non-smoking'
					/>
				</View>
				<View style={styles.bottomSpace}> 
				</View>
			</View>
		); 
	}
};