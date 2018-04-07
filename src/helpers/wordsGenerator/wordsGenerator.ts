import Word from '../../interfaces/Word';
import {getRandomNumber} from '../getRandomNumber';
import FocusValues from './interfaces/FocusValues';
import OrderedWords from './interfaces/OrderedWords';
import WordAffect from './interfaces/WordAffect';
import config from './wordsGeneratorConfig';
import wordsLists from './wordsLists';

// Generates a number between -1 and 1
const randomSort = () => getRandomNumber(2) - 1;

function* wordsGenerator() {
	const valuesGenerator = getValuesGenerator();

	let reset;
	while (true) {
		const {focusOnValue, focusAwayFromValue}: FocusValues = valuesGenerator.next(reset).value;
		reset = yield getOrderedValues(focusOnValue, focusAwayFromValue);
	}
}

function* getValuesGenerator(): IterableIterator<FocusValues> {
	let focusOnValueIterator = getRandomizedWords(config.focusOn);
	let focusAwayFromValueIterator = getRandomizedWords(config.focusAwayFrom);
	let reset;

	while (true) {
		const nextFocusOn = focusOnValueIterator.next();
		const nextFocusAwayFrom = focusAwayFromValueIterator.next();

		// If reset flag is on or we ran out of words in one of the iterators, reset iterators and run the loop again
		if (reset || nextFocusOn.done || nextFocusAwayFrom.done) {
			focusOnValueIterator = getRandomizedWords(config.focusOn);
			focusAwayFromValueIterator = getRandomizedWords(config.focusAwayFrom);
			continue;
		}

		reset = yield {focusOnValue: nextFocusOn.value, focusAwayFromValue: nextFocusAwayFrom.value};
	}
}

const getRandomizedWords = (affect: WordAffect): IterableIterator<string> => {
	return wordsLists[affect].sort(randomSort)[Symbol.iterator]();
};

const getOrderedValues = (focusOnValue: string, focusAwayFromValue: string) => {
	const words = getRandomlyOrderedWords(focusOnValue, focusAwayFromValue);

	const newValues: OrderedWords = {
		topValue: words.pop() as Word,
		bottomValue: words.pop() as Word
	};

	return newValues;
};

const getRandomlyOrderedWords = (focusOnValue: string, focusAwayFromValue: string): Word[] => {
	const valueOrder = [{
		value: focusOnValue,
		focusOn: true
	}];

	valueOrder.splice(getRandomNumber(1), 0, {
		value: focusAwayFromValue,
		focusOn: false
	});

	return valueOrder;
};

export default wordsGenerator;
