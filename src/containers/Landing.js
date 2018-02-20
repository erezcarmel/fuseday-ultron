import React, { Component } from 'react'
import History from '../components/History'
import Welcome from '../components/Welcome'

export default class Landing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0
		};
	}

	render() {
		return (
			<div>
				<History/>
				<Welcome/>
			</div>
		);
	}
}