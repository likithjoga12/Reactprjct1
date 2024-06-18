import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditServices = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    
    axios.put(`http://localhost:4002/services/${id}`, { id, name, description })
      .then(res => {
        alert("Data updated");
        navigate("/");
      })
      .catch(err => {
        alert("Unable to update data");
      });
  };

  return (
    <div className='EditServices'>
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
            placeholder='Enter name' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <input 
            type='text' 
            name='description' 
            placeholder='Enter description' 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </div>
        <div>
          <input type='submit' name='submit' value='Submit' />
        </div>
      </form>
    </div>
  );
};

export default EditServices;
