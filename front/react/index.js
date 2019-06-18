import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from '../store/index';

ReactDOM.render(
<<<<<<< HEAD
    <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Main} />
    </BrowserRouter>
    </Provider>,
=======
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Main} />
    </BrowserRouter>
  </Provider>,
>>>>>>> 605701f567791ca3b0e013ee1248e253a82f0364
    document.getElementById('app')

);
