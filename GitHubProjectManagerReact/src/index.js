import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk';
import reducer from './reducers/index'
import { Router,browserHistory } from 'react-router'
import Routes from './routes'
import injectTapEventPlugin from "react-tap-event-plugin";
import {enableBatching} from 'redux-batched-actions';
import loggedInWithToken from './helpers/pressistAuth'


loggedInWithToken().then((state)=>{

  injectTapEventPlugin();

  let createStoreWithMiddleware = applyMiddleware(reduxThunk, ReduxPromise)(createStore)
  let store = createStoreWithMiddleware(
    enableBatching(reducer),
    {authentication: state},
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

ReactDOM.render(

  <Provider store={store} >
    <Router history={browserHistory} routes={Routes}/>
  </Provider>,
 document.getElementById('root')
);

})
