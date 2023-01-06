import React from 'react'
import CardCarouel from './CardCarouel'
import { CarouselContainer } from './styleCarousel'


const SectionCarousel = ({carouselShows, genres}) => {
      
    return (
        <CarouselContainer >
            {
                carouselShows.map( (show, index) => <CardCarouel key={index} show={show} genres={genres} /> )
            }
        </CarouselContainer>
    )
}

export default SectionCarousel
