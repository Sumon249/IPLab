import React from 'react'
import { Link } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./Navigation.css"

const Navigation = () => {
  return (
    <div className='navigation'>
        <div className="nav-title"><h4>Foodies!</h4></div>
        <div className="nav-elements">
            <ul>
                <li> <Link to = '/'>Breakfast</Link> </li>
                <li> <Link to = '/Lunch'>Lunch</Link> </li>
                <li> <Link to = '/Dinner'>Dinner</Link> </li>
                <li> <Link to = '/Snacks'>Snacks</Link> </li>

            </ul>
        </div>
    </div>
  )
}

export default Navigation