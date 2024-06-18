import React ,{useState,useEffect}from 'react'
import "./main.css"
import axios from 'axios';
import {  Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4002/services')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);
  
  
  return (
    <div>
       <div className='container loot'>
         
         <h4 className='lok'>
             offer 50% off on first booking,
             30% off  on second booking,
             20%off on 3rd booking.
           </h4>
 
         </div>
         <div className='container mt-4 border border-black'>
      <Row className='p-4'>
      {data.map((milestone, index) => (
          <Col md={3} key={index} className="mb-4">
          
              <NavLink to={`/service/editData/${milestone.id}`}>
             <button className='btn btn-outline-info'> {milestone.name}</button>
                                </NavLink>
               
            
          </Col>
        ))}
        </Row>
    </div>
         
    </div>
  )
}

export default Service