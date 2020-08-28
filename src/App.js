import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";

import Home from './features/content/Home';
import Ballot from './features/ballot/Ballot';

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
				<Route path="/ballots/:ballot_id">
					<MakeBallot />
				</Route>
				<Route path="/test">
					<h1> testing 1 2 </h1>
				</Route>
			</Switch>
		</div>
	);
}


function MakeBallot() {
	let { ballot_id } = useParams();
	return (<Ballot ballot_id={ballot_id}/>);
}
export default App;
