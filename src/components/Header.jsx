import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css'

const Header = () => {
  return (
    <nav>
      <div className='flex justify-center space-x-6'>  
        <img className='w-20 pr-1' src="src/assets/Ellipse 1.png"/>
        <h1 className='Chainewz'>CHAINEWZ</h1>
      </div>
      <ul className='flex justify-center space-x-6'>
        <li>
          <Link to="#">Home</Link>  
        </li>
        <li>
          <Link to="/NewsPage">News</Link>
        </li>
        <li>
          <Link to="/Press">Press Release</Link>
        </li>
        <li>
          <Link to="/Learn">Learn</Link>
        </li>
        <li>
          <Link>Airdrops</Link>
        </li>
        <li>
          <Link>Upcoming Projects</Link>
        </li>
        <li>
          <Link>Opportunities</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
