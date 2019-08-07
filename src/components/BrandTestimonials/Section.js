import React from 'react'

import styles from "./Section.scss";
import BrandTestimonialsCard from "./Card";
import { testimonials } from "./data";
const Section = () => {
  return (
    <section className={styles['Section']}>
      {
        testimonials.map(({ subHeader, brand }, index) => (
          <BrandTestimonialsCard
            key={index}
            image={brand.image}
            subHeader={subHeader}
          />
        ))
      }
    </section>
  )
}

export default Section