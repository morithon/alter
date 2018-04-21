import React from 'react';
import {AsyncStorage, StyleSheet, Text, View} from 'react-native';
import AppIntroSlider, {Slide, SlideProps} from 'react-native-app-intro-slider';
import {NavigationScreenProps} from 'react-navigation';

const slides: Slide[] = [
	{
		key: 'anxiety',
		title: 'Anxious?',
		text: 'The world is full of bad things and it\'s important to be aware of them. ' +
			'But sometimes we can focus on them too much. This game tries to help ' +
			'with that.\n\nHere\'s how it works:',
		backgroundColor: '#169cf9'
	},
	{
		key: 'attention',
		title: 'What do I do?',
		text: 'Two words appear on the screen for a split second: one negative and ' +
		'one neutral. When they disappear, you will see a marker where the neutral word ' +
		'used to be. When you press it, new words will appear.',
		backgroundColor: '#ea7317'
	},
	{
		key: 'why',
		title: 'Ok, but why?',
		text: 'The goal is to train your instinctive response to focus away from the negative. ' +
		'If you learn how to pay less attention to the negative, you might be less anxious.\n\n' +
		'So go ahead, try it!',
		backgroundColor: '#2364aa'
	},
];

export default class CalmIntroScreen extends React.Component<NavigationScreenProps, {}> {
	public render() {
		const {navigate} = this.props.navigation;
		return (
			<AppIntroSlider
			slides={slides}
			showSkipButton={true}
			renderItem={this.renderItem}
			onDone={() => {
				navigate('CalmGame');
				AsyncStorage.setItem('@ABM:hasUserSeenCalmIntro', 'true');
			}}
			/>
		);
	}

	private renderItem(props: SlideProps) {
		const style = {
			backgroundColor: props.backgroundColor,
			paddingTop: props.topSpacer,
			paddingBottom: props.bottomSpacer,
			width: props.width,
			height: props.height,
		};

		return (
			<View style={[styles.mainContent, style]}>
				<Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
				<Text style={[styles.text, props.textStyle]}>{props.text}</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	mainContent: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: 'rgba(255, 255, 255, .7)',
		fontSize: 22,
		textAlign: 'center',
		fontWeight: '300',
		paddingHorizontal: 16,
		paddingVertical: 32
	},
	title: {
		fontSize: 32,
		color: 'rgba(255, 255, 255, .7)',
		fontWeight: '300',
		paddingHorizontal: 16,
		paddingVertical: 32
	}
});
