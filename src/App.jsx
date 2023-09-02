import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'

import HomePage from './pages/Home'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import Experience from './pages/experiences/Experience'
import Background from './pages/backgrounds/Background'
import About from './pages/about/About'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <HomePage /> }></Route>
        <Route exact path="/about-me" element={ <About /> }></Route>
        <Route exact path="/projects" element={ <Projects /> }></Route>
        <Route exact path="/contact-me" element={ <Contact /> }></Route>
        <Route exact path="/experince" element={ <Experience /> }></Route>
        <Route exact path="/background" element={ <Background /> }></Route>
      </Routes>
    </Router>
  )
}


export default App
