

import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { gallerImages } from './galleryImages';

const MasonryImageGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}>
        <Masonry gutter='1rem'>
            {
                gallerImages.map((item, index) => (
                    <img src={item} alt="" key={index}
                        className="masonry__img"
                        style={{
                            'width' : '100%',
                            'display': 'block',
                            'borderRadius': '10px'
                        }}
                    />
                ))
            }
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImageGallery