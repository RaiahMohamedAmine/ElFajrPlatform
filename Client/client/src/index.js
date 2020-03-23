import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux'
import createElFajrStore from './ReduxStuff/Store/elFajrStore';
import MainPage from './pages/home';
import {
    HashRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import AddPage from './pages/add-page'
import MaladePage from './pages/malade-page';
const myStore = createElFajrStore()

ReactDOM.render(<Provider store={myStore}>
    <HashRouter>
        <Route exact path='/' component={MainPage} />
        <Route path='/Ajouter-Malade' component={AddPage} />
        <Route exact path='/malades/:id' component={MaladePage} />
        <Route path='/malades/:id/Modifier' component={AddPage}></Route>
        <Route path='/malades/:id/Rendez-Vous' component={()=><p>Hna rendez vous</p>}></Route>
    </HashRouter>
</Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
