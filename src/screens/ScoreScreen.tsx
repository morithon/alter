import React from 'react';
import {connect} from 'react-redux';
import { Text, Button, StyleSheet, View } from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import AppState from '../interfaces/AppState';

interface ScoreScreenProps {
	score: number;
	scores: number[];
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

const ScoreScreen = ({score, navigation: {popToTop}}: ScoreScreenProps & NavigationScreenProps) => (
	<View style={styles.container}>
		<Text>
			Well Done!
		</Text>
		<Text>
			Your score is:
		</Text>
		<Text>
			{score}
		</Text>
		<Button onPress={popToTop} title="Go back to Home Screen">
		</Button>
	</View>
);

const mapStateToProps = (state: AppState) => ({
	score: state.scores[state.scores.length - 1]
});

const ConnectedScoreScreen = connect(mapStateToProps)(ScoreScreen);

export default ConnectedScoreScreen;