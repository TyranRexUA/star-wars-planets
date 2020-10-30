import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { LastLocationProvider } from 'react-router-last-location';

ReactDOM.render(
  <HashRouter>
    <LastLocationProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LastLocationProvider>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);