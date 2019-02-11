import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import AppsPage from './containers/AppsPage';
import SettingsPage from './containers/SettingsPage';
import LoginScreen from './containers/LoginScreen';

export default () => (
  <App>
    <Switch>
      <Route exact path={routes.LOGINSCREEN} component={LoginScreen} />
      <Route exact path={routes.DASHBOARD} component={Dashboard} />
      <Route path={routes.APPS} component={AppsPage} />
      <Route path={routes.SETTINGS} component={SettingsPage} />
    </Switch>
  </App>
);
