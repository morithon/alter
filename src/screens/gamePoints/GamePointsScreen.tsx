import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {connect} from 'react-redux';

import {orange} from '../../styles/colors';

import ReturnHomeButton from '../../components/ReturnHomeButton';
import AppState from '../../interfaces/AppState';

const styles = StyleSheet.create({
	container: {
		backgroundColor: orange,
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	}
});

export interface GamePointsScreenStateProps {
	gamePoints: number
	reloadingStartTime: number | null;
}

export type GamePointsScreenProps = GamePointsScreenStateProps & NavigationScreenProps;

class GamePointsScreenComponent extends React.Component<GamePointsScreenProps, {secondsToPoint: number | null}> {
	constructor(props: GamePointsScreenProps) {
		super(props);
		this.startCountdown();
		this.state = {
			secondsToPoint: null
		};
	}

	private checkTime(): number {
		if (!this.props.reloadingStartTime) {
			return -1;
		}

		const secondsToPoint = 360 - Math.floor((Date.now() - this.props.reloadingStartTime) / 1000);
		if (secondsToPoint <= 0) {
			// Give point
		}

		this.setState({secondsToPoint});

		return secondsToPoint;
	}

	private startCountdown() {
		setTimeout(() => {
			const secondsToPoint = this.checkTime();
			if (secondsToPoint > 0) {
				this.startCountdown();
			}
		}, 1000);
	}

	public render() {
		const {gamePoints, navigation: {popToTop}} = this.props;
		return (
			<View style={styles.container}>
				<View>
					<Text style={{color: 'white'}}>
						You have {gamePoints} game points
					</Text>
					{this.state.secondsToPoint && (<Text style={{color: 'white'}}>
						Next point in {this.state.secondsToPoint} seconds
					</Text>)
					}
				</View>
				<View>
					<ReturnHomeButton
						popToTop={popToTop}
					/>
				</View>
			</View>
		);
	}
}

const mapStateToProps = ({
	cachedGamePoints: gamePoints,
	cachedReloadingStartTime: reloadingStartTime
}: AppState): GamePointsScreenStateProps => ({
	gamePoints,
	reloadingStartTime
});

const mapDispatchToProps = () => ({});

const GamePointsScreen = connect<GamePointsScreenStateProps, {}, {}, AppState>
	(mapStateToProps, mapDispatchToProps)(GamePointsScreenComponent);

export default GamePointsScreen;
