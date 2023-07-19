import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './index.css';

import TestComponent from './components/TestComponent';


function App() {
  return (
    <div>
      <TestComponent />
      {/* <Router>
        <Routes>
         <LoginRoute /> 
         <MainRoute /> 
          </Routes>
        </Router> */}
    </div>
  );
}

export default App;
