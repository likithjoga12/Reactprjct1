import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteReviewForm = () => {
  const [id, setId] = useState('');
  const [reviews, setReview] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    
    axios.delete(`http://localhost:4002/reviews/${id}`)
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
            name='reviews' 
            placeholder='Enter name (optional)' 
            value={reviews} 
            onChange={(e) =>  setReview(e.target.value)} 
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

export default DeleteReviewForm;