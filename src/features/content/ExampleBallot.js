import React from 'react';
import { Paper } from '@material-ui/core';
import Ballot from '../ballot/Ballot';


const testBallotRep = {
    "name" : "How This Works",
	"subtitle" : "This is what the Ballot looks like. You express " + 
				 "your preference with the sliders under each Candidate.", 
    "positionReps": [
        {
            "name" : "This is the name of a Position",
            "candidates": [
							"and these are the names of the Candidates", 
							"that you can rank in your vote", 
							"(by using the sliders underneath each one)",
						  ]
        },
		{
			"name": "An Example:", 
			"subtitle": "Suppose you had the following position on your \
						 ballot. You could vote (rank the candidates) like \
						 this:"
		},
        {
            "name" : "An Important Position",
            "candidates": [
							"Your Favorite Candidate", 
							"An Okay Candidate", 
							"An Equally Okay Candidate",
							"A Bad Candidate",
						  ]
        },
		{
			"name": "", 
			"subtitle": "This ranking is the same as the following ranking:"
		},

		{ 
			"name" : "The Same Important Position",
            "candidates": [
							"Your Favorite Candidate", 
							"An Okay Candidate", 
							"An Equally Okay Candidate",
							"A Bad Candidate",
						  ]
		},
		{
			"name" : "Only the relative preference matters",
			"subtitle" :
			"In both votes, Favorite is ranked higher than the Okays, which \
			are tied, which are both ranked higher than Bad.",
			"candidates" : [
							"Rank Your Understanding", 
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
		"Your Favorite Candidate" : 3, 
		"An Okay Candidate" : 1, 
		"An Equally Okay Candidate" : 1, 
		"A Bad Candidate" : 0, 
	}
};

function ExampleBallot() {
	return (
		<Paper elevation='5' className="BallotWrapper">
                    <Ballot ballotRep={testBallotRep} oldPrefs={oldPrefs} />
        </Paper>
	);
}




export default ExampleBallot;
