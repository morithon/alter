import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import {Icon, Text} from 'react-native-elements';

export interface HomeScreenProps {
	navigation: NavigationScreenProp<{}>;
};

export default class HomeScreen extends React.Component<HomeScreenProps, {}> {
	render() {
		const {navigate} = this.props.navigation;
		return ( 
			<View style={styles.container}>
				<View style={styles.row}> 
					<View style={styles.column} >
						<Icon
							name="sun"
							type="feather"
							reverse={false}
							containerStyle={{backgroundColor: "#0069c0"}}
							iconStyle={{color: '#ffeb3b'}}
							underlayColor="#003f8f"
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
							color="#cfcfcf"
							reverse={true}
							reverseColor="#aeaeae"
							size={32}
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
							color="#cfcfcf"
							reverse={true}
							reverseColor="#aeaeae"
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
							color="#cfcfcf"
							reverse={true}
							reverseColor="#aeaeae"
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
			</View>
		); 
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'stretch',
		justifyContent: 'center',
	},
	row: {
		flexDirection: 'row'
	},
	column: {
		flex: 1,
		alignItems: 'center',
	},
	disabled: {
		color: "#cfcfcf"
	}
});