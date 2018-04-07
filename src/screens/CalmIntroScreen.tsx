import React from 'react';
import {AsyncStorage} from 'react-native';
import AppIntroSlider, {Slide} from 'react-native-app-intro-slider';
import {NavigationScreenProps} from 'react-navigation';

const slides: Slide[] = [
	{
		key: 'anxiety',
		title: 'Anxious?',
		text: 'The world is full of bad things and it\'s\n important to be aware of them.\n' +
			'But sometimes we can focus on them\n too much. This game tries to help\n' +
			'with that. Here\'s how it works:',
		backgroundColor: '#169cf9'
	},
	{
		key: 'attention',
		title: 'What do I do?',
		text: 'Two words appear on the screen for a\nsplit second: one negative and\n' +
		'one neutral. When they disappear, you\nwill see a marker where the neutral word\n' +
		'used to be. When you press it,\nnew words will appear.',
		backgroundColor: '#ea7317'
	},
	{
		key: 'why',
		title: 'Ok, but why?',
		text: 'The goal is to train your instinctive\nresponse to focus away from the\nnegative. ' +
		'If you learn how to pay less\nattention to the negative,\nyou might be less anxious.\n\n' +
		'So go ahead, try it:',
		backgroundColor: '#2364aa'
	},
];

export default class CalmIntroScreen extends React.Component<NavigationScreenProps, {}> {
	public render() {
		const {navigate} = this.props.navigation;
		return (
			<AppIntroSlider
			slides={slides}
			onDone={() => {
				navigate('CalmGame');
				AsyncStorage.setItem('@ABM:hasUserSeenCalmIntro', 'true');
			}
			}
			/>
		);
	}
}
