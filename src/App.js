import React from 'react';
import logo from './logo.svg';
import Position from './Position';
import Ballot from './Ballot';
import { Helmet } from 'react-helmet';


function App() {
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

	return (
	    <div className="App">
	    	<Helmet>
	            <title>{ "Ranked Pairs" } </title>
	        </Helmet>
	        <Ballot ballotRep={testBallotRep} />
		</div>
	);
}

export default App;
