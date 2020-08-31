import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
	breakpoints: {
		values: {
			'mobile': 750
		},
	},
});


theme = responsiveFontSizes(theme, 
	{
		breakpoints: ['mobile'],
		variants: ['h3', 'h4', 'h5', 'h6'],
	},
);

theme = responsiveFontSizes(theme, 
	{
		breakpoints: ['mobile'],
		factor: 1.5,
		variants: ['h1', 'h2'],
	},
);




const Theme = theme;
export default Theme;
