import React from 'react'
import HomePage from '../pages/Home'
import Header from '../components/Header'
import Aside from '../components/Aside'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
export default function HomeLayout() {
  return (
    <>
      <main className="layout">
        <section className="section">
          <HomePage />
        </section>
      </main>
    </>
  )
}
