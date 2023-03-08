import React from 'react'

import styles from "./BrandTestimonialsCard.scss";
const BrandTestimonialsCard = ({
  image,
  subHeader
}) => {
  return (
    <section className={styles['BrandTestimonialsCard']}>
      <div className={styles['BrandTestimonialsCard__image']}>
        <img
          src={image}
          alt={subHeader}
        />
      </div>
      <p className={styles['BrandTestimonialsCard__sub-header']}>{subHeader}</p>

    </section>
  )
}

export default BrandTestimonialsCard
