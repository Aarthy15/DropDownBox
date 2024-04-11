/* eslint-disable no-inline-comments */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-lines-per-function */
/* eslint-disable object-shorthand */
/* eslint-disable max-len */
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

const DropDown = () => {
	const [color, setColor] = useState('pink');
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
						<option value="">color</option>
						<option value="#87CEEB"> Blue</option>
						<option value="green"> Green</option>
						<option value="yellow"> Yellow</option>
					</select>
					<select value={ shape } onChange={ changeShape }>
						<option value="square"> Shape</option>
						<option value="square"> square</option>
						<option value="rectangle"> rectangle</option>
						<option value="circle">circle </option>
					</select>
					<select value={ size } onChange={ changeSize }>
						<option value="large">size</option>
						<option value="small">Small</option>
						<option value="medium">Medium</option>
						<option value="large">Large</option>
					</select>
				</div>
			</center>
		</div>
	);
};

export default DropDown;
