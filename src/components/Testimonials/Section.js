import React from 'react'

import styles from "./Section.scss";
import TestimonialsCard from "./Card";
import { testimonials } from "./data";
const Section = () => {
  return (
    <section className={styles['Section']}>
      {
        testimonials.map(({ author, header }, index) => (
          <TestimonialsCard
            key={index}
            author={author}
            header={header}
            reverseOrder={index % 2 !== 0}
          />
        ))
      }
    </section>
  )
}

export default Section