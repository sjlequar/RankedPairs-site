import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import { Paper } from '@material-ui/core';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } 
	from '@material-ui/core/styles';

import Home from './features/content/Home';
import ExampleBallot from './features/content/ExampleBallot';
import Ballot from './features/ballot/Ballot';
import Theme from './formatting/Theme.js';

const APIURL = "https://py9e27de59.execute-api.us-west-1.amazonaws.com/test/request"

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
	

function App() {
	return (
		<div className="App">
	    <ThemeProvider theme={Theme}>
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
				<h1> This is a test. </h1>
		</Paper>
				</Route>
			</Switch>
		</ThemeProvider>
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
