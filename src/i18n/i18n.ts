import I18n from 'react-native-i18n';
import {devConfig} from '../configs/devConfig';
import en from './en/en';
import pl from './pl/pl';

if (__DEV__ && devConfig.locale) {
	I18n.defaultLocale = devConfig.locale;
	I18n.locale = devConfig.locale;
}

I18n.fallbacks = true;

I18n.translations = {
	en,
	pl
};

export default I18n;
