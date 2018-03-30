
declare module 'react-native-app-intro-slider' {
	import {Component} from "react";

	export interface Slide {
		key: string,
		title: string,
		text: string,
		backgroundColor: string,
	}

	export interface AppIntroSlideProps {
		slides: Slide[];
		onDone: () => void;
	}

	export default class AppIntroSlide extends Component<AppIntroSlideProps, {}> {

	}
}