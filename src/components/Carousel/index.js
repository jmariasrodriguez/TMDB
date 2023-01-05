import React from 'react'
import Carousel from 'react-material-ui-carousel'
import CardCarouel from './CardCarouel'


const SectionCarousel = ({carouselShows, genres}) => {
      
    return (
        <Carousel sx={{ mb: "2.5%", height: "370px" , paddingRight:"200px", paddingLeft:"200px"}}>
            {
                carouselShows.map( (show, index) => <CardCarouel key={index} show={show} genres={genres} /> )
            }
        </Carousel>
    )
}

export default SectionCarousel
