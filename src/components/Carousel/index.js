import React from 'react'
import Carousel from 'react-material-ui-carousel'
import CardCarouel from './CardCarouel'


const SectionCarousel = ({carouselShows, genres}) => {
      
    return (
        <Carousel sx={{ margin:"auto", mb: "1.5%", mt:"1%", height: "370px", maxWidth: "1200px"}}>
            {
                carouselShows.map( (show, index) => <CardCarouel key={index} show={show} genres={genres} /> )
            }
        </Carousel>
    )
}

export default SectionCarousel
