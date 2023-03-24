

import React from 'react'
import '../services/services-card.css'

const ServicesCard = ({item}) => {

    const {imgUrl, title, description } = item

  return (
    <div className='service__item'>
        <div className="service__img">
            <img src={imgUrl} alt="" />
        </div>
        <h5>{title}</h5>
        <p>{description}</p>
    </div>
  )
}

export default ServicesCard