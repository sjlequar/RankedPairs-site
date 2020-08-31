import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import { Paper } from '@material-ui/core';

import Home from './features/content/Home';
import ExampleBallot from './features/content/ExampleBallot';
import Ballot from './features/ballot/Ballot';

const APIURL = "https://py9e27de59.execute-api.us-west-1.amazonaws.com/test/request"


const testBallotRep = {
    "name" : "test ballot name",
    "positionReps": [
        {
            "name" : "position 1 name",
            "candidates": ["test candidate 1", "candidate 2"]
        },
		{ 
			"name" : "second position name", 
			"candidates": ["test 1", "test2", "third", "no"]
		},
    ],
};


function App() {
	return (
	    <div className="App">
	    	<Helmet>
	            <title>{ "Ranked Pairs" } </title>
	        </Helmet>
			<Switch>
				<Route exact path ="/">
					<Home type="index"/>
				</Route>
				<Route exact path="/ballots/">
					<Home type="ballots"/>
				</Route>
				<Route exact path="/ballots/example_ballot">
					<ExampleBallot />
				</Route>
				<Route path="/ballots/:ballot_id">
					<MakeBallot />
				</Route>
				<Route path="/test">
		<Paper variant='elevation' elevation='4' className="BallotWrapper">
					<Ballot ballotRep={testBallotRep} />
		</Paper>
				</Route>
			</Switch>
		</div>
	);
}


function MakeBallot() {
	let { ballot_id } = useParams();
	return (
		<Paper variant='elevation' elevation='4' className="BallotWrapper">
			<Ballot ballot_id={ballot_id}/>
		</Paper>
	);
}
export default App;
