import React  from 'react'
import Question from '../components/Question';
import Answers from '../components/Answers';
import Grid from 'material-ui/Grid';

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

	clickHandler(e) {
		console.log(e.target.textContent);
	}

	render() {
		return (
			<Grid container className="quiz" justify="center">
				<Grid container justify="center">
					Seconds: {this.state.seconds}
				</Grid>

				<Question text="Hello World" />

				<Answers
					options={[
						{text: 'A'},
						{text: 'B'},
						{text: 'C'},
						{text: 'D'}
					]}
					onClick={this.clickHandler}
				/>
			</Grid>
		);
	}
}