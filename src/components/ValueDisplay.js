import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import GAME_STATES from './gameStates';

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

type ValueDisplayProps = {
	mode: 'displayValues' | 'waitForTouch';
	value: string;
	focusOn: boolean;
	onPress: Function;
};

const ValueDisplay = ({mode, value, focusOn, onPress}: ValueDisplayProps) => (
	<View style={styles.container}>
		{mode === GAME_STATES.DisplayValues && (
			<View style={styles.wordContainer}>
				<Text style={styles.text}>{value}</Text>
			</View>
		)}
		{mode === GAME_STATES.WaitForUserPress && (
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

export default ValueDisplay;