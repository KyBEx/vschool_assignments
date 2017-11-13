import React from "react"
import {Carousel} from "react-bootstrap"

function PicSlide () {
        const carouselInstance = (
  <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://img.buzzfeed.com/buzzfeed-static/static/2016-03/18/10/enhanced/webdr11/original-31634-1458312938-4.jpg?downsize=715:*&output-format=auto&output-quality=auto" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="/assets/carousel.png" />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

}

export default Carousel
