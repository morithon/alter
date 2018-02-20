import React from 'react';
import {connect} from 'react-redux';
import Countdown from '../components/Countdown';
import GAME_STATES from '../components/gameStates';
import Gameplay from '../components/Gameplay';

type Props = {
	gameState: string;
	navigation: Object;
};

class GameScreen extends React.Component<Props> {
	render() {
		const {gameState, navigation} = this.props;
		if (gameState === GAME_STATES.Countdown) {
			return (
				<Countdown>
				</Countdown>
			);
		} else if (gameState === GAME_STATES.Playing) {
			return ( 
				<Gameplay
					onGameEnd={() => navigation.navigate('Score')}>
				</Gameplay>
			); 
		}
	}
}

const mapStateToProps = state => ({
	gameState: state.gameState
});

const ConnectedGameScreen = connect(mapStateToProps)(GameScreen);

export default ConnectedGameScreen;