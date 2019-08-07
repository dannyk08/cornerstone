import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons/faCircle";

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
        <span
          className={styles['Carousel__controls-icon']}
          onClick={() => handleCarouselNavigation(0)}
          is-active={(0 * 35 === carouselTopOffset).toString()}
        >
          <FontAwesomeIcon icon={faCircle} />
        </span>
        <span
          className={styles['Carousel__controls-icon']}
          onClick={() => handleCarouselNavigation(1)}
          is-active={(1 * 35 === carouselTopOffset).toString()}
        >
          <FontAwesomeIcon icon={faCircle} />
        </span>
        <span
          className={styles['Carousel__controls-icon']}
          onClick={() => handleCarouselNavigation(2)}
          is-active={(2 * 35 === carouselTopOffset).toString()}
        >
          <FontAwesomeIcon icon={faCircle} />
        </span>
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