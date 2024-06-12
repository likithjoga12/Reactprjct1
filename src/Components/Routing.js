
import React from 'react'
import About from "./About"
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Service from './Service'

import BookServices from './BookServices'
import Testimonals from './Testimonals'
import Offer from './Offer'
import Contact from './Contactus'
export const Routing = () => {
    return (
      <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/offer" element={<Offer/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/book service" element={<BookServices/>} />
            <Route path="/testimonals" element={<Testimonals/>} />
           
            <Route path="*" element={<h1>404 Page Not Found</h1>} />


            </Routes>
            </div>
    )
}