
import React from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/tour.css'
import TourCard from './../shared/TourCard'
import SearchBar from './../shared/SearchBar'
import NewsLetter from './../shared/NewsLetter'
import { Container, Col, Row } from 'reactstrap'
import tourData from '../assets/data/tours'
import { useState, useEffect } from 'react'

const Tours = () => {

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(12/3)
    setPageCount(pages)
  }, [page])

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
                <Col lg='3' className='mb-4' key={tour.id}>
                  <TourCard tour={tour}/>
                </Col>
              ))
            }
            <Col lg='12'>
              <div className="pagination d-flex align-item-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number => (
                  <span key={number} onClick={() => setPage(number)}
                    className={page === number ? 'active__page' : ''}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <NewsLetter />
    </>
  )
}

export default Tours