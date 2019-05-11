import React from 'react';
import Header from './Header'
import ContectUs from './callus'
import Dashboard from './dashboard/Dashboard';
import Signin from './sign_form/signin';
import Signup from './sign_form/signup';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home/Home';
class Main extends React.Component {
  render() {
    return (
      <BrowserRouter >
        <ContectUs />
        <Header />
        <Switch>
          <Route path="/home2" component={Dashboard} />
          <Route path="/home2" component={Signin} />
          <Route path="/aboutus" component={Signup} />
          <Route path="/home" component={Home} />
        </Switch>

      </BrowserRouter>
    )
  }
}
export default Main;