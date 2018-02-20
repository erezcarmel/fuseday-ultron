import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import './Welcome.css';

class Welcome extends Component {
	render() {
		return (
			<Grid container className="welcome" justify="center">
				<Button
					variant="raised"
					color="secondary"
					size="large"
					href="/quiz"
					className="start-btn"
					onClick={this.props.onClick}
				>
					Start Quiz
				</Button>
			</Grid>
		);
	}
}

export default Welcome;