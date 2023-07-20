import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import TestComponent from '../components/TestComponent';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

export default function MainLayout(props) {
  return (
    <div className='l:w-800 w-full bg-red-800'>
      { props.header && <Header /> }
      <main>
        <Outlet />
      </main>
      { props.nav && <NavBar /> }
      { props.footer && <Footer /> }
    </div>
  )
}
