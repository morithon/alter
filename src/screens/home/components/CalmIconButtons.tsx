import React from 'react';
import {View} from 'react-native';
import {Icon, Text} from 'react-native-elements';

import {darkBrightBlue} from '../../../styles/colors';
import {calmIconButtonStyles as styles} from '../styles/calmIconButton';
import {homeScreenStyles} from '../styles/homeScreen';

export interface CalmIconButtonProps {
	onPress: () => void;
}

export const CalmIconButton = ({onPress}: CalmIconButtonProps) => (
		<View style={homeScreenStyles.column} >
			<Icon
				name="sun"
				type="feather"
				reverse={false}
				containerStyle={styles.container}
				iconStyle={styles.icon}
				underlayColor={darkBrightBlue}
				size={32}
				raised={true}
				onPress={onPress}
			/>
			<Text style={styles.text}>
				Calm
			</Text>
		</View>
	);
