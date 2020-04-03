import React from "react";
import NavBar from '../../graphic interface/NavBar.js';
import ListUserRoutes from '../../graphic interface/ListUserRoutes.js';

const UserRoutes = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <ListUserRoutes />
      </div>
    </div>
  );
};

export default UserRoutes;