import React from 'react';
import {View } from 'react-native';

import ValueDisplay from './ValueDisplay';
import Divider from './Divider';

const words = {
	positive: ['happiness', 'kindness', 'relaxation'],
	neutral: ['real', 'mountain', 'table']
};

// Generates a number up to and including max
const getRandomNumber = (max: number) => Math.floor(Math.random() * (max + 1));

// Generates a number between -1 and 1
const randomSort = () => getRandomNumber(2) - 1; 

class Gameplay extends React.Component {
	displayWordsInterval = 500;
	feedbackInterval = 700;

	constructor(props) {
		super(props);

		this.state = {
			mode: 'displayValues',
			topValue: {},
			bottomValue: {}
		};
	}

	componentWillMount() {
		this.startGame();
	}

	startGame() {
		this.focusOnValueIterator = words.positive.sort(randomSort)[Symbol.iterator]();
		this.focusAwayFromValueIterator = words.neutral.sort(randomSort)[Symbol.iterator]();

		this.getNewWordPair();
	}

	getNewWordPair() {
		const focusOnValue = this.focusOnValueIterator.next().value;
		const focusAwayFromValue = this.focusAwayFromValueIterator.next().value;

		const newState = {mode: 'displayValues'};
		const valueOrder = this._getValueOrderArray();

		newState[valueOrder.pop()] = {
			value: focusOnValue,
			focusOn: true
		};

		newState[valueOrder.pop()] = {
			value: focusAwayFromValue,
			focusOn: false
		};

		this.setState(newState);
		this.startWordsShownTimeout();
	}

	_getValueOrderArray() {
		const valueOrder = [];

		if (getRandomNumber(1)) {
			valueOrder.push('topValue');
			valueOrder.push('bottomValue');
		} else {
			valueOrder.push('bottomValue');
			valueOrder.push('topValue');
		}

		return valueOrder;
	}

	startWordsShownTimeout() {
		setTimeout(() => {
			this.setState({mode: 'waitForTouch'});
		}, this.displayWordsInterval);
	}

	handlePress(result) {
		const mode = result ? 'success' : 'failure';

		this.setState({mode});

		setTimeout(this.getNewWordPair.bind(this), this.feedbackInterval);
	}

	getIsSuccess() {
		if (this.state.mode === 'success') {
			return true;
		} else if (this.state.mode === 'failure') {
			return false;
		} else {
			return;
		}
	}

	render() {
		const {mode, topValue, bottomValue} = this.state;
		return (
			<View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center'}}>
				<ValueDisplay
					mode={mode}
					value={topValue.value}
					focusOn={topValue.focusOn}
					onPress={this.handlePress.bind(this)}
				></ValueDisplay>

				<Divider isSuccess={this.getIsSuccess()}></Divider>

				<ValueDisplay
					mode={mode}
					value={bottomValue.value}
					focusOn={bottomValue.focusOn}
					onPress={this.handlePress.bind(this)}
				></ValueDisplay>
			</View>
		);
	}
}

export default Gameplay;