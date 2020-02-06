import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';
import SearchBar from './mainPage/Search' ;
import Header from './mainPage/Header'; 
import LoginPage from './mainPage/LoginPage';
import Auth from './middleware/auth';

class App extends Component {
    constructor(props) {
      super (props) ;
      this.state ={
        isLogged : false,
        Loaded : false
      }
    }

    componentDidMount () {
      var {cookie} = this.props ;
      console.log(cookie) ;
      Auth(cookie).then (e=> console.log (e));
  }

  render () {
    return (  
        <div>
            {
              this.state.Loaded? <h1> We are Loading</h1> :(
                this.state.isLogged ? <div>
                  <Header></Header>
                  <SearchBar> </SearchBar>
                </div> :
                <LoginPage></LoginPage>
              )
            }
        </div>
      
    );
  } 
}

export default App;
