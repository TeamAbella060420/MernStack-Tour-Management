
import React from 'react'
import { Container, Row, Col, Form, ListGroup  } from 'reactstrap'
import { useParams } from 'react-router-dom'
import '../styles/tour-details.css'
import tourData from '../assets/data/tours'
import { calculateAvgRating } from "../utils/avgRating";

const TourDetails = () => {

  const { id } = useParams();

  // this is just a static data, late I will call the API and load our data form dataBase
  const tour = tourData.find(tour => tour.id === id)
  // destructure properties from tour object
  const { photo, title, desc, price, reviews, address, city, distance, maxGroupSize } = tour

  const {totalRating, avgRating} = calculateAvgRating(reviews)
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className="tour__content">
                <img src={photo} alt="" />

                <div className="tour__info">
                  <h2>{title}</h2>

                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__ratings d-flex align-items-center gap-1">
                      <i class="ri-star-fill" style={{color: 'var(--secondary-color)'}}></i> {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? 'Not rated' : <span>({reviews?.length})</span>}
                    </span>
                    <span>
                      <i class="ri-map-pin-user-fill"></i> {address}
                    </span>
                  </div>

                  <div className="tour__extra-details">
                    <span><i class="ri-map-pin-2-line"></i>{city}</span>
                    <span><i class="ri-money-dollar-box-line"></i> ${price} / per person</span>
                    <span><i class="ri-group-line"></i>{maxGroupSize}</span>
                  </div>

                <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/*=============== tour reviews section start==================*/}
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                </div>
                {/*=============== tour reviews section end==================*/}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default TourDetails
