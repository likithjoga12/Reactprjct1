import React from 'react'
import {Row, Col } from 'react-bootstrap';
import "./main.css"

const Offer = () => {
  return (
    <div>Offer
      <div className='container loot'>
         
         <h4 className='lok'>
             offer 50% off on first booking,
             30% off  on second booking,
             20%off on 3rd booking.
           </h4>
           

         </div>
         <div className='container mt-4'>
         <h2 className="text-center mb-5">Vertical Line Layout</h2>
      <Row className="position-relative">
        <Col md={5} className="d-flex justify-content-end">
          <div className="content-left bg-primary text-white p-3">
            <h4>Left Content</h4>
            <p>This is the content on the left side of the line.</p>
          </div>
        </Col>
        <Col md={2} className="d-flex justify-content-center">
          <div className="vertical-line"></div>
        </Col>
        
        <Col md={5} className="d-flex justify-content-start">
          <div className="content-right  text-white p-3">
          
          </div>
        </Col>
      </Row>
      <Row>
      <Col md={5} className="d-flex justify-content-end mt-2">
          <div className="content-left  text-white p-3">
          
          </div>
        </Col>
        <Col md={2} className="d-flex justify-content-center">
          <div className="vertical-line"></div>
        </Col>
      <Col md={5} className="d-flex justify-content-start">
          <div className="content-right bg-success text-white p-3">
            <h4>Right Content</h4>
            <p>This is the content on the right side of the line.</p>
          </div>
        </Col>
      </Row>
      <Row className="position-relative">
        <Col md={5} className="d-flex justify-content-end">
          <div className="content-left bg-primary text-white p-3">
            <h4>Left Content</h4>
            <p>This is the content on the left side of the line.</p>
          </div>
        </Col>
        <Col md={2} className="d-flex justify-content-center">
          <div className="vertical-line"></div>
        </Col>
        
        <Col md={5} className="d-flex justify-content-start">
          <div className="content-right  text-white p-3">
          
          </div>
        </Col>
      </Row>
         </div>

    </div>
  )
}

export default Offer