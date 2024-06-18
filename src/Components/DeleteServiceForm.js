import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteServiceForm = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    
    axios.delete(`http://localhost:4002/services/${id}`)
      .then(res => {
        alert("Service deleted successfully");
        navigate("/");
      })
      .catch(err => {
        alert("Unable to delete service");
        console.error(err);
      });
  };

  return (
    <div className='studentform'>
      <form onSubmit={submitHandler}>
        <div>
          <input 
            type='text' 
            name='id' 
            placeholder='Id' 
            value={id} 
            onChange={(e) => setId(e.target.value)} 
          />
        </div>
        <div>
          <input 
            type='text' 
            name='name' 
            placeholder='Enter name (optional)' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            disabled
          />
        </div>
        <div>
          <input type='submit' name='submit' value='Delete' />
        </div>
      </form>
    </div>
  );
};

export default DeleteServiceForm;
