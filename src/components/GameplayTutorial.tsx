import React from 'react';
import {Modal, Text, View} from 'react-native';

import {brightBlue} from '../styles/colors';

export interface GameplayState {
	isVisible: boolean;
}

export class GameplayTutorial extends React.Component<{}, GameplayState> {
	constructor(props: {}) {
		super(props);

		this.state = {
			isVisible: false
		};
	}

	public componentWillMount() {
		this.start();
	}

	public render() {
		return (
			<Modal
				animationType={'fade'}
				transparent={true}
				visible={this.state.isVisible}
			>
				<View style={{backgroundColor: brightBlue, flex: 1, opacity: 0.5}}>
					<View>
						<Text style={{color: 'black', fontSize: 32, opacity: 1}}>
							Welcome!
						</Text>
					</View>
				</View>
			</Modal>
		);
	}

	private start() {
		this.setState({isVisible: true});
	}
}
