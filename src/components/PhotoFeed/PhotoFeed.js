import React, { useEffect, useState } from 'react'

import styles from './PhotoFeed.scss'
import PhotoFeedImage from "./Image";

const photosURL = (page) => new URL(`https://picsum.photos/v2/list?page=${page}&limit=10`)

const PhotoFeed = () => {
  const [photos, setPhotos] = useState(null)
  const [intervalCounter, setIntervalCounter] = useState(1)

  function fetchPhotos(oldPhotos = []) {
    if (intervalCounter < 5) {
      fetch(photosURL(intervalCounter))
        .then(res => res.json())
        .then(newPhotos => {
          setPhotos([...newPhotos, ...oldPhotos])
          setIntervalCounter(intervalCounter + 1)
        })
    }
  }

  useEffect(() => {
    if (photos === null) {
      fetchPhotos()
    }
  }, [photos])

  useEffect(() => {
    let id = setInterval(() => fetchPhotos(photos), 60 * 60 * 60 )
    return () => clearInterval(id)
  }, [photos])

  return (
    <div className={styles['PhotoFeed']}>
      <h5>Our Culture</h5>
      <h3>A Family Named CornerStone</h3>

      <div className={styles['PhotoFeed__photos']}>
        {
          photos !== null &&
          !!photos.length &&
          photos.map((image) => (
            <PhotoFeedImage
              key={image.id}
              image={image}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PhotoFeed
