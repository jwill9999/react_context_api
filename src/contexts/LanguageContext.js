import React from 'react';

const context = React.createContext('dutch');

console.log(context);

export default context;

/*
	creates a context with default value.
	Default values can be any value type
	e.g string boolean object.
*/