import React from 'react'

import styles from './Message.scss'
const HeroMessage = ({
  children
}) => {
  return (
    <header className={styles['HeroMessage']}>
      {children}
    </header>
  )
}

export default HeroMessage
