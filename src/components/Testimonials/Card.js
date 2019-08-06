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
      <img src={profileImage} alt={`${name}, ${occupation} testimonial image profile.`} />
      <h3>{header}</h3>
      <p>{name}, {occupation}</p>
    </section>
  )
}

export default Card