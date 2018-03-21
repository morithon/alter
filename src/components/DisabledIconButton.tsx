import React from 'react';
import {View} from 'react-native';
import {Icon, Text} from 'react-native-elements';

import {lightGray, lighterGray} from '../styles/colors';
import {disabledIconButtonStyles as styles} from '../styles/disabledIconButton';
import {homeScreenStyles} from '../styles/homeScreen';

export interface DisabledIconButton {
	iconName?: string;
	iconType?: string;
	caption: string;
	releaseDateCaption?: string;
}

export const DisabledIconButton = ({iconName = 'block', caption, releaseDateCaption = '(TBD)', iconType}: DisabledIconButton) => (
	<View style={homeScreenStyles.column} >
		<Icon
			name={iconName}
			type={iconType}
			color={lighterGray}
			reverse={true}
			reverseColor={lightGray}
			size={32}
		/>
		<Text style={styles.text}>
			{caption}
		</Text>
		<Text style={styles.text}>
			{releaseDateCaption}
		</Text>
	</View>
);