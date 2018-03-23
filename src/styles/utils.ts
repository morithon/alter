import {StyleSheet} from 'react-native';
import { darkCoolBlue } from './colors';

export const utils = StyleSheet.create({
	shadow: {
		shadowOffset: {width: 2, height: 2},
		shadowColor: 'black',
		shadowOpacity: 0.3,
		shadowRadius: 4
	},
	bigText: {
		fontSize: 42,
		fontWeight: 'bold',
		color: darkCoolBlue
	}
});
