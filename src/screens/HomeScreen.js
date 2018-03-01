import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

type HomeScreenProps = {
	navigation: {
		navigate: Function;
	};
};

export default class HomeScreen extends React.Component<HomeScreenProps> {
	static navigationOptions = {
		title: 'ABM'
	}

	render() {
		const {navigate} = this.props.navigation;
		return ( 
			<View style={styles.container}>
				<View> 
					<Button onPress={() => navigate('Game')} title="Start">
					</Button>
					<Button onPress={() => navigate('Config')} title="Config">
					</Button>
				</View>
			</View>
		); 
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});