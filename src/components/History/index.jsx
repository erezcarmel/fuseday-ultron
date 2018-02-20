import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Grid from 'material-ui/Grid';

import './History.css';

class History extends Component {
	render() {
		return (
			<Grid container className="history">
				{ this.props.data.length === 0 && 'No history'}
				<List component="nav">
					{this.props.data.map(quiz =>
						<ListItem>
							<ListItemText primary={`${quiz.name} ${quiz.score}`}/>
						</ListItem>
					)}
				</List>
			</Grid>
		);
	}
}

export default History;