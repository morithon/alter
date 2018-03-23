import React from 'react';
import {Animated} from 'react-native';

interface WithFadeInAndOutAnimationProps {
	fadeToDuration?: number;
	showForDuration?: number;
	onFadeOut?: () => void;
}

interface WithFadeInAndOutAnimationState {
	fadeAnim: Animated.Value;
}

export type FadeInAndOutAnimationProps<T> = T & WithFadeInAndOutAnimationProps;

type shouldStartAnimationFn<T> =
	(prevProps: FadeInAndOutAnimationProps<T>, props: Readonly<FadeInAndOutAnimationProps<T>>) => boolean;

export function withFadeInAndOutAnimation<T>(
	WrappedComponent: React.ComponentType<T>,
	shouldStartAnimation: shouldStartAnimationFn<T>
) {
	return class extends React.Component<FadeInAndOutAnimationProps<T>, WithFadeInAndOutAnimationState> {
		protected static defaultProps = {
			fadeToDuration: 150,
			showForDuration: 250,
			onFadeOut: () => {}
		};

		constructor(props: FadeInAndOutAnimationProps<T>) {
			super(props);

			this.state = {
				fadeAnim: new Animated.Value(0)
			};
		}

		public componentDidMount() {
			if (shouldStartAnimation({} as T, this.props)) {
				this.fadeIn();
			}
		}

		public componentDidUpdate(prevProps: FadeInAndOutAnimationProps<T>) {
			if (shouldStartAnimation(prevProps, this.props)) {
				this.fadeIn();
			}
		}

		public render() {
			return (
				<Animated.View style={{flex: 1, opacity: this.state.fadeAnim}}>
					<WrappedComponent {...this.props}/>
				</Animated.View>
			);
		}

		private fadeIn() {
			this.fadeTo(1, this.fadeOut.bind(this));
		}

		private fadeOut() {
			this.fadeTo(0, this.props.onFadeOut as () => void, this.props.showForDuration as number);
		}

		private fadeTo(toValue: number, callback: () => void, delay: number = 0) {
			const config = {toValue, delay, duration: this.props.fadeToDuration};
			Animated.timing(this.state.fadeAnim, config).start(callback);
		}
	};
}
