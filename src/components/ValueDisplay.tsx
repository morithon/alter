import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import {GameStates} from './GameStates';
import Word from './Word';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'skyblue',
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

export interface ValueDisplayProps {
	mode: GameStates;
	value: string;
	focusOn: boolean;
	onPress: (focusOn: boolean) => null;
	onWordFadeOut?: () => null;
};

const ValueDisplay = ({mode, value, focusOn, onPress, onWordFadeOut}: ValueDisplayProps) => (
	<View style={styles.container}>
		{mode === GameStates.DISPLAY_VALUES && (
			<View style={styles.wordContainer}>
				<Word
					value={value}
					fadeToDuration={50}
					showForDuration={400}
					onFadeOut={onWordFadeOut}
				/>
			</View>
		)}
		{mode === GameStates.WAIT_FOR_USER_PRESS && (
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