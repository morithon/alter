import React from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet } from 'react-native';

import changeGameState from '../actions/changeGameState';
import {GameStates} from './GameStates';
import { Dispatch } from 'redux';
import { AppAction } from '../interfaces/AppAction';
import ChangeGameStateAction from '../interfaces/ChangeGameStateAction';
import { utils } from '../styles/utils';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

interface CountdownProps {
	onCountdownEnd: () => ChangeGameStateAction;
};

interface CountdownState {
	countdownToGame: number;
}

class Countdown extends React.Component<CountdownProps, CountdownState> {
	countdownInterval = 800;
	countdownFrom = 3;
	intervalId: number | null = null;

	constructor(props: CountdownProps) {
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
		if (this.intervalId !== null) {
			clearInterval(this.intervalId);
		}

		this.intervalId = null;
		this.props.onCountdownEnd();
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={utils.bigText}>
					{this.state.countdownToGame}
				</Text>
			</View>
		);
	}
}

const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => ({
	onCountdownEnd: () => dispatch(changeGameState(GameStates.DISPLAY_VALUES))
});

const CountdownComponent = connect(() => ({}), mapDispatchToProps)(Countdown);

export default CountdownComponent;