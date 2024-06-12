import React, { useState, useEffect } from 'react';
import './main.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4002/services')
      .then((res) => {
        setService(res.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);

  return (
    <div className="footer border border-dark mt-5">
      <div className="container border border-dark mt-4">
        <div className="row">
          <div className="col-md-3 col-sm-6 mt-2">
            <h5>About</h5>
            <p className="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ullam.
            </p>
          </div>
          <div className="col-md-3 col-sm-6 mt-2">
            <h5>Services</h5>
            <ul className="border border-dark">
              {service.map((item) => (
                <li key={item.id}>
                  <strong>{item.name}</strong>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mt-2">
            <h5>Reach us</h5>
            <div className="p">
              <p>Dno 12.2,</p>
              <p>Masoda Nagar,</p>
              <p>Vizag.</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mt-2">
            <h5>Contact us</h5>
            <ul className="pt-3">
              <li className="border border-dark">
                <NavLink to="tel:+91 9133102210">
                  <i className="fa-solid fa-phone"></i> +91 9133102210
                </NavLink>
              </li>
              <li className="border border-dark">
                <NavLink to="mailto:info@abcd.com">
                  <i className="fa-solid fa-envelope"></i> info@abcd.com
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <div className="d-flex flex-column flex-md-row justify-content-between container fa-border mt-5">
          <p>Copyright &copy; 2024 abcd. All rights reserved.</p>
          <p>Terms and Conditions</p>
          <p>Designed by me</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
