import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons/faPlayCircle";

import styles from '@csApp/App.scss'
import {
  TextInput,
  Hero,
  HeroMessage,
  TestimonialsSection,
  BrandTestimonialsSection,
  SliderCarousel,
  PhotoFeed
} from "@csApp/components";

export default class App extends Component {
  render() {
    return (
      <main className={styles['cs-app']}>
        <TextInput
          placeholder={'My perfect job is...'}
          task='search'
        />
        <Hero
          backgroundImage='/images/banner/banner-background.jpg'
        >
          <HeroMessage>
            <Fragment>
              <h1>Realize Your P<span><FontAwesomeIcon icon={faPlayCircle} /></span>tential</h1>
              <h5>
                Cloud-based applications to recruit, train, manage,
                and connect people across your organizations.
              </h5>
            </Fragment>
          </HeroMessage>
          <TestimonialsSection />
        </Hero>
        <BrandTestimonialsSection />
        <SliderCarousel />
        <PhotoFeed />
      </main>
    )
  }
}
