import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {connect} from 'react-redux';

import AppState from '../interfaces/AppState';

interface ScoreScreenProps {
	score: number;
	scores: number[];
}

class ScoreScreen extends React.Component<ScoreScreenProps & NavigationScreenProps> {
	render() {
		const {popToTop} = this.props.navigation;
		return ( 
			<View style={styles.container}>
				<Text>
					Well Done!
				</Text>
				<Text>
					Your score is:
				</Text>
				<Text>
					{this.props.score}
				</Text>
				<Button onPress={popToTop} title="Go back to Home Screen">
				</Button>
			</View>
		); 
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#fff',
		flex: 1,
		justifyContent: 'center',
	},
});

const mapStateToProps = (state: AppState) => ({
	score: state.scores[state.scores.length - 1]
});

const ConnectedScoreScreen = connect(mapStateToProps)(ScoreScreen);

export default ConnectedScoreScreen;
