import React from 'react';
import {Animated} from 'react-native';

type WithFadeInAndOutAnimationProps = {
	fadeToDuration: number;
	showForDuration: number;
	onFadeOut: Function;
};

export function withFadeInAndOutAnimation(WrappedComponent, shouldStartAnimation) {
	return class WithFadeAnimation extends React.Component<WithFadeInAndOutAnimationProps> {
		static defaultProps = {
			fadeToDuration: 200,
			showForDuration: 100
		}

		constructor(props) {
			super(props);

			this.state = {
				fadeAnim: new Animated.Value(0)
			};
		}

		componentDidUpdate(prevProps) {
			if (shouldStartAnimation(prevProps, this.props)) {
				this.fadeIn();
			}
		}

		fadeIn() {
			this.fadeTo({
				toValue: 1,
				callback: this.fadeOut.bind(this)
			});		
		}

		fadeOut() {
			this.fadeTo({
				toValue: 0,
				delay: this.props.showForDuration,
				callback: this.props.onFadeOut
			});
		}

		fadeTo({toValue, callback, delay = 0}) {
			Animated.timing(this.state.fadeAnim, {toValue, delay, duration: this.props.fadeToDuration}).start(callback);
		}

		render() {
			return (
				<Animated.View style={{flex: 1, opacity: this.state.fadeAnim}}>
					<WrappedComponent {...this.props}/>
				</Animated.View>
			);
		}
	}
}