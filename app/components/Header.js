import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

const HeaderPage = () => (
  <div>
    <ul>
      <li>
        <Link to={routes.DASHBOARD}>Dashboard</Link>
      </li>
      <li>
        <Link to={routes.APPS}>Apps</Link>
      </li>
      <li>
        <Link to={routes.SETTINGS}>Settings</Link>
      </li>
    </ul>
  </div>
);

export default HeaderPage;
