import React from 'react'

import styles from "./SliderCard.scss";

const SliderCard = ({
  images: {
    hero,
    leftPane,
    rightPane
  } = {},
  description: {
    focus,
    headline,
    text
  } = {}
}) => {
  return (
    <section className={styles['SliderCard']}>
      <div className={styles['SliderCard__description']}>
        <h5 className={styles['SliderCard__description-focus']}>{focus}</h5>
        <h3 className={styles['SliderCard__description-headline']}>{headline}</h3>
        <p className={styles['SliderCard__description-text']}>{text}</p>
      </div>
      <div className={styles['SliderCard__images']}>
        <div className={styles['SliderCard__images-hero']}>
          <img src={hero} />
        </div>
        <div className={styles['SliderCard__images-panes']}>
          <img src={leftPane} />
          <img src={rightPane} />
        </div>
      </div>
    </section>
  )
}

export default SliderCard
