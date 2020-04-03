import React from 'react';
import Routes from './components/containers/Routes.js';
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
      <Routes />
    </div>
  );
}

export default App;
