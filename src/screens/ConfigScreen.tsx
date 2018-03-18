import React from 'react';
import {Text, View, Switch} from 'react-native';

const initialSettings = {
	keepScore: true
};

export interface ConfigScreenState {
	keepScore: boolean;
}

export default class ConfigScreen extends React.Component<{}, ConfigScreenState> {
	constructor(props: {}) {
		super(props);

		this.state = {...initialSettings};
	}

	updateConfigValue(value: boolean) {
		this.setState({keepScore: value});
	}

	render() {
		return ( 
			<View style={{flex: 1, flexDirection: 'column', alignSelf: 'stretch'}}>
				<View style={{flexDirection: 'row', backgroundColor: 'skyblue'}}>
					<Text style={{flex: 1}}>
						Keep score
					</Text>
					<Switch
						style={{flex: 1}}
						onValueChange={this.updateConfigValue.bind(this)}
						value={this.state.keepScore}
					>
					</Switch>
				</View>
			</View>
		); 
	}
}