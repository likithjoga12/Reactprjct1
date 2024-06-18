import React ,{useEffect,useState}from 'react';
import logo from "./all-in-all-services-urapakkam-chengalpattu-electricians-ou5z96w.avif";
import './main.css';  // Ensure to import your CSS
import axios from 'axios';
import {  Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



const Home = () => {
  const [service, setService] = useState([]);
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

 


  useEffect(() => {
    axios.get('http://localhost:4002/reviews')
      .then((res) => {
        setService(res.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);
  return (
    <div>
      <div className='container-fluid pek'>
        <div className='row'>
          <div className='col-12 loot'>
            <h1>Home</h1>
          </div>
        </div>
        <h1>Home</h1>
        <p>Welcome to the ABC Book Services</p>
      </div>
  
     <div className='container'>
      <Row>
      {data.map((milestone, index) => (
          <Col md={3} key={index} className="mb-4">
          
              <NavLink to={`/editData/${milestone.id}`}>
             <button className='btn btn-outline-info'> {milestone.name}</button>
                                </NavLink>
               
            
          </Col>
        ))}
        </Row>
    </div>
     
      <div className='container kdl'>
        <div className='row'>
          <div className='col-md-8 col-12 border border-dark mb-3'>
            <h4>Welcome to Store Services</h4>
            <p className='border border-dark p-2 overflow-scroll'>
              A services which we provide with high efficiency
              like carpenter, cleaning, barber, chef,
              lineman, automobile repair,
              mechanic, plumber, teacher, etc.
            </p>
          </div>
          <div className='col-md-4 col-12 border border-dark p-2'>
            <img src={logo} className=' pt-2' alt="Services Logo" />
          </div>
        </div>
      </div>
      
      <div className='ramp container-fluid border border-dark text-center my-3'>
        <h1>Our Services 50% off on first booking</h1>
      </div>
      
      <div className='container'>
        <h4>Testimonials</h4>
        <h4>Reviws</h4>
        <ul className="border border-dark">
          
              {service.map((item) => (
                <li key={item.id}>
                  <strong>{item.reviews}</strong>
                </li>
              ))}
              </ul>

      </div>
    </div>
  );
}

export default Home;
