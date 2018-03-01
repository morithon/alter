import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	divider: {
		flex: 1,
		backgroundColor: 'white'
	},
	success: {
		backgroundColor: 'green'
	},
	failure: {
		backgroundColor: 'red'
	}
});

type DividerProps = {
	isSuccess: boolean;
};

const getStyle = isSuccess => isSuccess ? styles.success : styles.failure;

const Divider = ({isSuccess}: DividerProps) => <View style={[styles.divider, getStyle(isSuccess)]}/>;

export default Divider;