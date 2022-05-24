import React from 'react';
import ReactDOM from 'react-dom';
import './styles/resets.scss';
import './styles/grids.scss';
import './styles/base.scss';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
