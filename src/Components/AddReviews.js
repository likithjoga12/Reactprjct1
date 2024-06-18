import React, {useState} from 'react'
import './main.css'
import axios from 'axios';
export const AddReviews = () => {
    const[id,setId]=useState("");
    const [reviews, setReview] = useState('');
  const submitHandler=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:4002/reviews',{id,reviews})
    .then(res=>{
        alert("data enterd");
        setId("");
        setReview("")
        
    })
    .catch(err=>{
        alert("dta unable ");
    })

  }

  return (
    <div><div className='studentform  '>
    <form onSubmit={submitHandler}>
    <div>
    <input type='text' 
    name='id' 
    placeholder='Id'
    value={id}
    onChange={(e)=>setId(e.target.value)}
    
    
    />
    </div>
    <div>
    <input type='text' name='reviews' placeholder='enter name'  value={reviews}  onChange={(e)=>setReview(e.target.value)} />
    </div>
    
    <div>
    <input type='submit' name='submit' ></input>
    </div>
    
    </form>
    </div></div>
  )
}
