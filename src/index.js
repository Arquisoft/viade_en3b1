import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme(
    {
        palette: {
            primary: {
                main: '#302c58',
                light: '#5c5585',
                dark: '#09012f'
            },
            secondary: {
                main: '#f7f6fb',
                light: '#ffffff',
                dark: '#c4c33c8'
            }
        },
        typography: {
            fontFamily: 'Nova'
        }
    }
);

ReactDOM.render(<MuiThemeProvider theme = {theme}><App /></MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
