import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export default class Button extends Component {
	ButtonStyle = (color) => {
		return `ui button ${color}`;
	}

	render() {
		return (
			<ColorContext.Consumer>
				{color => {
					return <button className={this.ButtonStyle(color)}>
						<LanguageContext.Consumer>
							{value => {
								return value === "english" ? "submit" : "Voorloggen";
							}}
						</LanguageContext.Consumer>
					</button>;
				}
				}
			</ColorContext.Consumer >
		)
	}
}

/**
 *  USING CONSUMERS
 *  Here we are wrapping our component with a context consumer
 * 	We also pass a function to extract the value from its context .
 *
 *  Multiple context can be used as above.
 */

