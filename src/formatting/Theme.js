import React from 'react';
import { createMuiTheme, ThemeProvider, responsiveFontSizes }
    from '@material-ui/core/styles';

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
	},
);






const Theme = theme;
export default Theme;
