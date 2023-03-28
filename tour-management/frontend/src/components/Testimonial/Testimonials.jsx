
import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonial = () => {
  return (
    <Slider>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Provident dolorum, culpa sed illo iure et qui nesciunt nisi
          laudantium delectus distinctio ipsum reiciendis? Illum maxime
          iusto provident optio ea a.
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
          <div>
            <h5></h5>
          </div>
        </div>
      </div>
    </Slider>
  )
}

export default Testimonial