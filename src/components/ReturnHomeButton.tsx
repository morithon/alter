import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

import I18n from '../i18n/i18n';
import {orange} from '../styles/colors';

const styles = StyleSheet.create({
	button: {
		backgroundColor: orange
	}
});

export interface ReturnHomeButtonProps {
	popToTop: () => void;
}

const ReturnHomeButton = ({popToTop}: ReturnHomeButtonProps) => (
	<Button
		onPress={popToTop}
		title={I18n.t('returnToHomeScreen')}
		buttonStyle={styles.button}>
	</Button>
);

export default ReturnHomeButton;
