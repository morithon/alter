import React from 'react';
import {View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {connect} from 'react-redux';

import I18n from '../../../i18n/i18n';
import AppState from '../../../interfaces/AppState';
import {darkBrightBlue} from '../../../styles/colors';
import {
	CalmGameIconButtonOwnProps,
	CalmGameIconButtonProps,
	CalmGameIconButtonStateProps
} from '../interfaces/CalmGameIconButton';
import {calmGameIconButtonStyles as styles} from '../styles/calmGameIconButton';
import {homeScreenStyles} from '../styles/homeScreen';

const CalmGameIconButtonComponent = ({navigate, goToIntro}: CalmGameIconButtonProps) => {
	const handlePress = () => goToIntro ? navigate('CalmIntro') : navigate('CalmGame');

	return (
		<View style={homeScreenStyles.column} >
			<Icon
				name="sun"
				type="feather"
				reverse={false}
				containerStyle={styles.container}
				iconStyle={styles.icon}
				underlayColor={darkBrightBlue}
				size={32}
				raised={true}
				onPress={handlePress}
			/>
			<Text style={styles.text}>
				{I18n.t('calmGameName')}
			</Text>
		</View>
	);
};

const mapStateToProps = ({userInfo: {hasSeenCalmIntro}}: AppState) => ({
	goToIntro: !hasSeenCalmIntro
});

const CalmGameIconButton = connect<CalmGameIconButtonStateProps, CalmGameIconButtonOwnProps, {}, AppState>
	(mapStateToProps)(CalmGameIconButtonComponent);

export default CalmGameIconButton;
