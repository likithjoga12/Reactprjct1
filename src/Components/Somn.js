import axios from 'axios';
import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import {Row,Col,Card} from "react-bootstrap"

export const Somn = () => {
    const {id}=useParams();
    const [data1,setData1]=useState("")
    axios.get(`http://localhost:4002/services/${id}`)
    .then(res=>{
        setData1(res.data);
    })
    .catch(err=>console.error(err))
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
    
    
   // alert(id);

  return (
    <div>
    <div className='container'>
          <nav aria-label="breadcrumb">
      <ol className="breadcrumb justify-content-center">
        <li className="breadcrumb-item"><NavLink to="/adminhome">Home</NavLink></li>
        <li className="breadcrumb-item active" aria-current="page">{data1.name}</li>

      </ol>
    </nav>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 '>
          <p>
            <strong>Service Name:</strong> {data1.name}</p>
            <p>
            Name:Harshit kumar
          </p>
        </div>
        <div className='col-md-2'>
          <button>
            Appointment
          </button>

        </div>

      </div>

    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <img src=' https://c8.alamy.com/comp/D36CPK/different-types-of-workers-D36CPK.jpg' className='img-fluid' alt='blask'/>

        </div>
      </div>

    </div>
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-9'>
        <div className='row '>
        <p>
        We are engaged in executing various types of Plumbing Work. Backed by a team of experienced plumbers,
        we have been rendering unmatched services to the clients. Starting right from the fabrication, testing, 
        installation and servicing, we undertake all the tasks involved in plumbing work. 
        Also, we make sure that the work executed by us avoids any kind of problem or chaos in future.
        Our Plumbing work include the following :
        Hydro Pneumatic System
        Sewage Treatment Plants
        Rainwater Harvesting
        Water Treatment Plants
        Fire Fighting Works

        </p>

      </div>
      <div className='row'>
        <p>
        - Firefighting: Becoming a firefighter typically requires completing a fire academy training program, which can vary in length depending on the organization. 
        Firefighters need to learn about fire behavior, emergency medical techniques, rescue operations, hazardous materials handling, and more.
        - Trades: Trade careers such as plumbing, HVAC, and electrical work usually require completing an apprenticeship program or vocational training. These programs provide hands-on experience and classroom instruction to develop the necessary skills for the trade.
        </p>

      </div>


        </div>
        <div className='col-md-3'>
          <form className='border border-dark p-2' >
            <div className='mt-3'>
              <input  type='text' name='name' placeholder='Enter name' className='form-control'/>
            </div>
            <div className='mt-3'>
              <input  type='email' name='email' placeholder='Enter Emailid' className='form-control'/>
            </div>
            <div className='mt-3'>
              <input  type='text' name='phoneno' placeholder='Enter number' className='form-control'/>
            </div>
            <div className='mt-3'>
              <textarea className='form-control' name='subject'>
                Subject

              </textarea>
            </div>
            <button className='form-contol m-3'>
              submit
            </button>



          </form>

        </div>
      </div>
      
    </div>
    <div className='container m-3 border-black'>
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
        
    </div>
  )
}
