import React  from 'react'
import Question from '../components/Question';
import Answers from '../components/Answers';
import End from '../components/End';
import Grid from 'material-ui/Grid';
import { submitAnswer, getNextQuestion } from '../services/api';

export default class Landing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0,
			question: {},
			isDone: false
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

		getNextQuestion(localStorage.getItem('quiz_id'))
			.then(response => {
				if (response.status === 'finished') {
					this.setState({
						isDown: true
					})
				} else {
					this.setState({
						question: response.question
					})
				}
			});
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
				{ this.state.isDone && <End /> }

				{ !this.state.isDone && <div>
						<Grid container justify="center">
							Seconds: {this.state.seconds}
						</Grid>

						<Question text={this.state.question.question} />

						<Answers
							options={this.state.question.options}
							onClick={this.clickHandler}
						/>
				</div>}
			</Grid>
		);
	}
}