import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import { BrowserRouter } from 'react-router-dom';

const store=configureStore({
  reducer:rootReducer,
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
    <App />
    
    </BrowserRouter>

  </Provider>
  </React.StrictMode>

 
);


