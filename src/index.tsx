import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/monthly" element={<App />}/>
        <Route path="/edit/month" element={<App />}/>
        <Route path="/add/transaction" element={<App />}/>
        <Route path="*" element={<>Not Found</>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
