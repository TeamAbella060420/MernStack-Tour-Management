
import React, {useState} from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'

const Booking = ({ tour, avgRating }) => {

    const { price, reviews} = tour

    const [credentials, setCredentials] = useState({
        userId: '01', //later it will be dynamic
        userEmail: 'example@gmail.com',
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    });

    const handleChange = e => {
        setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
    };

  return (
    <div className="booking">
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>${price} <span>/per person</span></h3>
            <span className="tour__ratings d-flex align-items-center">
                <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating} ({reviews?.length})
            </span>
        </div>

        {/*=============== booking form start ==================*/}
        <div className="booking__form">
            <h5>Information</h5>
            <Form className='booking__info-form'>
                <FormGroup>
                    <input 
                        type="text" 
                        placeholder='Full Name' 
                        id='fullname' 
                        required 
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <input 
                        type="number" 
                        placeholder='Phone' 
                        id='phone' 
                        required 
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                    <input 
                        type="date" 
                        placeholder='' 
                        id='bookAt' 
                        required 
                        onChange={handleChange}
                    />
                    <input 
                        type="number" 
                        placeholder='Guest' 
                        id='Guest' 
                        required 
                        onChange={handleChange}
                    />
                </FormGroup>
            </Form>
        </div>
        {/*=============== booking form end ==================*/}
        {/*=============== booking form bottom ==================*/}
        <div className="booking__bottom">
            <ListGroup>
                <ListGroupItem className='border-0 px-0'>
                    <h5 className='d-flex align-items-center gap-1'>$ {price} <i class="ri-close-line"></i> 1 person</h5>
                    <span> ${price}</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0'>
                    <h5>Service charge</h5>
                    <span> $10</span>
                </ListGroupItem>
                <ListGroupItem className='total border-0 px-0'>
                    <h5>Total</h5>
                    <span> $109</span>
                </ListGroupItem>

                <Button className='btn primary__btn w-100 mt-4'>Book Now</Button>
            </ListGroup>
        </div>
        {/*=============== booking form bottom ==================*/}
    </div>
  )
}

export default Booking