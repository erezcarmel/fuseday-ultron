import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import './Question.css';

class Question extends Component {
	render() {
		return (
			<Grid item xs={6}>
				<Paper elevation={4} className="question">
					{ this.props.text || 'Question' }
				</Paper>
			</Grid>
		);
	}
}

export default Question;