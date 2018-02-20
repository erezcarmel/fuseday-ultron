import React  from 'react'
import Grid from 'material-ui/Grid';

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
			<Grid container className="landing">
				<Grid item xs={2}>
					<History/>
				</Grid>
				<Grid item xs={10}>
					<Welcome/>
				</Grid>
			</Grid>
		);
	}
}