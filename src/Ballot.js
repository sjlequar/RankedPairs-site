import React from 'react'; 
import { Typography, Button } from '@material-ui/core';
import Position from './Position.js';

// passed into this is the ballotRep, which stores the list of positions, 
// the list of candidates for each position, and the ballot name. If we want
// to html send the results from this component, we also need the voter ID. 
// We should do that all in one AWS lambda call. 
// 
class Ballot extends React.component {
	constructor(props) {
		super(props);
		this.state = {
			preferences: {}
		};
	}
	// This updates the state with preferences, nothing is submitted until 
	// the submit button is pressed
	handler (pref, candidate, position) {
		console.log([pref, candidate, position, props.ballotRep.name]);
		this.state.preferences[position][candidate] = pref;
	}

	submit (){
		// make an html request to submit
	};

	// position in this case is an object with name and candidates 	
	positionRepToPosition (positionRep) {
		<Position
			position={positionRep.name}
			candidates={positionRep.candidates}
			handler={handler}
		/>
	}

	render() {
		return (
			<div className="Ballot">
				<Typography variant='h1' gutterBottom>
				{this.props.ballot.name}
				</Typography>
				{props.ballotRep.positionReps.map(positionRepToPosition)}
				<Button className="Ballot-submit" />
			</div>

		);
	}
}
