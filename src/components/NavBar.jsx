import React from 'react'


export default function NavBar(props) {


 return (
  <ul>
   <li onClick={ props?.action_1 }>
    <img src={ props?.icon_1 } alt="" className='left-nav-icons' />
   </li>
   <li onClick={ props?.action_2 }>
    <img src={ props?.icon_2 } alt="" className='left-nav-icons' />
   </li>
   <li onClick={ props?.action_3 }>
    <img src={ props?.icon_3 } alt="" className='left-nav-icons' />
   </li>
  </ul>
 )
}
