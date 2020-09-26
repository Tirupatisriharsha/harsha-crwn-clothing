import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// import HomePage from './pages/homepage/homepage.component';
import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from '../src/pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from '../src/components/header/header.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {

  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log('user: ', user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
  }


export default App;
