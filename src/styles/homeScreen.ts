import {StyleSheet} from 'react-native';
import {brightBlue, orange} from '../styles/colors';

export const homeScreenStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
	},
	row: {
		flex: 5,
		flexDirection: 'row',
		alignItems: 'center'
	},
	column: {
		alignItems: 'center',
		flex: 1
	},
	header: {
		flex: 5,
		backgroundColor: orange,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerText: {
		fontFamily: 'Cochin',
		fontWeight: 'bold',
		color: 'white',
		fontSize: 80,
	},
	iconText: {
		fontWeight: 'bold',
		color: brightBlue,
		fontSize: 24,
	},
	topSpace: {
		flex: 1
	},
	bottomSpace: {
		flex: 1
	}
});
