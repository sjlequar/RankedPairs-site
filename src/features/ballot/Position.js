import React from 'react';
import { Slider, Typography, Paper } from '@material-ui/core';


// props contains candidate and handler
function Candidate(props) {
	const [pref, setPref] = React.useState(props.pref);
	const [color, setColor] = React.useState(
			(pref === 0 ? "secondary" : "primary")
	);
	const handleSliding = (event, newPref) => {
		setPref(newPref);
		setColor(newPref === 0 ? "secondary" : "primary"); //diff color when 0
    };
	const handlePrefChange = (event, newPref) => {
		props.handler(newPref, props.candidate);
	};

	return (
		<div className="Candidate">
			<Typography variant='h6'> 
			{props.candidate}
			</Typography>
			<Slider className="Candidate-slider"
				value={pref}
				height={4}
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
			key={candidate}
			pref={(props.position in props.oldPrefs && 
				   candidate in props.oldPrefs[props.position]) ? 
				  props.oldPrefs[props.position][candidate] : 0}
			// makes a handler to elevate state to ballot
			handler={((pref, candidate) => {
				props.handler({
					"pref": pref, 
					"candidate": candidate, 
					"position": props.position,
					});
					
			})}
		/>
	);

	return (
		<div className="Position">
			<Typography variant='h4'>
			{props.position}
			</Typography>
			<Typography variant='body1' gutterBottom>
				{("subtitle" in props ? props.subtitle : "")}
			</Typography>
			<div className="Candidate-list">
				{props.candidates.map(candidateToListElement)}  
			</div>		
		</div>
	);
}
	




