import React from 'react'; 
import { Typography, Button } from '@material-ui/core';
import Position from './Position.js';

// passed into this is the ballotRep, which stores the list of positions, 
// the list of candidates for each position, and the ballot name. If we want
// to html send the results from this component, we also need the voter ID. 
// We should do that all in one AWS lambda call. 
//
const APIURL = "https://py9e27de59.execute-api.us-west-1.amazonaws.com/test/request"

export default class Ballot extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			valid: false,
			requireLogin: false,
			ballotRep: this.props.ballotRep,
			preferences: {}
		};
		console.log(this.state);
		this.boundHandler = this.handler.bind(this);
	}
	
	componentDidMount() {
		this.getBallotByID(this.props.ballot_id);
	}

	// This updates the state with preferences, nothing is submitted until 
	// the submit button is pressed
	handler (e) {
		const pref = e.pref;
		const candidate = e.candidate;
		const position = e.position;
		console.log([pref, candidate, position, this.state.ballotRep.name]);
		this.setState({preferences: {...this.state.preferences, 
									 [position] : {
										...this.state.preferences[position], 
										[candidate] : pref}}});
		console.log(this.state);
	}

	submit (){
		// make an html request to submit
	};

	getBallotByID(ballot_id) {
		if (this.props.ballotRep){
			this.setState({loading: false});
			return;
		}
		if (! this.state.ballotRep){
			console.log(ballot_id);
			fetch(APIURL, {
				method: 'POST', 
		       	body: JSON.stringify({
		       	    "function": "get_ballot",
		       	    "ballot_id": ballot_id,
				})
			})
			.then(response => response.json(), error => 
				{this.setState({loading: false})})
			.then(data => {
				if (!this.state.loading || 
					data.message === "Internal server error") {
					this.setState({loading: false});
				} else {
					this.setState({ballotRep: data});
					this.setState({valid: true});
					this.setState({loading: false});
				};
			});
		}
	}

	// position in this case is an object with name and candidates 	
	positionRepToPosition (positionRep) {
		return (
			<Position
				position={positionRep.name}
				key={positionRep.name}
				candidates={positionRep.candidates}
				handler={(e) => this.boundHandler(e)}
				//handler={(pr, c, po) => this.handler(pr, c, po)}
			/>
		);
	}

	render() {
		if (this.state.loading) {
			return (
				<div className="Ballot">
			<Typography variant='h4'> loading... </Typography>
				</div>
			);
		};
		if (!this.state.valid){
			return (
				<div className="Ballot">
			<Typography variant='h4'> Invalid Ballot URL </Typography>
				</div>
			);
		};

		if (this.state.requireLogin){
			return (
				<div className="Ballot">
				<Typography variant='h4'> 
				You must be logged in to access this ballot. 
				</Typography>
				</div>
			);
		};
		return (
			<div className="Ballot">
				<Typography variant='h2' gutterBottom>
				{this.state.ballotRep.name}
				</Typography>
				{this.state.ballotRep.positionReps.map(this.positionRepToPosition.bind(this))}
				<Button className="Ballot-submit" /> 
			</div>

		);
	}
}
