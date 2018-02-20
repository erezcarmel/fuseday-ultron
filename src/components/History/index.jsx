import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Grid from 'material-ui/Grid';

import './History.css';

class History extends Component {
	render() {
		return (
			<Grid container className="history">
				<List component="nav">
					<ListItem>
						<ListItemText primary="Quiz 1"/>
					</ListItem>
					<ListItem>
						<ListItemText primary="Quiz 2"/>
					</ListItem>
				</List>
			</Grid>
		);
	}
}

export default History;