import React, { useState } from 'react';
import axios from 'axios';

const BookServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    services: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4002/bookser',{
      
      formData 
      })
    
      .then(response => {
        console.log(response.data);
        // Handle success, e.g., show a success message or redirect
      })
      .catch(error => {
        console.error(error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <div className='container'>
      <form className='p-2 border border-dark' onSubmit={handleSubmit}>
        <div className='row'>
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label htmlFor="phoneNumber" className="form-label">Phone number</label>
            <input type="text" className="form-control" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          </div>
        </div>
        <div className='row'>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label htmlFor="services" className="form-label">Services</label>
            <input type="text" className="form-control" id="services" value={formData.services} onChange={handleChange} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" className="form-control" id="subject" value={formData.subject} onChange={handleChange} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" placeholder="Leave a comment here" value={formData.message} onChange={handleChange}></textarea>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-md-12'>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookServices;