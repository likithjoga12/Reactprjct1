import React from 'react';
import './main.css'; // Ensure to import your CSS

const Contactus = () => {
  return (
    <div>
      <h1 className='text-center mt-4'>Contact Us</h1>
      <div className='container border border-dark p-4'>
        <div className='row'>
          <div className='col-md-8 col-12'>
            <form className='mt-3 border border-dark p-4'>
              <div className='row'>
                <div className='col-md-6 col-12 mb-3'>
                  <label htmlFor='name'>Name:</label>
                  <input type='text' id='name' name='name' className='form-control' placeholder='Enter name' />
                </div>
                <div className='col-md-6 col-12 mb-3'>
                  <label htmlFor='email'>Email:</label>
                  <input type='email' id='email' name='email' className='form-control' placeholder='Enter email' />
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6 col-12 mb-3'>
                  <label htmlFor='phone'>Phone No:</label>
                  <input type='text' id='phone' name='phone' className='form-control' placeholder='Enter mobile no' />
                </div>
                <div className='col-md-6 col-12 mb-3'>
                  <label htmlFor='subject'>Subject:</label>
                  <input type='text' id='subject' name='subject' className='form-control' placeholder='Enter subject' />
                </div>
              </div>
              <div className='row'>
                <div className='col-12 mb-3'>
                  <label htmlFor='message'>Message:</label>
                  <textarea id='message' name='message' className='form-control' rows='5' placeholder='Enter your message'></textarea>
                </div>
              </div>
              <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
          </div>
          <div className='col-md-4 col-12 border border-dark mt-3 mt-md-0'>
            <h4 className='mt-3'>Address</h4>
            <p>123 Street Name,</p>
            <p>City, State, Zip</p>
            <p>Country</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
