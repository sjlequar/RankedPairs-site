import React from 'react';
import { Paper } from '@material-ui/core';
import Ballot from '../ballot/Ballot';


const exampleBallotRep = {
    "name" : "How This Works",
	"subtitle" : "This Ballot will walk you through voting using "+
				 "VoteRankedPairs.", 
    "positionReps": [
        {
            "name" : "This is the name of a Position",
            "candidates": [
							"and these are the names of the Candidates...", 
							"...that you can rank in your vote", 
							"(using the sliders underneath each one, "+
							"try it out here)",
						  ]
        },
		{
			"name": "How Ranked Pairs Voting Works:", 
			"subtitle": "Suppose you had the following position on your " + 
						 "ballot. You could cast a vote (by ranking the " +
						 "candidates) "+
						 "like this:"
		},
        {
            "name" : "An Important Position",
			"disabled" : true, 
            "candidates": [
							"Your Favorite Candidate", 
							"An Okay Candidate", 
							"An Equally Okay Candidate",
							"A Bad Candidate",
						  ]
        },
		{
			"name": "", 
			"subtitle": "This ranking is equivalent to the following ranking:"
		},

		{ 
			"name" : "The Same Important Position",
			"disabled" : true,
            "candidates": [
							"Your Favorite Candidate", 
							"An Okay Candidate", 
							"An Equally Okay Candidate",
							"A Bad Candidate",
						  ]
		},
		{
			"name" : "Only the Relative Preference Matters in Ranked Pairs",
			"subtitle" :
			"In both votes, Favorite is ranked higher than the Okays, which " +
			"are tied, which are both ranked higher than Bad. The exact value "+
			"does not matter for this election method. "+
			"If you do not " +
			"express a preference for a candidate (leaving the slider at zero "+
			"or in the red part), this means you prefer that candidate or "+
			"candidates less than any other candidate you ranked (gave a non-"+
			"zero preference for).",
			"candidates" : [
							"Rate Your Understanding", 
						   ]
		},
    ],
};

const oldPrefs = {
	"An Important Position" : {
		"Your Favorite Candidate" : 10, 
		"An Okay Candidate" : 5, 
		"An Equally Okay Candidate" : 5, 
		"A Bad Candidate" : 2, 
	},
	"The Same Important Position" : {
		"Your Favorite Candidate" : 2, 
		"An Okay Candidate" : 1, 
		"An Equally Okay Candidate" : 1, 
		"A Bad Candidate" : 0, 
	}
};

function ExampleBallot() {
	return (
		<Paper elevation={5} className="BallotWrapper">
                    <Ballot ballotRep={exampleBallotRep} oldPrefs={oldPrefs} />
        </Paper>
	);
}




export default ExampleBallot;
