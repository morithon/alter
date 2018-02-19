import React from 'react';
import {Text, View, Switch} from 'react-native';

const initialSettings = {
	keepScore: true
};

export default class GameScreen extends React.Component {
	constructor() {
		super();

		this.state = {...initialSettings};
	}

	updateConfigValue(value) {
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