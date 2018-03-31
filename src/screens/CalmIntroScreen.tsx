import React from 'react';
import AppIntroSlider, {Slide} from 'react-native-app-intro-slider';
import {NavigationScreenProps} from 'react-navigation';

const slides: Slide[] = [
	{
		key: 'somethun',
		title: 'Title 1',
		text: 'Description.\nSay something cool',
		backgroundColor: '#59b2ab'
	},
	{
		key: 'somethun-dos',
		title: 'Title 2',
		text: 'Other cool stuff',
		backgroundColor: '#febe29'
	},
];

export default class CalmIntroScreen extends React.Component<NavigationScreenProps, {}> {
	public render() {
		const {navigate} = this.props.navigation;
		return (
			<AppIntroSlider
			slides={slides}
			onDone={() => navigate('CalmGame')}
			/>
		);
	}
}
