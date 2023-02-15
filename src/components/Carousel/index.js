import React from 'react'
import CustomCarouselCard from './CustomCarouselCard'
import { CarouselContainer } from './styleCarousel'


const SectionCarousel = ({items}) => {
      
    return (
        <CarouselContainer >
            {
                items.map( (item, index) => <CustomCarouselCard key={index} item={item}  /> )
            }
        </CarouselContainer>
    )
}

export default SectionCarousel
