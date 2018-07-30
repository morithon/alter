import React from 'react';
import {Text} from 'react-native-elements';

import withGamePoints, {GamePointsProps} from './withGamePoints';

const GamePointsCounter = ({gamePoints}: GamePointsProps) => (
	<Text>
		{gamePoints}
	</Text>
);

export default withGamePoints(GamePointsCounter);
