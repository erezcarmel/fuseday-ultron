import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import './End.css';

class End extends Component {
	render() {
		return (
			<Grid item xs={6}>
				<Paper elevation={4} className="end">
					Thank you for your answers :)
				</Paper>
			</Grid>
		);
	}
}

export default End;