import {StyleSheet} from 'react-native';
import {black, darkCoolBlue} from './colors';

export const bigTextSize = 42;

export const utils = StyleSheet.create({
	shadow: {
		shadowOffset: {width: 2, height: 2},
		shadowColor: black,
		shadowOpacity: 0.3,
		shadowRadius: 4
	},
	bigText: {
		fontSize: bigTextSize,
		fontWeight: 'bold',
		color: darkCoolBlue
	},
	centered: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});
