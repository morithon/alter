const MINIUM_REACTION_TIME_SECONDS = 0.2;
const RESULTS_DISTRIBUTION = 0.4;
export default (isSuccess: boolean, startTime: number | null, userPressTime: number) => {
	if (!isSuccess || !startTime) { // Sanity check, start time should always be defined at this stage
		return 0;
	}

	const secondsElapsed = (userPressTime - startTime) / 1000;
	const boundSecondsElapsed = Math.max(MINIUM_REACTION_TIME_SECONDS, secondsElapsed);

	const numerator = -1 * Math.pow(boundSecondsElapsed - MINIUM_REACTION_TIME_SECONDS, 2);
	const timeDistribution = Math.exp(numerator / RESULTS_DISTRIBUTION);
	return Math.floor(timeDistribution * 100);
};
