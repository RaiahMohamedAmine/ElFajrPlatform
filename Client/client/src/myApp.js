import React, { useState } from 'react'
import './Base.css'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import ElFadjrApp from './Components/Containers/ElFadjrApp';
import TextField from './Components/Presentationals/Form-Items/text-field';
import Button from './Components/Presentationals/Buttons/button';
import login from './middleware/login';


const MyApp = () => {
    let mdp = ''
    const [correct, setCorrect] = useState(true)
    const [logged, setLog] = useState(false)
    return <HashRouter>
        <Switch>
            <Route path='/login' component={({ history }) => <div className='login-bg'>
                <form className='login-form' onSubmit={e => {
                    e.preventDefault()
                    login({mdp}).then  (res=>{
                        if (res.data.type==='Err')
                            setCorrect (false);
                        else {
                            setLog (true);
                            history.push ('/');
                        }
                    });
                }}>
                    <p>Mot de passe</p>
                    <TextField onChange={e => { mdp = e.target.value }} type="password"></TextField>
                    <p style={{ opacity: correct ? '0' : '1' }}>Mot de passe incorrecte</p>
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