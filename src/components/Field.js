import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class Field extends Component {
	static contextType = LanguageContext;
	render() {
		const text = this.context === "english" ? "Name" : "Naam";
		return (
			<div className="ui field">
				<label>{text}</label>
				<input />
			</div>
		)
	}
}

/**
 *  USING CONTEXTTYPE
 *  Here we set contexttype to our LanguageContext
 *  We then access the value via this.context
 */

