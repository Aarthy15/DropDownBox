/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';

const squareStyle = {
	height: '500px',
	width: '500px',
};

const rectangleStyle = {
	width: '600px',
	height: '200px',
};

const circleStyle = {
	width: '400px',
	height: '400px',
	borderRadius: '50%',
};

const displayColor = ['green', 'blue', 'pink'];
const displayShapes = ['square', 'rectangle', 'circle'];
const displaySize = ['small', 'medium', 'large'];

const OptionMapping = () => {
	const [color, setColor] = useState('green');
	const [shape, setShape] = useState('square');
	const [size, setSize] = useState('large');

	const changeColor = (event) => {
		setColor(event.target.value);
	};

	const changeShape = (event) => {
		setShape(event.target.value);
	};

	const shapeStyle = {
		square: squareStyle,
		rectangle: rectangleStyle,
		circle: circleStyle,
	};

	const changeSize = (event) => {
		setSize(event.target.value);
	};

	const sizeStyle = {
		small: 'scale(0.5)',
		medium: 'scale(0.7)',
		large: 'scale(1)',
	};

	return (
		<div>
			<center>
				<div style={ { ...shapeStyle[shape], transform: sizeStyle[size], backgroundColor: color } }/>
				<div>
					<select value={ color } onChange={ changeColor }>
						{ displayColor.map((newColor, index) =>
							<option key={ index }>{ newColor }</option>) }
					</select>
					<select value={ shape } onChange={ changeShape }>
						{ displayShapes.map((newShape, index) =>
							<option key={ index }>{ newShape }</option>) }
					</select>
					<select value={ size } onChange={ changeSize }>
						{ displaySize.map((newSize, index) =>
							<option key={ index }>{ newSize }</option>) }
					</select>
				</div>
			</center>
		</div>
	);
};

export default OptionMapping;
