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
		const { isAuthenticated } = this.props.auth;
    console.log(isAuthenticated())
    if (!isAuthenticated()) return <div>Please login</div>
		return (
			<div>
				<History/>
				<Welcome/>
			</div>
		);
	}
}