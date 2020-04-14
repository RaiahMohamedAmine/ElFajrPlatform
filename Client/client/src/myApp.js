import React, { useState } from 'react'
import './Base.css'
import logo from './assets/LogoElFedjr.svg'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import ElFadjrApp from './Components/Containers/ElFadjrApp';
import TextField from './Components/Presentationals/Form-Items/text-field';
import Button from './Components/Presentationals/Buttons/button';
import login from './middleware/login';
import { toastr } from 'react-redux-toastr';


const MyApp = () => {
    let mdp = ''
    const [logged, setLog] = useState(false)
    return <HashRouter>
        <Switch>
            <Route path='/login' component={({ history }) => <div className='login-bg'>
                <form className='login-form' onSubmit={e => {
                    e.preventDefault()
                    login({ mdp })
                    .then(res => {
                            toastr.success('Connexion réussie','Mot de passe correcte')
                            setLog(true);
                            history.push('/');
                    })
                    .catch(err=> toastr.error('Erreur','Mot de passe incorrecte'));
                }}>
                    <img src={logo} />
                    <p>Mot de passe</p>
                    <TextField onChange={e => { mdp = e.target.value }} type='password'></TextField>
                    <Button>Se connecter</Button>
                </form>
            </div>} />
            <Route component={() => {
                if (logged) {
                    return <ElFadjrApp />
                } else {
                    console.log('nassim')
                    return <Redirect to='/login' />
                }
            }
            } />
        </Switch>
    </HashRouter>
}

export default MyApp