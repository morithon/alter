import {StyleSheet} from 'react-native';
import {darkBrightBlue, orange, white} from '../../../styles/colors';
import {bigTextSize} from '../../../styles/utils';

export const scoreScreenStyles = StyleSheet.create({
	container: {
		backgroundColor: orange,
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
	text: {
		marginTop: 5,
		marginBottom: 5,
		fontSize: bigTextSize,
		fontWeight: 'bold',
		color: darkBrightBlue
	},
	scoreLine: {
		flexDirection: 'row'
	},
	scoreText: {
		color: white
	},
	highScoreText: {
		fontSize: 24,
		color: white
	},
	element: {
		flex: 4
	},
	returnButtonContainer: {
		flex: 5,
		justifyContent: 'flex-start'
	}
});
