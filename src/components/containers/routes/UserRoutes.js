import React from "react";
import NavBar from '../../ui/NavBar.js';
import ListUserRoutes from '../../ui/ListUserRoutes';

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