import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditReview = () => {
  const [id, setId] = useState('');
  const [reviews, setReview] = useState('');

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    
    axios.put(`http://localhost:4002/services/${id}`, { id, reviews })
      .then(res => {
        alert("Data updated");
        navigate("/");
      })
      .catch(err => {
        alert("Unable to update data");
      });
  };

  return (
    <div className='EditReview'>
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
            name=' reviews' 
            placeholder='Enter Reviews' 
            value={reviews} 
            onChange={(e) =>  setReview(e.target.value)} 
          />
        </div>
      
        <div>
          <input type='submit' name='submit' value='Submit' />
        </div>
      </form>
    </div>
  );
};

export default EditReview;
