import React from "react"
import { render as renderDOM } from "react-dom"

import '@csApp/main.scss'
import App from "@csApp/App"

renderDOM(<App />, document.getElementById('cornerstoneApp'))
