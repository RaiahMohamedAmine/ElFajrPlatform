import React, {Component} from 'react' ;
import Header from './Header';
import Search from './Search';
import VerifyAuth from '../middleware/VerifyAuth';
import LoginPage from './LoginPage'; 
import {withCookies} from 'react-cookie';

class Main extends Component {
  /*  componentDidMount () {
        var {cookies} = this.props;
        console.log(cookies);
        VerifyAuth(cookies)
    }*/
    render() {
        return (
            <div>
                    <Header></Header>
                     <Search></Search>
            </div>
        )
    }
}

export default withCookies(Main);