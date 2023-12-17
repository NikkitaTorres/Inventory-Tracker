import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.js';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import itemReducer from './reducers/item-reducer.js';// come back to later
import { Provider } from 'react-redux';

const store = createStore(itemReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
