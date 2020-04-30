import React, { useState } from 'react'
import './Base.css'
import logo from './assets/LogoElFedjr.svg'
import { HashRouter, Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import ElFadjrApp from './Components/Containers/ElFadjrApp';
import PassField from './Components/Presentationals/Form-Items/password-field';
import Button from './Components/Presentationals/Buttons/button';
import login from './middleware/login';
import { toastr } from 'react-redux-toastr';


const MyApp = () => {
    let mdp = ''
    const [logged, setLog] = useState(false)
    return <BrowserRouter>
        <Switch>
            <Route path='/login' component={({ history }) => <div className='login-bg'>
                <form className='login-form' onSubmit={e => {
                    e.preventDefault()
                    login({ mdp })
                    .then(res => {
                        if (res.data.type==="Err") 
                            toastr.error('Erreur','Mot de passe incorrecte')
                        else{
                            toastr.success('Connexion réussie','Mot de passe correcte')
                            setLog(true);
                            history.push('/');
                        }
                    })
                }}>
                    <img src={logo} alt="Logo El Fedjr" />
                    <p>Mot de passe</p>
                    <PassField onChange={e => { mdp = e.target.value }} type='password'></PassField>
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
    </BrowserRouter>
}

export default MyApp