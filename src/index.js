import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import './index.css';
import Modal from './components/Modal/Modal';

import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Modal />
      <App />
    </Provider>
  </React.StrictMode>,
);
