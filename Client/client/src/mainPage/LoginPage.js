import React, {Component} from 'react' ;
import login from '../middleware/login';

class LoginPage extends Component {

    constructor (props) {
        super(props); 


    }

    Submit(e) {
        e.preventDefault ();
        var {Email, mdp} = this.refs;
        var user = {
                Email : Email.value ,
                mdp : mdp.value
        }
        login(user).then (e=>console.log(e))
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

export default LoginPage;