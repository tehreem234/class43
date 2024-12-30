import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import JobSearch from './pages/JobSearch/JobSearch';
import App from './pages/App/App';
import App1 from './pages/App1/App1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <JobSearch /> */}
    {/* <App/> */}
    <App1/>
  </React.StrictMode>
);


