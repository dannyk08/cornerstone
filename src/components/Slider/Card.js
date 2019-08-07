import React from 'react'

import styles from "./Card.scss";

const Card = ({
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
    <section className={styles['Card']}>
      <div className={styles['Card__description']}>
        <h5 className={styles['Card__description-focus']}>{focus}</h5>
        <h3 className={styles['Card__description-headline']}>{headline}</h3>
        <p className={styles['Card__description-text']}>{text}</p>
      </div>
      <div className={styles['Card__images']}>
        <div className={styles['Card__images-hero']}>
          <img src={hero} />
        </div>
        <div className={styles['Card__images-panes']}>
          <img src={leftPane} />
          <img src={rightPane} />
        </div>
      </div>
    </section>
  )
}

export default Card
