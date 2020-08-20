import React from 'react'; 
import { Typography, Button } from '@material-ui/core';
import Position from './Position.js';
import { useParams } from 'react-router-dom';

// passed into this is the ballotRep, which stores the list of positions, 
// the list of candidates for each position, and the ballot name. If we want
// to html send the results from this component, we also need the voter ID. 
// We should do that all in one AWS lambda call. 
// 
export default class Ballot extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			preferences: {}
		};
		this.boundHandler = this.handler.bind(this);
	}
	// This updates the state with preferences, nothing is submitted until 
	// the submit button is pressed
	handler (e) {
		const pref = e.pref;
		const candidate = e.candidate;
		const position = e.position;
		console.log([pref, candidate, position, this.props.ballotRep.name]);
		this.setState({preferences: {...this.state.preferences, 
									 [position] : {
										...this.state.preferences[position], 
										[candidate] : pref}}});
		console.log(this.state);
	}

	submit (){
		// make an html request to submit
	};

	// position in this case is an object with name and candidates 	
	positionRepToPosition (positionRep) {
		return (
			<Position
				position={positionRep.name}
				candidates={positionRep.candidates}
				handler={(e) => this.boundHandler(e)}
				//handler={(pr, c, po) => this.handler(pr, c, po)}
			/>
		);
	}

	render() {
		return (
			<div className="Ballot">
				<Typography variant='h1' gutterBottom>
				{this.props.ballotRep.name}
				</Typography>
				{this.props.ballotRep.positionReps.map(this.positionRepToPosition.bind(this))}
				<Button className="Ballot-submit" />
			</div>

		);
	}
}
