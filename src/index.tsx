import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//redux setup
import {Provider} from 'react-redux'
import store from './store'


// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css'

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
	    <App />
  	</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

