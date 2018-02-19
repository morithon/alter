import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 20,
		backgroundColor: 'skyblue',
		alignItems: 'stretch',
		justifyContent: 'center'
	},
	text: {
		fontSize: 42,
		fontWeight: 'bold'
	},
	wordContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

const ValueDisplay = ({mode, value, focusOn, onPress}) => (
	<View style={styles.container}>
		{mode === 'displayValues' && (
			<View style={styles.wordContainer}>
				<Text style={styles.text}>{value}</Text>
			</View>
		)}
		{mode === 'waitForTouch' && (
			<TouchableHighlight
				style={styles.wordContainer}
				onPress={() => onPress(focusOn)}
			>
				<Text style={styles.text}>
					{focusOn && '+'}
				</Text>
			</TouchableHighlight>
		)}
	</View>
);

ValueDisplay.propTypes = {
	mode: PropTypes.string.isRequired,
	value: PropTypes.string,
	focusOn: PropTypes.bool,
	onPress: PropTypes.func.isRequired
};

export default ValueDisplay;