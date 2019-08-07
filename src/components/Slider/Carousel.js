import React, { useRef, createRef, useState } from 'react'

import styles from "./Carousel.scss";
import SliderCard from "./Card";
import { carouselData } from "./data";

const SLIDE_HEIGHT = 35

const Carousel = () => {
  const [carouselTopOffset, setCarouselTopOffset] = useState(0)

  function handleCarouselNavigation(multiplier) {
    setCarouselTopOffset(multiplier * SLIDE_HEIGHT)
  }

  return (
    <section className={styles['Carousel']}>
      <div className={styles['Carousel__controls']}>
        <span onClick={() => handleCarouselNavigation(0)}>*</span>
        <span onClick={() => handleCarouselNavigation(1)}>*</span>
        <span onClick={() => handleCarouselNavigation(2)}>*</span>
      </div>

      <div
        className={styles['Carousel__slides']}
      >
        <div
          className={styles['Carousel__slides--cards']}
          style={{
            top: `calc(-${carouselTopOffset}rem + 1.5rem)`
          }}
        >
          {
            carouselData.map(({ description, images }, index) => (
              <SliderCard
                key={index}
                description={description}
                images={images}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Carousel