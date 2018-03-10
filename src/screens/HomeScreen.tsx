import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import {NavigationScreenProp} from 'react-navigation';

export interface HomeScreenProps {
	navigation: NavigationScreenProp<{}>;
};

export default class HomeScreen extends React.Component<HomeScreenProps, {}> {
	static navigationOptions = {
		title: 'ABM'
	}

	render() {
		const {navigate} = this.props.navigation;
		return ( 
			<View style={styles.container}>
				<View> 
					<Button color="#01579b" onPress={() => navigate('Game')} title="Start">
					</Button>
					<Button color="#03a9f4" onPress={() => navigate('Config')} title="Config">
					</Button>
				</View>
			</View>
		); 
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#b3e5fc',
		alignItems: 'center',
		justifyContent: 'center',
	},
});