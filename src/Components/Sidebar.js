import React from 'react'
import { NavLink } from 'react-router-dom'
import "./main.css"


const Sidebar = () => {
  return (
    <div >
        <ul className="sidebar"> 
            <li>
              <NavLink to="/Dashboard/Adminaddservices" >Add services</NavLink></li>
            <li>
              <NavLink to="/Dashboard/DeleteServices" >DeleteStudent</NavLink></li>
            <li> <NavLink to= "/Dashboard/EditServices"> EditData</NavLink> </li>
            <li><NavLink to="/Dashboard/AddReviews" >Addoffer
              </NavLink></li>
              <li><NavLink to="/Dashboard/EditReviews" >Edit review
              </NavLink></li>
              <li>
              <NavLink to="/Dashboard/DeleteReviews" >DeleteReviews
              </NavLink></li>
            

        </ul>
    </div>
  )
}
export default Sidebar;
