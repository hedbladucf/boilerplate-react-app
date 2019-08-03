import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Header from '../components/Header';

/** Destructured props - grabbing isAuthenticated & component (setting 
 *  equal to uppercase Component as needed for rendering).
 *  Then using ...rest operator to spread out the remaining props - 
 *  (all props besides isAuthenticated & component) */
export const PrivateRoute = ({
  isAuthenticated, 
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <div>
        <Header />
        <Component {...props} />
      </div>
    ) : (
      <Redirect to="/" />
    )
  )} />
);

// check if uid exists; convert to boolean
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);