import React from 'react';
import { Slider, Typography } from '@material-ui/core';


// props contains candidate and handler
function Candidate(props) {
	const [pref, setPref] = React.useState(0);
	const [color, setColor] = React.useState("secondary");
	const handleSliding = (event, newPref) => {
		setPref(newPref);
		setColor(newPref === 0 ? "secondary" : "primary"); //diff color when 0
    };
	const handlePrefChange = (event, newPref) => {
		props.handler(newPref, props.candidate);
	};	

	return (
		<div className="Candidate">
			<Typography variant='h5' gutterBottom>
			{props.candidate}
			</Typography>
			<Slider className="Candidate-slider"
				value={pref}
				min={0}
				step={1}
				max={10}
				marks={true}
				color={color}
				onChange={handleSliding}
				onChangeCommitted={handlePrefChange}
			/>
		</div>
	);				
}

// props contain position, list of candidates, and handler
export default function Position(props) {
	const candidateToListElement = (candidate) => (
		<Candidate
			candidate={candidate}
			// makes a handler to elevate state to ballot
			handler={(pref, candidate) => {
				props.handler({
					"pref": pref, 
					"candidate": candidate, 
					"position": props.position,
					});
					
			}}
		/>
	);
	
	return (
		<div className="Position">
			<Typography variant='h4' gutterBottom>
			{props.position}
			</Typography>
			<div class="Candidate-list">
				{props.candidates.map(candidateToListElement)}  
			</div>		
		</div>
	);
}
	




