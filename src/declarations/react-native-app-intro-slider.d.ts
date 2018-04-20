declare module 'react-native-app-intro-slider' {
	import {StyleProp, TextStyle, ImageStyle, ImageURISource, ImageRequireSource} from "react-native";
	import {Component} from "react";

	export default class AppIntroSlide extends Component<AppIntroSlideProps, {}> {

	}

	export interface AppIntroSlideProps {
		skipLabel?: string;
		doneLabel?: string;
		nextLabel?: string;
		prevLabel?: string;
		bottomButton?: boolean;
		dotColor?: string;
		activeDotColor?: string;
		renderItem?: (props: SlideProps) => JSX.Element;
		slides: Slide[];
		showSkipButton?: boolean;
		showPrevButton?: boolean;
		hideNextButton?: boolean;
		hideDoneButton?: boolean;
		onSlideChange?: (index: number, lastIndex: number) => void;
		onDone?: () => void;
		onSkip?: () => void;
	}

	export interface SlideProps extends SlideData {
		bottomSpacer: number;
		topSpacer: number;
		width: number;
		height: number;
	}

	export interface Slide extends SlideData {
		key: string,
	}

	export interface SlideData {
		title?: string,
		titleStyle?: StyleProp<TextStyle>;
		text?: string,
		textStyle?: StyleProp<TextStyle>;
		image?: ImageURISource | ImageURISource[] | ImageRequireSource;
		imageStyle?: StyleProp<ImageStyle>;
		backgroundColor?: string,
	}
}