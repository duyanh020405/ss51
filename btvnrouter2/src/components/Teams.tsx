import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Index from './Index'
export default function Teams() {
  return (
    <div>
      Teams
      <Outlet></Outlet>
      <Routes> 
        <Route path='/' element={<Index/>}></Route>

      </Routes>

    </div>
  )
}
