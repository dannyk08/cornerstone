import React from 'react'

import styles from "./TestimonialSection.scss";
import TestimonialsCard from "./TestimonialsCard";
import { testimonials } from "./data";

const TestimonialSection = () => {
  return (
    <section className={styles['TestimonialSection']}>
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

export default TestimonialSection
