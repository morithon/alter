import * as React from 'react';
import {connect} from 'react-redux';
import {NavigationScreenProps} from 'react-navigation';

import Countdown from '../components/Countdown';
import {GameStates} from '../components/GameStates';
import Gameplay from '../components/Gameplay';

interface GameScreenProps {
	gameState: string;
};

class GameScreen extends React.Component<GameScreenProps & NavigationScreenProps, {}> {
	render() {
		const {gameState, navigation} = this.props;
		if (gameState === GameStates.COUNTDOWN) {
			return (
				<Countdown/>
			);
		}
		
		return ( 
			<Gameplay
				onGameEnd={() => navigation.navigate('Score')}>
			</Gameplay>
		); 
	}
}

const mapStateToProps = state => ({
	gameState: state.gameState
});

const ConnectedGameScreen = connect(mapStateToProps)(GameScreen);

export default ConnectedGameScreen;