import React from 'react'
import { Outlet } from 'react-router-dom'
import TestComponent from '../components/TestComponent';

export default function MainLayout({ children }) {
console.log(children);
  return (
    <div>
      <TestComponent />
      { children }
      <Outlet />
    </div>
  )
}
