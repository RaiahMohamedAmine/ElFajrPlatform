import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux'
import createElFajrStore from './ReduxStuff/Store/elFajrStore';
import MyApp from './myApp';
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
const myStore = createElFajrStore()


ReactDOM.render(<Provider store={myStore}>
    <MyApp/>
    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="bottom-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick/>
</Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
