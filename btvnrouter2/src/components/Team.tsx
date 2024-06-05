import React from 'react'
import { Outlet, Routes ,Route } from 'react-router-dom'

import Teams from './Teams'
export default function Team() {
  return (
    <div>
      Team
      <Outlet></Outlet>
      <Routes>
         <Route path='/' element={<Teams/>}></Route>
      </Routes>
    </div>
  )
}
