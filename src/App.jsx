import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'

import HomeLayout from './layouts/HomeLayout'
import NotFound from './pages/NotFound'
import NewsLayout from './layouts/NewsLayout'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeLayout />}></Route>
          <Route exact path="/NewsPage" element={<NewsLayout />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
