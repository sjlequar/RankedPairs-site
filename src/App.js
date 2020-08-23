import React from 'react';
import logo from './logo.svg';
import Position from './Position';
import Ballot from './Ballot';
import { Helmet } from 'react-helmet';
import {Switch, Route, useParams} from "react-router-dom";

const APIURL = "https://py9e27de59.execute-api.us-west-1.amazonaws.com/test/request"


const testBallotRep = {
    "name" : "test ballot name",
    "positionReps": [
        {
            "name" : "position 1 name",
            "candidates": ["test candidate 1", "candidate 2"]
        },
    ],
};

const testPosition =
    <Position
        candidates={["testing 1 2 testing testing",2,3]}
        position='test'
        handler={(a, b, c) => {console.log([a, b, c])}}
        />;

function App() {

	return (
	    <div className="App">
	    	<Helmet>
	            <title>{ "Ranked Pairs" } </title>
	        </Helmet>
			<Switch>
				<Route exact path ="/">
					<Ballot ballotRep={testBallotRep} />
				</Route>
				<Route path="/ballots/:ballot_id">
					{Test()}
				</Route>
				<Route path="/test">
					<h1> testing 1 2 </h1>
				</Route>
			</Switch>
		</div>
	);
}

function Test() {
	return MakeBallot();
}

function MakeBallot() {
	let { ballot_id } = useParams();
	console.log("making Ballot"+ballot_id);
	fetch(APIURL, {
		method: 'POST', 
		body: JSON.stringify({
			"function": "get_ballot",
			"ballot_id": "1", 
		})
	}).then(response => response.text())
	.then(data => {console.log(data); return (<h1> {data} </h1>)});
	return (<h1> did it work </h1>);
}
export default App;
