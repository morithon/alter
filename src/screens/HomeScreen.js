import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, View } from 'react-native';

export default class HomeScreen extends React.Component {
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

HomeScreen.propTypes = {
	navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});