import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './index.css';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import VideosPage from './pages/VideosPage';
import NotFound from './pages/NotFound';

function App() {
 return (
  <div>
   <Router>
    <Routes>
     <Route exact path="/" element={ <MainLayout header nav footer article /> } >
      <Route exact path="/" element={ <HomePage /> } />
     </Route>
     <Route exact path="/news" element={ <MainLayout header nav footer article /> } >
      <Route exact path="/news" element={ <NewsPage /> } />
     </Route>
     <Route exact path="/videos" element={ <MainLayout header footer /> } >
      <Route exact path="/videos" element={ <VideosPage /> } />
     </Route>
     <Route path="*" element={ <NotFound /> } />
    </Routes>
   </Router>
  </div >
 );
}

export default App;
