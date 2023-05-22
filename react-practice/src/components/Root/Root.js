import React from 'react'
import { Outlet } from 'react-router'
import Navigation from '../Navigation/Navigation'

const Root = () => {
  return (
    <>
        <Navigation></Navigation> 
        <Outlet></Outlet>  
    </>
  )
}

export default Root