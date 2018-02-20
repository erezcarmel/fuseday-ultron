import React  from 'react'
import Grid from 'material-ui/Grid';

import History from '../components/History'
import Welcome from '../components/Welcome'

import { createGame, getHistory } from '../services/api';

export default class Landing extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			history: []
		};

		this.start.bind(this);
	}

	componentDidMount() {
		getHistory()
			.then(response => {
				this.setState({
					history: response.history
				})
			});
	}

	start() {
		// start game
		createGame()
			.then(id => {
				localStorage.setItem('quiz_id', id);
			});
	}

	render() {
		const { isAuthenticated } = this.props.auth;
    if (!isAuthenticated()) return <div>Please login</div>

		return (
			<Grid container className="landing">
				<Grid item xs={2} className="history-container">
					<History data={this.state.history}/>
				</Grid>

				<Grid item xs={10} className="welcome-container">
					<Welcome onClick={this.start}/>
				</Grid>
			</Grid>
		);
	}
}