import negativeWords from '../../assets/negativeWords';
import neutralWords from '../../assets/neutralWords';
import positiveWords from '../../assets/positiveWords';
import WordsLists from './interfaces/WordsLists';

const wordsLists: WordsLists = {
	positive: positiveWords,
	neutral: neutralWords,
	negative: negativeWords
};

export default wordsLists;
