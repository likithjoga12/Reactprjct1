import React ,{useEffect,useState}from 'react'
import "./main.css"
import axios from 'axios';

import {Row, Col, Card } from 'react-bootstrap';

const Testimonals = () => {
  const [milestones, setMilestones] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4002/reviews')
      .then((res) => {
        setMilestones(res.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }, []);
  return (
    <div className='container'>
      <Row>
      {milestones.map((milestone, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
               
                <Card.Text>{milestone.reviews}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        </Row>
    </div>
  )
}

export default Testimonals