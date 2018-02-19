import React from 'react';
import PropTypes from 'prop-types';
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

const Divider = ({isSuccess}) => {
	const getStyle = (isSuccess) => {
		if (isSuccess === true) {
			return styles.success;
		} else if (isSuccess === false) {
			return styles.failure;
		} else {
			return;
		}
	};

	return (
		<View style={[styles.divider, getStyle(isSuccess)]}>
		</View>
	);
};

Divider.propTypes = {
	isSuccess: PropTypes.bool
};

export default Divider;