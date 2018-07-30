import React, {Component, ComponentType} from 'react';
import {connect, Dispatch} from 'react-redux';

import addCachedGamePoint from '../../../actions/addCachedGamePoint';
import {config} from '../../../configs/config';
import {AppAction} from '../../../interfaces/AppAction';
import AppState from '../../../interfaces/AppState';

export interface GamePointsProps {
	gamePoints: number;
	secondsToPoint: number | null;
}

export interface GamePointsWrapperStateProps {
	gamePoints: number;
	reloadingStartTime: number | null;
}

export interface GamePointsWrapperDispatchProps {
	addGamePoint: () => void;
}

export type GamePointsWrapperProps =
	GamePointsWrapperStateProps & GamePointsWrapperDispatchProps;

export default function withGamePoints
	<T extends GamePointsProps = GamePointsProps>(WrappedComponent: ComponentType<T>) {
	class GamePointsWrapper extends Component<GamePointsWrapperProps, {secondsToPoint: number | null}> {
		private timeout?: number;

		constructor(props: GamePointsWrapperProps) {
			super(props);

			this.state = {
				secondsToPoint: this.getSecondsToPoint()
			};
		}

		public componentDidMount() {
			if (this.props.reloadingStartTime) {
				console.log('did mount');
				this.checkIfShouldAddPoint();
			}
		}

		public componentDidUpdate(prevProps: GamePointsWrapperProps) {
			if (this.props.reloadingStartTime && prevProps.reloadingStartTime !== this.props.reloadingStartTime) {
				console.log('did update');
				this.checkIfShouldAddPoint();
			}
		}

		public componentWillUnmount() {
			this.clearTimeout();
		}

		private clearTimeout() {
			if (this.timeout) {
				clearInterval(this.timeout);
				this.timeout = undefined;
			}
		}

		private getSecondsToPoint(): number | null {
			if (!this.props.reloadingStartTime) {
				return null;
			}

			const secondsPassed = Math.floor((Date.now() - this.props.reloadingStartTime) / 1000);

			return config.secondsToNewPoint - secondsPassed;
		}

		private checkSecondsToPoint(): number | null {
			const secondsToPoint = this.getSecondsToPoint();

			if (this.state.secondsToPoint !== secondsToPoint) {
				this.setState({secondsToPoint});
			}

			return secondsToPoint;
		}

		private checkIfShouldAddPoint() {
			// Clear previous timeout
			this.clearTimeout();

			const secondsToPoint = this.checkSecondsToPoint();

			if (secondsToPoint === null) {
				return;
			}

			if (secondsToPoint > 0) {
				this.timeout = setTimeout(this.checkIfShouldAddPoint.bind(this), 1000);
				return;
			}

			this.props.addGamePoint();
		}

		public render() {
			const {gamePoints} = this.props;
			return (
				<WrappedComponent
					gamePoints={gamePoints}
					secondsToPoint={this.state.secondsToPoint}
					{...this.props}
				/>
			);
		}
	}

	const mapStateToProps = ({
		cachedGamePoints: gamePoints,
		cachedReloadingStartTime: reloadingStartTime
	}: AppState): GamePointsWrapperStateProps => ({
		gamePoints,
		reloadingStartTime
	});

	const mapDispatchToProps = (dispatch: Dispatch<AppAction>): GamePointsWrapperDispatchProps => ({
		addGamePoint: () => dispatch(addCachedGamePoint())
	});

	return connect<GamePointsWrapperStateProps, GamePointsWrapperDispatchProps, {}, AppState>
		(mapStateToProps, mapDispatchToProps)(GamePointsWrapper);
}
