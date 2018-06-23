import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {NavigationScreenProps} from 'react-navigation';
import {connect} from 'react-redux';

import I18n from '../../../i18n/i18n';
import AppState from '../../../interfaces/AppState';
import {utils} from '../../../styles/utils';
import {ScoreScreenProps, ScoreScreenStateProps} from '../interfaces/ScoreScreen';
import {scoreScreenStyles as styles} from '../styles/scoreScreen';

const getScoreMessage = (score: number) => {
	if (score === 0) {
		return I18n.t('zeroScoreMessage');
	} else if (score < 1200) {
		return I18n.t('veryLowScoreMessage');
	} else if (score < 1500) {
		return I18n.t('lowScoreMessage');
	} else if (score < 1800) {
		return I18n.t('mediumScoreMessage');
	} else if (score < 1950) {
		return I18n.t('highScoreMessage');
	} else if (score < 2050) {
		return I18n.t('veryHighScoreMessage');
	} else {
		return I18n.t('extremelyHighScoreMessage');
	}
};

const ScoreScreen = ({score, isHighScore, navigation: {popToTop}}: ScoreScreenProps & NavigationScreenProps) => (
	<View style={styles.container}>
		<View style={styles.element}/>
		<View style={[styles.element, utils.centered]}>
			{isHighScore && (
				<Text style={styles.highScoreText}>
					{I18n.t('newHighScoreMessage')}
				</Text>
			)}
			<View style={styles.scoreLine}>
				<Text style={styles.text}>
					{I18n.t('pointGettingMessage')}
				</Text>
				<Text style={[styles.text, styles.scoreText]}>
					{` ${score} `}{score !== 1 ? I18n.t('pointAbbreviationPlural') : I18n.t('pointAbbreviationSingular')}
				</Text>
			</View>
			<Text style={styles.text}>
				{getScoreMessage(score)}
			</Text>
		</View>
		<View style={styles.returnButtonContainer}>
			<Button
				onPress={popToTop}
				title={I18n.t('returnToHomeScreen')}
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
