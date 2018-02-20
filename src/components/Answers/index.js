import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import './Answers.css';

class Answers extends Component {
	render() {
		return (
			<Grid container className="answers" justify="center">
				{
					Object.keys(this.props.options).map(item =>
						<Grid key={item.text} item>
							<Button variant="raised" color="default" size="large" className="answer-btn" onClick={this.props.onClick}>
								{ item.text }
							</Button>
						</Grid>
					)
				}
			</Grid>
		);
	}
}

export default Answers;