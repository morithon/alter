const words = {
	positive: ['happiness', 'kindness'],
	neutral: ['real', 'table']
};

// Generates a number up to and including max
const getRandomNumber = (max: number) => Math.floor(Math.random() * (max + 1));

// Generates a number between -1 and 1
const randomSort = () => getRandomNumber(2) - 1; 

function* wordsGenerator() {
	const valuesGenerator = getValuesGenerator();

	let reset;
	while (true) {
		const {focusOnValue, focusAwayFromValue} = valuesGenerator.next(reset).value;
		reset = yield getOrderedValues(focusOnValue, focusAwayFromValue);
	}
}

function* getValuesGenerator() {
	let focusOnValueIterator = getRandomizedWords('positive');
	let focusAwayFromValueIterator = getRandomizedWords('neutral');
	let reset;

	while (true) {
		const nextFocusOn = focusOnValueIterator.next();
		const nextFocusAwayFrom = focusAwayFromValueIterator.next();

		// If reset flag is on or we ran out of words in one of the iterators, reset iterators and run the loop again
		if (reset || nextFocusOn.done || nextFocusAwayFrom.done) {
			focusOnValueIterator = getRandomizedWords('positive');
			focusAwayFromValueIterator = getRandomizedWords('neutral');
			continue;
		}

		reset = yield {focusOnValue: nextFocusOn.value, focusAwayFromValue: nextFocusAwayFrom.value};
	}
}

const getRandomizedWords = (affect) => {
	return words[affect].sort(randomSort)[Symbol.iterator]();
};

const getOrderedValues = (focusOnValue, focusAwayFromValue) => {
	const valueOrder = getValueOrderArray();

	const newValues = {};

	newValues[valueOrder.pop()] = {
		value: focusOnValue,
		focusOn: true
	};

	newValues[valueOrder.pop()] = {
		value: focusAwayFromValue,
		focusOn: false
	};

	return newValues;
};

const getValueOrderArray = () => {
	const valueOrder = [];

	if (getRandomNumber(1)) {
		valueOrder.push('topValue');
		valueOrder.push('bottomValue');
	} else {
		valueOrder.push('bottomValue');
		valueOrder.push('topValue');
	}

	return valueOrder;
};

export default wordsGenerator;