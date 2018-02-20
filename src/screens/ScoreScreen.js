import React from 'react';
import PropTypes from 'prop-types';
import { Text, Button, StyleSheet, View } from 'react-native';

export default class ScoreScreen extends React.Component {
	render() {
		const {navigate} = this.props.navigation;
		return ( 
			<View style={styles.container}>
				<Text>
					Well Done!
				</Text>
				<Button onPress={() => navigate('Home')} title="Go back to Home Screen">
				</Button>
			</View>
		); 
	}
}

ScoreScreen.propTypes = {
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