import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme(
    {
        palette: {
            primary: {//amber,
                main: '#302c58',
            }
        },
        typography: {
            fontFamily: [
              '"Segoe UI"',
            ].join(','),
        },
    }
);

ReactDOM.render(<MuiThemeProvider theme = {theme}><App /></MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
