import React, {useState} from 'react'
import './main.css'
import axios from 'axios';
const Contactus = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone,SetPhone]=useState("");
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState("");
  const submitHandler=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:4002/profile',{
      name,
      email,
      phone,
      message,
      subject
    })
    .then(res=>{
        alert("data enterd");
        setName("")
        setEmail("")
        SetPhone("")
        setMessage("")
        setSubject("")
        
    })
    .catch(err=>{
        alert("dta unable ");
    })

  }


  return (
    <div>
      <div className='container border border-dark p-4'>
      <h1 className='text-center mt-4'>Contact Us</h1>
      <div className='row'>
        <div className='col-md-8 col-12'>
          <form className='mt-3 border border-dark p-4' onSubmit={submitHandler}>
            <div className='row'>
              <div className='col-md-6 col-12 mb-3'>
                <label htmlFor='name'>Name:</label>
                <input 
                  type='text' 
                  id='name' 
                  name='name' 
                  className='form-control' 
                  placeholder='Enter name' 
                  value={name} 
                  
                />
              </div>
              <div className='col-md-6 col-12 mb-3'>
                <label htmlFor='email'>Email:</label>
                <input 
                  type='email' 
                  id='email' 
                  name='email' 
                  className='form-control' 
                  placeholder='Enter email' 
                  value={email} 
                  
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 col-12 mb-3'>
                <label htmlFor='phone'>Phone No:</label>
                <input 
                  type='text' 
                  id='phone' 
                  name='phone' 
                  className='form-control' 
                  placeholder='Enter mobile no' 
                  value={phone} 
                  
                />
              </div>
              <div className='col-md-6 col-12 mb-3'>
                <label htmlFor='subject'>Subject:</label>
                <input 
                  type='text' 
                  id='subject' 
                  name='subject' 
                  className='form-control' 
                  placeholder='Enter subject' 
                  value={subject} 
                  
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-12 mb-3'>
                <label htmlFor='message'>Message:</label>
                <textarea 
                  id='message' 
                  name='message' 
                  className='form-control' 
                  rows='5' 
                  placeholder='Enter your message' 
                  value={message} 
                  
                ></textarea>
              </div>
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </form>
        </div>
      </div>
    
          <div className='col-md-4 col-12 border border-dark mt-3 mt-md-0'>
            <h4 className='mt-3'>Address</h4>
            <p>123 Street Name,</p>
            <p>City, State, Zip</p>
            <p>Country</p>
          </div>
        </div>
      </div>
    
  );
}

export default Contactus;
