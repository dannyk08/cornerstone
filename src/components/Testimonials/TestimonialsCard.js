import React from 'react'

import styles from "./TestimonialsCard.scss";

const TestimonialsCard = ({
  author: {
    name,
    occupation,
    profileImage
  },
  header,
  reverseOrder = false
}) => {
  return (
    <section
      className={styles['TestimonialsCard']}
      reverse-order={(reverseOrder).toString()}
    >
      <div className={styles['TestimonialsCard__image']}>
        <img
          src={profileImage}
          alt={`${name}, ${occupation} testimonial image profile.`}
        />
      </div>

      <div className={styles['TestimonialsCard__testimonial']}>
        <h4 className={styles['TestimonialsCard__testimonial-text']}>{header}</h4>
        <p className={styles['TestimonialsCard__testimonial-author']}>{name}, {occupation}</p>
        <h4 className={styles['TestimonialsCard__testimonial-quote']}>"</h4>
      </div>

    </section>
  )
}

export default TestimonialsCard
