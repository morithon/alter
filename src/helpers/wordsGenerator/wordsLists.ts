import I18n from '../../i18n/i18n';
import WordsLists from './interfaces/WordsLists';

const wordsLists: WordsLists = {
	positive: I18n.t('positiveWords') as any, // I18n can actually return string[], just not typed well
	neutral: I18n.t('neutralWords') as any,
	negative: I18n.t('negativeWords') as any
};

export default wordsLists;
