import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Targets} from './components/targets/index'
import {Transaction} from './components/transaction/index'
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import { NavBar } from './components/NavBar';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/monthly" element={<Targets />}/>
        <Route path="/edit/month" element={<App />}/>
        <Route path="/add/transaction" element={<App />}/>
        <Route path="*" element={<>Not Found</>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
