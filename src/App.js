import React, { Component, Fragment } from "react";

import styles from '@csApp/App.scss'
import {
  TextInput,
  Hero,
  HeroMessage,
  TestimonialsSection
} from "@csApp/components";

export default class App extends Component {
  render() {
    return (
      <main className={styles['cs-app']}>
        <TextInput
          placeholder={'My perfect job is...'}
        />
        <Hero
          backgroundImage='/images/banner/banner-background.jpg'
        >
          <HeroMessage>
            <Fragment>
              <h1>Realize Your Potential</h1>
              <h5>
                Cloud-based applications to recruit, train, manage,
                and connect people across your organizations.
              </h5>
            </Fragment>
          </HeroMessage>
          <TestimonialsSection />
        </Hero>
      </main>
    )
  }
}
