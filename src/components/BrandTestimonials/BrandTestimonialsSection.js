import React from 'react'

import styles from "./BrandTestimonialsSection.scss";
import BrandTestimonialsCard from "./BrandTestimonialsCard";
import { testimonials } from "./data";

const BrandTestimonialsSection = () => {
  return (
    <section className={styles['BrandTestimonialsSection']}>
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

export default BrandTestimonialsSection
