import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXG90FILILj0oJ3s0PHCzRvv1bhf7G4hM",
  authDomain: "cooldrink-coderhouse.firebaseapp.com",
  projectId: "cooldrink-coderhouse",
  storageBucket: "cooldrink-coderhouse.appspot.com",
  messagingSenderId: "708919130333",
  appId: "1:708919130333:web:cdc326d25f52f736f94334"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
