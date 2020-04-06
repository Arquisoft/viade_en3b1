import React from 'react';
import Router from './components/containers/Router.js';
import "./App.css";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <title>{'Viade'}</title>
      </Helmet>
      <Router />
    </div>
  );
}

export default App;
