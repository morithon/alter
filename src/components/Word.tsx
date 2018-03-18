import React from 'react';
import {View, Text} from 'react-native';
import { withFadeInAndOutAnimation } from './withFadeInAndOutAnimation';
import { utils } from '../styles/utils';

export interface WordProps {
	value: string;
}

const Word = ({value}: WordProps) =>  (
	<View style={{flex: 1, justifyContent: 'center'}}>
		<Text style={utils.bigText}>{value}</Text>
	</View>
);

const shouldAnimate = () => true;

export default withFadeInAndOutAnimation<WordProps>(Word, shouldAnimate);