import React from 'react';
import Router from './components/containers/Router.js';
import "./App.css";
import { Helmet } from 'react-helmet';
import UserCache from './cache/UserCache.js';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  UserCache.loadFriends();

  return (
    <div>
      <Helmet>
        <title>{'ViaDe'}</title>
      </Helmet>
      <ToastContainer
        position={toast.POSITION.TOP_CENTER}
        autoClose={4000}
        transition={Slide}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
      <Router />
    </div>
  );
}

export default App;
