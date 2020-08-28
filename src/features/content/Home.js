import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

function Home({type}) {
	
	switch (type) {
		
	case "index":
		return (
		<div>
		<Typography variant='h2' gutterBottom align='center'>
			Vote Ranked Pairs
		</Typography>
		<Typography>
		<p>
		Welcome to VoteRankedPairs, the premier online voting service for 
		ranked choice voting. This voting platform implements the Ranked 
		Pairs method for determining the winner in a ranked choice election. 
		You can read about it on Wikipedia <a 
			href="https://en.wikipedia.org/wiki/Ranked_pairs"
			rel="noopener noreferrer"
			target="_blank">here</a>.
		</p>
		<p>
		If you're new here, check out 
		the <Link to="/ballots/">Ballots</Link> page.
		Alternatively, <Link to="/login/">log in</Link>.
		</p>
		<p>
		This was created by Simon Lequar for use in Dabney Hovse's elections 
		during the summer of 2020. 
		</p>
		</Typography>
		</div>
		);
		break;
	
	case "ballots":
		return (
		<div>
		<Typography variant='h2' gutterBottom align='center'>
			Ballots
		</Typography>
		</div>


		);
		break;


	};

	return (<body> Page not found </body>);
}


export default Home;
