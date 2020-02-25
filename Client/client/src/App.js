import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';
import Main from './mainPage/Main';
import LoginPage from './mainPage/LoginPage';
import VerifyAuth from './middleware/VerifyAuth';
import {withCookies} from 'react-cookie';

class App extends Component {
    constructor(props) {
      super (props) ;
      this.state ={
        isLogged : false
      }
    }

    componentDidMount () {
      var {cookies} = this.props ;
      console.log(cookies) ;
      VerifyAuth(cookies).then (res=> {
        if (res.data.type=== "Info")
          this.setState ({
            isLogged: true,
          })
      });
  }

  render () {
    return (
      <div>
        {this.state.isLogged ? 
            <Main>  </Main>
            :
            <LoginPage isLogged= {this.state.isLogged}> </LoginPage>
            
        }
      </div>
    )
  }
}

export default withCookies(App);
