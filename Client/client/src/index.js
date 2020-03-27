import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux'
import createElFajrStore from './ReduxStuff/Store/elFajrStore';
import { HashRouter, Route } from 'react-router-dom';
import MainPage from './pages/home';
import addPage from './pages/add-page';
import maladePage from './pages/malade-page';
import modifyPage from './pages/modify-page';
import rdvPage from './pages/rdv-page';
const myStore = createElFajrStore()


ReactDOM.render(<Provider store={myStore}>
     <HashRouter>
        <Route exact path='/' component={MainPage} />
        <Route path='/Ajouter-Malade' component={addPage} />
        <Route exact path='/malades/:id' component={maladePage} />
        <Route path='/malades/:id/Modifier' component={modifyPage}></Route>
        <Route path='/malades/:id/Rendez-Vous' component={rdvPage}></Route>
    </HashRouter>
</Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
