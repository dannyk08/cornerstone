import React from 'react'

import styles from './Hero.scss'
const Hero = ({
  backgroundImage,
  children
}) => {
  return (
    <section
      className={styles['Hero']}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, .35), rgba(0, 0, 0, .35)), url(${backgroundImage})`
      }}
    >
      {children}
    </section>
  )
}

export default Hero
