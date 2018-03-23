import React from 'react';
import {NavigationScreenProps} from 'react-navigation';
import {connect} from 'react-redux';

import Countdown from '../components/Countdown';
import Gameplay from '../components/Gameplay';
import {GameStates} from '../components/GameStates';
import AppState from '../interfaces/AppState';

interface GameScreenProps {
	gameState: GameStates;
}

const GameScreen = ({gameState, navigation}: GameScreenProps & NavigationScreenProps) => {
	if (gameState === GameStates.COUNTDOWN) {
		return (
			<Countdown/>
		);
	}

	return (
		<Gameplay
			onGameEnd={() => navigation.replace('Score')}>
		</Gameplay>
	);
};

const mapStateToProps = (state: AppState) => ({
	gameState: state.gameState
});

const ConnectedGameScreen = connect(mapStateToProps)(GameScreen);

export default ConnectedGameScreen;
