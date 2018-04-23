import {StyleSheet} from 'react-native';
import {brightBlue} from './colors';

export const gameplay = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'stretch',
		justifyContent: 'center'
	},
	valueDisplay: {
		flex: 20
	},
	divider: {
		height: 16,
		backgroundColor: brightBlue
	},
	scoreContainer: {
		alignItems: 'center'
	}
});
