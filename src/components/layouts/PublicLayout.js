import React from 'react';
import { Route } from 'react-router-dom';

const PublicLayout = props => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      component={({ history, location, match }) => (
        <div>
          <Component {...{ history, location, match }} />
        </div>
      )}
    />
  )
}

export default PublicLayout;