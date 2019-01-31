import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

import config from '../config/config';
import {lightGray} from '../styles/colors';
import {utils} from '../styles/utils';
import {GameStates} from './GameStates';
import Word from './Word';

const styles = StyleSheet.create({
	container: {
		flex: 1
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
	onPress: (focusOn: boolean) => void;
	onWordFadeOut?: () => void;
}

const ValueDisplay = ({mode, value, focusOn, onPress, onWordFadeOut}: ValueDisplayProps) => (
	<View style={[styles.container]}>
		{mode === GameStates.DISPLAY_VALUES && (
			<View style={styles.wordContainer}>
				<Word
					value={value}
					fadeToDuration={config.wordFadeToDuration}
					showForDuration={config.wordShowForDuration}
					onFadeOut={onWordFadeOut}
				/>
			</View>
		)}
		{mode === GameStates.WAIT_FOR_USER_PRESS && (
			<TouchableHighlight
				underlayColor={lightGray}
				style={styles.wordContainer}
				onPress={() => onPress(focusOn)}
			>
				<Text style={utils.bigText}>
					{focusOn && '+'}
				</Text>
			</TouchableHighlight>
		)}
	</View>
);

export default ValueDisplay;
