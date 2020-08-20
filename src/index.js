import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Position from './Position';
import Ballot from './Ballot';
import './Ballot.css';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

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


ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
