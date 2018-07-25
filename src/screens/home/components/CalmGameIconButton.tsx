import React from 'react';
import {AsyncStorage, View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import {connect, Dispatch} from 'react-redux';

import removeCachedGamePointActionCreator from '../../../actions/removeCachedGamePoint';
import I18n from '../../../i18n/i18n';
import {AppAction} from '../../../interfaces/AppAction';
import AppState from '../../../interfaces/AppState';
import {darkBrightBlue} from '../../../styles/colors';
import {
	CalmGameIconButtonDispatchProps,
	CalmGameIconButtonOwnProps,
	CalmGameIconButtonProps,
	CalmGameIconButtonStateProps
} from '../interfaces/CalmGameIconButton';
import {calmGameIconButtonStyles as styles} from '../styles/calmGameIconButton';
import {homeScreenStyles} from '../styles/homeScreen';

const CalmGameIconButtonComponent = ({
	navigate,
	goToIntro,
	gamePoints,
	removeCachedGamePoint}: CalmGameIconButtonProps
) => {
	const checkGamePoints = async (): Promise<boolean> => {
		if (gamePoints > 0) {
			removeCachedGamePoint();

			return true;
		}

		return false;
	};

	const handlePress = async () => {
		const canUserPlay = await checkGamePoints();
		if (!canUserPlay) {
			return navigate('GamePoints');
		}

		return goToIntro ? navigate('CalmIntro') : navigate('CalmGame');
	};

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

const mapStateToProps =
	({userInfo: {hasSeenCalmIntro}, cachedGamePoints: gamePoints}: AppState): CalmGameIconButtonStateProps => ({
		goToIntro: !hasSeenCalmIntro,
		gamePoints
	});

const mapDispatchToProps = (dispatch: Dispatch<AppAction>): CalmGameIconButtonDispatchProps => ({
	removeCachedGamePoint: () => dispatch(removeCachedGamePointActionCreator())
});

const CalmGameIconButton = connect<
		CalmGameIconButtonStateProps,
		CalmGameIconButtonDispatchProps,
		CalmGameIconButtonOwnProps,
		AppState
	>
	(mapStateToProps, mapDispatchToProps)(CalmGameIconButtonComponent);

export default CalmGameIconButton;
