import React from 'react';
import {StyleSheet, View} from 'react-native';
import { withFadeInAndOutAnimation, FadeInAndOutAnimationProps } from './withFadeInAndOutAnimation';

const styles = StyleSheet.create({
	divider: {
		flex: 1
	},
	success: {
		backgroundColor: 'green'
	},
	failure: {
		backgroundColor: 'red'
	}
});

interface DividerProps {
	isSuccess?: boolean;
};

const getStyle = (isSuccess: boolean | undefined) => {
	if (isSuccess === true) {
		return styles.success;
	} else if (isSuccess === false) {
		return styles.failure;
	}

	return;
};

const Divider = ({isSuccess}: DividerProps) => <View style={[styles.divider, getStyle(isSuccess)]}/>;

const shouldStartAnimation =
	(prevProps: FadeInAndOutAnimationProps<DividerProps>, props: FadeInAndOutAnimationProps<DividerProps>) =>
		typeof props.isSuccess === 'boolean' && prevProps.isSuccess !== props.isSuccess;

export default withFadeInAndOutAnimation<DividerProps>(Divider, shouldStartAnimation);