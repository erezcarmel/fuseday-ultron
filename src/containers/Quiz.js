import React  from 'react'
import Question from '../components/Question';
import Answers from '../components/Answers';
import Grid from 'material-ui/Grid';
import { submitAnswer } from '../services/api';

export default class Landing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0,
			question: props.question
		};

		this.clickHandler.bind(this);
	}

	tick() {
		this.setState(prevState => ({
			seconds: prevState.seconds + 1
		}));
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	clickHandler(id) {
		submitAnswer(id, { seconds: this.state.seconds })
			.then(response => {
				// next question
			});
	}

	render() {
		return (
			<Grid container className="quiz" justify="center">
				<Grid container justify="center">
					Seconds: {this.state.seconds}
				</Grid>

				<Question text={this.state.question.question} />

				<Answers
					options={this.state.question.options}
					onClick={this.clickHandler}
				/>
			</Grid>
		);
	}
}