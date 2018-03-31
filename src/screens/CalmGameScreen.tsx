import React from 'react';
import {NavigationScreenProps} from 'react-navigation';
import {connect} from 'react-redux';

import Countdown from '../components/Countdown';
import Gameplay from '../components/Gameplay';
import {GameStates} from '../components/GameStates';
import AppState from '../interfaces/AppState';

interface CalmGameScreenProps {
	gameState: GameStates;
}

const CalmGameScreen = ({gameState, navigation}: CalmGameScreenProps & NavigationScreenProps) => {
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

const ConnectedCalmGameScreen = connect(mapStateToProps)(CalmGameScreen);

export default ConnectedCalmGameScreen;
