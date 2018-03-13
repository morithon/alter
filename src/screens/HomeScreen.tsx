import * as React from 'react';
import {StyleSheet, View } from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import {Icon, Text} from 'react-native-elements';
import {blue, lightGray, lighterGray, brightBlue, darkBrightBlue, orange, coolBlue} from '../styles/colors';

export interface HomeScreenProps {
	navigation: NavigationScreenProp<{}>;
};


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: blue,
		alignItems: 'stretch',
		justifyContent: 'center',
	},
	row: {
		flex: 5,
		flexDirection: 'row',
		alignItems: 'center'
	},
	column: {
		flex: 1,
		alignItems: 'center',
	},
	disabled: {
		color: lightGray
	},
	header: {
		flex: 5,
		backgroundColor: orange,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerText: {
		color: coolBlue,
		fontSize: 80,
		fontWeight: 'bold',
	},
	topSpace: {
		flex: 1
	},
	bottomSpace: {
		flex: 1
	}
});

export default class HomeScreen extends React.Component<HomeScreenProps, {}> {
	render() {
		const {navigate} = this.props.navigation;
		return ( 
			<View style={styles.container}>
				<View style={styles.header}>
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
						<Text>
							Calm
						</Text>
					</View>
					<View style={styles.column} >
						<Icon
							name="glasses"
							type="material-community"
							color={lightGray}
							reverse={true}
							reverseColor={lighterGray}
							size={32}
							raised={false}
						/>
						<Text style={styles.disabled}>
							Sharp
						</Text>
						<Text style={styles.disabled}>
							(Coming Fall 2018)
						</Text>
					</View>
				</View>
				<View style={styles.row}> 
					<View style={styles.column} >
						<Icon
							name="block"
							color={lightGray}
							reverse={true}
							reverseColor={lighterGray}
							size={32}
						/>
						<Text style={styles.disabled}>
							Sober
						</Text>
						<Text style={styles.disabled}>
							(TBD)
						</Text>
					</View>
					<View style={styles.column} >
						<Icon
							name="block"
							color={lightGray}
							reverse={true}
							reverseColor={lighterGray}
							size={32}
						/>
						<Text style={styles.disabled}>
							Non-smoking
						</Text>
						<Text style={styles.disabled}>
							(TBD)
						</Text>
					</View>
				</View>
				<View style={styles.bottomSpace}> 
				</View>
			</View>
		); 
	}
}