import React, {useState} from 'react'
import './main.css'
import axios from 'axios';
export const Adminaddservices = () => {
    const[id,setId]=useState("");
  const[name,setName]=useState("");
  const[description,setDescription]=useState("");
  const submitHandler=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:4002/services',{id,name,description})
    .then(res=>{
        alert("data enterd");
        setId("");
        setName("")
        setDescription("")
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
    <input type='text' name='name' placeholder='enter name'  value={name}  onChange={(e)=>setName(e.target.value)} />
    </div>
    <div>
    <input type='text' name='Description' placeholder='enter addreess' value={description} onChange={(e)=>setDescription(e.target.value)} />
    </div>
    <div>
    <input type='submit' name='submit' ></input>
    </div>
    
    </form>
    </div></div>
  )
}
