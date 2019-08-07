import React from 'react'

import styles from "./Card.scss";
const Card = ({
  image,
  subHeader
}) => {
  return (
    <section className={styles['Card']}>
      <div className={styles['Card__image']}>
        <img
          src={image}
          alt={subHeader}
        />
      </div>
      <p className={styles['Card__sub-header']}>{subHeader}</p>

    </section>
  )
}

export default Card