import React from 'react';
import Router from './components/containers/Router.js';
import "./App.css";
import { Helmet } from 'react-helmet';
import cache from './cache/RoutesChache';

async function getRoutes(){
  return await cache.getRoutesFromPod();
}

function App() {
  getRoutes();
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
