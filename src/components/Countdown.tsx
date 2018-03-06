import React from 'react';
import {connect} from 'react-redux';
import {Text, View } from 'react-native';

import changeGameState from '../actions/changeGameState';
import {GameStates} from './GameStates';

interface CountdownProps {
	onCountdownEnd: () => null;
};

interface CountdownState {
	countdownToGame: number;
}

class Countdown extends React.Component<CountdownProps, CountdownState> {
	countdownInterval = 800;
	countdownFrom = 1;
	intervalId: number | null = null;

	constructor(props) {
		super(props);
		this.state = {
			countdownToGame: this.countdownFrom
		};
	}

	componentDidMount() {
		this.startCountdown();
	}

	componentWillUnmount() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}
	}

	startCountdown() {
		this.intervalId = setInterval(this.countdown.bind(this), this.countdownInterval);
	}

	countdown() {
		if (this.state.countdownToGame > 1) {
			this.setState({countdownToGame: this.state.countdownToGame - 1});
		} else {
			this.stopCountdown();
		}
	}

	stopCountdown() {
		clearInterval(this.intervalId);
		this.intervalId = null;
		this.props.onCountdownEnd();
	}

	render() {
		return (
			<View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
				<Text style={{fontSize: 16}}>
					{this.state.countdownToGame}
				</Text>
			</View>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	onCountdownEnd: () => dispatch(changeGameState(GameStates.DISPLAY_VALUES))
});

const CountdownComponent = connect(() => ({}), mapDispatchToProps)(Countdown);

export default CountdownComponent;