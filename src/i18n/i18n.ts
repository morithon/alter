import I18n from 'react-native-i18n';
import en from './en/en';
import pl from './pl/pl';

I18n.defaultLocale = 'pl-PL';
I18n.locale = 'pl-PL';

I18n.fallbacks = true;

I18n.translations = {
	en,
	pl
};

export default I18n;
