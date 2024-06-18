
import React from 'react'
import About from "./About"
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Service from './Service'

import BookServices from './BookServices'
import Testimonals from './Testimonals'
import Offer from './Offer'
import Contact from './Contactus'
import Admit from './Admit'
import { Somn } from './Somn'
import { Adminaddservices } from './Adminaddservices'
import Dashboard from './Dashboard'
import EditServices from './EditServices'
import DeleteServiceForm from './DeleteServiceForm'
import DeleteReviewForm from './DeleteReviewForm'
import { AddReviews } from './AddReviews'
import EditReview from './EditReview'
export const Routing = () => {
    return (
      <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/service" element={<Service/>} />
            <Route     path="/service/editdata/:id"element={<Somn />} />
            <Route path="/offer" element={<Offer/>} />
            <Route     path="/editdata/:id"element={<Somn />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/book service" element={<BookServices/>} />
            <Route path="/testimonals" element={<Testimonals/>} />
            <Route path="/Admit" element={<Admit/>} />
            <Route path="/Dashboard" element={<Dashboard/>} >
            <Route path="/Dashboard/Adminaddservices" element={<Adminaddservices/>} />
            <Route path="/Dashboard/EditServices" element={<EditServices/>} />
            <Route path="/Dashboard/DeleteServices" element={<DeleteServiceForm/>} />
            <Route path="/Dashboard/DeleteReviews" element={<DeleteReviewForm/>} />
            <Route path="/Dashboard/AddReviews" element={<AddReviews/>} />
            <Route path="/Dashboard/EditReviews" element={<EditReview/>} />

            </Route>
            
           
            <Route path="*" element={<h1>404 Page Not Found</h1>} />


            </Routes>
            </div>
    )
}