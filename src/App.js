import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './containers/Main/main';

import Login from './components/Login/loginComponent';
import RecoveryPassword from './components/Login/recoveryPasswordComponent';
import RegisterUser from './components/Register/registerUserComponent';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faKey, faAt, faHome, faUser, faEye, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faKey, faAt, faHome, faUser, faEye, faUsers, faUserPlus);

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/recoverypassword" component={RecoveryPassword}/>
          <Route path="/registeruser" component={RegisterUser}/>
          <Route path="/" component={Main} />
        </Switch>
      </div>
    );
  }
}
export default App;