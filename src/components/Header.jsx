import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css'

const Header = () => {
  return (
    <nav>
      <div className='flex justify-center space-x-6 py-4'>  
        <img className='w-20 pr-1' src="src/assets/Ellipse 1.png"/>
        <h1 className='Chainewz'>CHAINEWZ</h1>
      </div>
      <div className='search-box'>
          <input className='search-input' type="text" placeholder="Search" />
          <button>
            <img className='search-icon' src="src/assets/search.png"/>
          </button>
        </div>
      <ul className='flex justify-center space-x-6 p-4' >
        <li className='menu'>
          <Link to="#">Home</Link>  
        </li>
        <li className='menu'>
          <Link to="/NewsPage">News</Link>
        </li>
        <li className='menu'>
          <Link to="/Press">Press Release</Link>
        </li>
        <li className='menu'>
          <Link to="/Learn">Learn</Link>
        </li>
        <li className='menu'>
          <Link to="/Airdrops">Airdrops</Link>
        </li>
        <li className='menu'>
          <Link to="/Projects">Upcoming Projects</Link>
        </li>
        <li className='menu'>
          <Link to="/Opportunities">Opportunities</Link>
        </li>
        <li className='menu'>
          <Link to="/Pricing">Pricing</Link>
        </li>
        <li className='bg-red-600 text-white  px-4 py-3 rounded-xl p-3 uppercase login'>
          <Link to="/Log In">Log In</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
