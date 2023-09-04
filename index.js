import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NewPostPage from './NewPostPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NewPostPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your NewPostPage, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
