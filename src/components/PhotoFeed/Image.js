import React, { useEffect, useState } from 'react'

import styles from './Image.scss'
const Image = ({
  image: {
    author,
    download_url,
  }
}) => {
  return (
    <div className={styles['Image']}>
      <img
        src={download_url}
        alt={author}
      />
    </div>
  )
}

export default Image
