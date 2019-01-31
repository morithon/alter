import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import changeGameState from '../actions/changeGameState';
<<<<<<< HEAD
import {config} from '../configs/config';
=======
import config from '../config/config';
>>>>>>> master
import {AppAction} from '../interfaces/AppAction';
import ChangeGameStateAction from '../interfaces/ChangeGameStateAction';
import {utils} from '../styles/utils';
import {GameStates} from './GameStates';

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
}

interface CountdownState {
	countdownToGame: number;
}

class Countdown extends React.Component<CountdownProps, CountdownState> {
<<<<<<< HEAD
	private countdownInterval = 800;
=======
	private countdownInterval = config.countdownInterval;
>>>>>>> master
	private countdownFrom = config.countdownFrom;
	private intervalId: number | null = null;

	constructor(props: CountdownProps) {
		super(props);
		this.state = {
			countdownToGame: this.countdownFrom
		};
	}

	public componentDidMount() {
		this.startCountdown();
	}

	public componentWillUnmount() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}
	}

	public render() {
		return (
			<View style={styles.container}>
				<Text style={utils.bigText}>
					{this.state.countdownToGame}
				</Text>
			</View>
		);
	}

	private startCountdown() {
		this.intervalId = setInterval(this.countdown.bind(this), this.countdownInterval);
	}

	private countdown() {
		if (this.state.countdownToGame > 1) {
			this.setState({countdownToGame: this.state.countdownToGame - 1});
		} else {
			this.stopCountdown();
		}
	}

	private stopCountdown() {
		if (this.intervalId !== null) {
			clearInterval(this.intervalId);
		}

		this.intervalId = null;
		this.props.onCountdownEnd();
	}
}

const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => ({
	onCountdownEnd: () => dispatch(changeGameState(GameStates.DISPLAY_VALUES))
});

const CountdownComponent = connect(() => ({}), mapDispatchToProps)(Countdown);

export default CountdownComponent;
