import React from 'react';
import {Text, View} from 'react-native';

import {utils} from '../styles/utils';
import {withFadeInAndOutAnimation} from './withFadeInAndOutAnimation';

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
