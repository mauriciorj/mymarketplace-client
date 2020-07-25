import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './containers/main/main';
import RegisterUser from './containers/createAccount/createUserAccount';
import RegisterOption from './containers/createAccount/accountOptions';
import AboutUs from './containers/main/aboutUs';
import HelpCenter from './containers/main/helpCenter';
import Pricing from './containers/main/pricing';
import Login from './containers/main/login';
import RecoveryPassword from './containers/main/recoveryPassword';
import AccountCreated from './containers/createAccount/accountCreated';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/registerUser" component={RegisterUser}/>
          <Route path="/registerOptions" component={RegisterOption} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/helpCenter" component={HelpCenter} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/login" component={Login} />
          <Route path="/recoveryPassword" component={RecoveryPassword} />
          <Route path="/accountCreated" component={AccountCreated}/>
          <Route path="/" component={Main} />
        </Switch>
      </div>
    );
  }
}
export default App;