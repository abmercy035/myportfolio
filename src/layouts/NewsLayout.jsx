import React from 'react'
import Aside from '../components/Aside'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import NewsPage from '../pages/NewsPage'
import Header from '../components/Header'
export default function NewsLayout() {
  return (
    <>
      <Header />
      <NavBar />
      <main className="layout">
        <Aside> News Aside</Aside>
        <section className="section">
          <NewsPage />
        </section>
        <article> News Article</article>
      </main>
      <Footer />
    </>
  )
}
