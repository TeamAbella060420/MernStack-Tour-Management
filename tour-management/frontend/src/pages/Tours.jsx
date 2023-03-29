
import React from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/tour.css'
import TourCard from './../shared/TourCard'
import SearchBar from './../shared/SearchBar'
import NewsLetter from './../shared/NewsLetter'
import { Container, Col, Row } from 'reactstrap'
import tourData from '../assets/data/tours'

const Tours = () => {
  return (
    <>
      <CommonSection title={'All Tours'} />
      <section>
        <Container>
          <Row>
            <Col>
              <SearchBar />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {
              tourData?.map((tour) => (
                <Col>
                  {tour.title}
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Tours