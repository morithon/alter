import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { withFadeInAndOutAnimation } from './withFadeInAndOutAnimation';

export interface WordProps {
	value: string;
}

const styles = StyleSheet.create({
	text: {
		fontSize: 42,
		fontWeight: 'bold',
	}
});

const Word = ({value}: WordProps) =>  (
	<View style={{flex: 1, justifyContent: 'center'}}>
		<Text style={styles.text}>{value}</Text>
	</View>
);

const shouldAnimate = () => true;

export default withFadeInAndOutAnimation<WordProps>(Word, shouldAnimate);