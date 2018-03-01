import React from 'react';
import Canvas from 'react-native-canvas';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	divider: {
		flex: 10,
		backgroundColor: 'white'
	},
	success: {
		backgroundColor: 'green'
	},
	failure: {
		backgroundColor: 'red'
	}
});

type PentagonDividerProps = {
	isSuccess: boolean;
}

class PentagonDivider extends React.Component<PentagonDividerProps> {
	drawInCanvas(canvas) {
		if (!canvas) {
			return;
		}

		this.ctx = canvas.getContext('2d');
		/*
		this.ctx.fillStyle = 'red';
		this.ctx.fillRect(5, 5, 20, 20);
		*/
		this.ctx.fillStyle = 'blue';
		this.ctx.beginPath();
		this.ctx.moveTo(10, 10);
		this.drawPentagon(10, 30, 20, 0);
		this.ctx.moveTo(50, 10);
		this.drawPentagon(50, 30, 20, Math.PI);
		this.ctx.fill();
		this.ctx.stroke();
	}

	drawPentagon(x, y, radius, rotation) {
		for (let i = 0; i < 5; i++) {
			const angle = i * 2 * Math.PI / 5 - Math.PI / 2 + rotation; 

			this.ctx.lineTo(
				x + radius * Math.cos(angle),
				y + radius * Math.sin(angle)
			);
		}
		this.ctx.closePath();
	}

	drawShape(sides, x, y, radius, rotation) {
		for (let i = 0; i <= 5; i++) {
			const angle = i * 2 * Math.PI / 5 - Math.PI / 2 + rotation; 

			this.ctx.lineTo(
				Math.cos(angle) * radius + x,
				Math.sin(angle) * radius + y
			);
		}
	}

	render() {
		const {isSuccess} = this.props;
		const getStyle = (isSuccess) => {
			if (isSuccess === true) {
				return styles.success;
			} else if (isSuccess === false) {
				return styles.failure;
			} else {
				return;
			}
		};

		return (
			<View style={[styles.divider, getStyle(isSuccess)]}>
				<Canvas ref={this.drawInCanvas.bind(this)}/>
			</View>
		);
	}
}

export default PentagonDivider;