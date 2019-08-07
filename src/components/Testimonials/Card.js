import React from 'react'

import styles from "./Card.scss";
const Card = ({
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
      className={styles['Card']}
      reverse-order={(reverseOrder).toString()}
    >
      <div className={styles['Card__image']}>
        <img
          src={profileImage}
          alt={`${name}, ${occupation} testimonial image profile.`}
        />
      </div>

      <div className={styles['Card__testimonial']}>
        <h4 className={styles['Card__testimonial-text']}>{header}</h4>
        <p className={styles['Card__testimonial-author']}>{name}, {occupation}</p>
        <h4 className={styles['Card__testimonial-quote']}>"</h4>
      </div>

    </section>
  )
}

export default Card