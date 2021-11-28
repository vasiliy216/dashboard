import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import store from './redux/store'
import { User } from './redux/actions'

store.dispatch(User.fetchUserData())

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = { store }>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);