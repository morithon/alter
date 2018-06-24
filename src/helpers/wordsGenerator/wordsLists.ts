import I18n from '../../i18n/i18n';
import WordsLists from './interfaces/WordsLists';

// I18n.t can actually return string[], just not typed well
const translate = I18n.t.bind(I18n) as (scope: string) => string | string[];

const wordsLists: WordsLists = {
	positive: translate('positiveWords') as string[],
	neutral: translate('neutralWords') as string[],
	negative: translate('negativeWords') as string[]
};

export default wordsLists;
