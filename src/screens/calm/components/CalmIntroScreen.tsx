import React from 'react';
import {AsyncStorage, Text, View} from 'react-native';
import AppIntroSlider, {Slide, SlideProps} from 'react-native-app-intro-slider';
import {NavigationScreenProps} from 'react-navigation';

import I18n from '../../../i18n/i18n';
import {utils} from '../../../styles/utils';
import {calmIntroScreen as styles} from '../styles/calmIntroScreen';

const slides: Slide[] = [
	{
		key: 'anxiety',
		title: I18n.t('anxietySlideTitle'),
		text: I18n.t('anxietySlideText'),
		backgroundColor: '#169cf9'
	},
	{
		key: 'attention',
		title: I18n.t('attentionSlideTitle'),
		text: I18n.t('attentionSlideText'),
		backgroundColor: '#ea7317'
	},
	{
		key: 'why',
		title: I18n.t('whySlideTitle'),
		text: I18n.t('whySlideText'),
		backgroundColor: '#2364aa'
	},
];

export default class CalmIntroScreen extends React.Component<NavigationScreenProps, {}> {
	constructor(props: NavigationScreenProps) {
		super(props);

		this.close = this.close.bind(this);
	}

	public render() {
		return (
			<AppIntroSlider
				doneLabel={I18n.t('doneButtonLabel')}
				skipLabel={I18n.t('skipButtonLabel')}
				nextLabel={I18n.t('nextButtonLabel')}
				slides={slides}
				showSkipButton={true}
				renderItem={this.renderItem}
				onDone={this.close}
				onSkip={this.close}
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
			<View style={[utils.centered, style]}>
				<Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
				<Text style={[styles.text, props.textStyle]}>{props.text}</Text>
			</View>
		);
	}

	private close() {
		const {navigate} = this.props.navigation;

		navigate('CalmGame');
		AsyncStorage.setItem('@ABM:hasUserSeenCalmIntro', 'true');
	}
}
