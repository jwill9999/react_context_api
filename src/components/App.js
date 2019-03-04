import React, { Component } from 'react'
import UserCreate from './UserCreate';

// root component imports contexts below
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


export default class App extends Component {

	state = {
		language: 'english'
	};

	onLanguageChange = (language) => {
		this.setState({ language });
	}

	render() {
		return (
			<div className="ui container">
				<div>
					Select Language:
					<i
						className="flag us"
						onClick={() => this.onLanguageChange('english')}
					/>
					<i
						className="flag nl"
						onClick={() => this.onLanguageChange('dutch')}
					/>
				</div>
				<ColorContext.Provider value="yellow">
					<LanguageContext.Provider value={this.state.language}>
						<UserCreate />
					</LanguageContext.Provider>
				</ColorContext.Provider>
			</div>
		)
	}
}

/**
 *  Here we are wrapping our component with a context provider
 * 	We also pass a value as a prop. Context can be updated dynamically from
 *  local state such as `this.state.language` or as a fixed value.
 *
 *  Multiple context can be used as above.
 */
