import I18n from '../../../i18n/i18n';

export const getScoreMessage = (score: number): string => {
	if (score === 0) {
		return I18n.t('zeroScoreMessage');
	} else if (score < 1200) {
		return I18n.t('veryLowScoreMessage');
	} else if (score < 1500) {
		return I18n.t('lowScoreMessage');
	} else if (score < 1800) {
		return I18n.t('mediumScoreMessage');
	} else if (score < 1950) {
		return I18n.t('highScoreMessage');
	} else if (score < 2050) {
		return I18n.t('veryHighScoreMessage');
	} else {
		return I18n.t('extremelyHighScoreMessage');
	}
};
