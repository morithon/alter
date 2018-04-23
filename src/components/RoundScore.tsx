
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';

import AppState from '../interfaces/AppState';
import {white} from '../styles/colors';

const styles = StyleSheet.create({
	score: {
		color: white,
		fontSize: 16,
		lineHeight: 17,
		fontWeight: 'bold',
		textAlign: 'center'
	}
});

interface RoundScoreStateProps {
	score: number;
}

type RoundScoreProps = RoundScoreStateProps;

const RoundScoreComponent = ({score}: RoundScoreProps) => (<Text style={[styles.score]}>{score}</Text>);

const mapStateToProps = ({roundScore: score}: AppState): RoundScoreStateProps => ({score});

const RoundScore = connect<RoundScoreStateProps, {}, {}, AppState>(mapStateToProps)(RoundScoreComponent);

export {RoundScore};
