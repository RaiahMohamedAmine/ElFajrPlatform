import React, {Component} from 'react' ;
import login from '../middleware/login';
import { withCookies } from 'react-cookie';
class LoginPage extends Component {


    Submit(e) {
        e.preventDefault ();
        var {Email, mdp} = this.refs;
        var user = {
                Email : Email.value ,
                mdp : mdp.value
        }
        var {  cookies } = this.props;
        login(user).then (res => {
            if (res.data.type ==='Err') 
                throw new Error (res.data.message);
            else {
                if (res.data.type==="Info")
                {
                    cookies.set ('jwt', res.data.cookie);
                    this.setState({
                        isLogged : true
                    }) ;
                    console.log (cookies)
                }
            }
        })
    }


    render() {
        return(
            <div>
                <h1 >Login </h1>
                <form onSubmit={ (e)=>this.Submit (e)}>
                    <div>
                        Firstname : <input type="text" id="Email" name="Email" ref="Email" />
                    </div>
                    <div>  
                        Lastname : <input type="text" id="mdp" name="mdp" ref= "mdp"/>
                    </div>
                        <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default withCookies (LoginPage);