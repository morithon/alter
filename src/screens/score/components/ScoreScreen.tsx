import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {NavigationScreenProps} from 'react-navigation';
import {connect} from 'react-redux';

import AppState from '../../../interfaces/AppState';
import {utils} from '../../../styles/utils';
import {ScoreScreenProps, ScoreScreenStateProps} from '../interfaces/ScoreScreen';
import {scoreScreenStyles as styles} from '../styles/scoreScreen';

const getScoreMessage = (score: number) => {
	if (score === 0) {
		return 'Seriously?';
	} else if (score < 1200) {
		return 'You can do better!';
	} else if (score < 1500) {
		return 'That\'s ok!';
	} else if (score < 1800) {
		return 'Well done!';
	} else if (score < 1950) {
		return 'Very good!';
	} else if (score < 2050) {
		return 'That \'s great!';
	} else {
		return 'Amazing!';
	}
};

const ScoreScreen = ({score, isHighScore, navigation: {popToTop}}: ScoreScreenProps & NavigationScreenProps) => (
	<View style={styles.container}>
		<View style={styles.element}/>
		<View style={[styles.element, utils.centered]}>
			{isHighScore && (
				<Text style={styles.highScoreText}>
					NEW HIGH SCORE!
				</Text>
			)}
			<View style={styles.scoreLine}>
				<Text style={styles.text}>
					You got
				</Text>
				<Text style={[styles.text, styles.scoreText]}>
					{` ${score} `}{score !== 1 ? 'pts.' : 'pt.'}
				</Text>
			</View>
			<Text style={styles.text}>
				{getScoreMessage(score)}
			</Text>
		</View>
		<View style={styles.returnButtonContainer}>
			<Button
				onPress={popToTop}
				title="Go back to Home Screen"
				buttonStyle={styles.returnButton}>
			</Button>
		</View>
	</View>
);

const mapStateToProps = ({scores}: AppState): ScoreScreenStateProps => {
	const score = scores[scores.length - 1];
	const secondHighestScore = scores.sort((a: number, b: number) => b - a)[1] || 0;

	return {
		isHighScore: score > secondHighestScore,
		score
	};
};

const ConnectedScoreScreen = connect(mapStateToProps)(ScoreScreen);

export default ConnectedScoreScreen;
