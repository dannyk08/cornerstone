import React from 'react'

import styles from "./Carousel.scss";
import SliderCard from "./Card";
import { carouselData } from "./data";

const Carousel = () => {
  return (
    <section className={styles['Carousel']}>
      <div className={styles['Carousel__controls']}>
        <span>*</span>
        <span>*</span>
        <span>*</span>
      </div>

      {/* {
        carouselData.map(({ description }, index) => (
         <SliderCard
            key={index}
            description={description}
            images={images}
          />
        ))
      } */}
      <div className={styles['Carousel__slides']}>
        <SliderCard
          description={carouselData[0].description}
          images={carouselData[0].images}
        />
      </div>
    </section>
  )
}

export default Carousel