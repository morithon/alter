import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

import {config} from '../configs/config';
import {ValueDisplayProps} from '../interfaces/ValueDisplay';
import {lightBlue} from '../styles/colors';
import {utils} from '../styles/utils';
import {GameStates} from './GameStates';
import Word from './Word';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	wordContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

const ValueDisplay = ({mode, value, focusOn, onPress, onWordFadeOut}: ValueDisplayProps) => (
	<View style={[styles.container]}>
		{mode === GameStates.DISPLAY_VALUES && (
			<View style={[styles.wordContainer]}>
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
				underlayColor={lightBlue}
				style={[styles.wordContainer]}
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
