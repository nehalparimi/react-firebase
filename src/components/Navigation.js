import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut'
import * as routes from '../constants/routes';

// Implementing conditional rendering for the navigation component


const Navigation = ({ authUser }) =>
  <div>
    { authUser ?
      <NavigationAuth /> :
      <NavigationNonAuth /> }
  </div>
const NavigationAuth = () =>
  <div>
    <ul>
      <li><Link to={routes.LANDING}>Landing</Link></li>
      <li><Link to={routes.HOME}>Home</Link></li>
      <li><Link to={routes.ACCOUNT}>Account</Link></li>
      <li><SignOutButton /></li>
    </ul>
  </div>

const NavigationNonAuth = () =>
  <div>
    <ul>
      <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
      <li><Link to={routes.LANDING}>Landing</Link></li>
    </ul>
  </div>

export default Navigation;
