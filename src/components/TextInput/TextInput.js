import React, { useState } from 'react'
import { v4 } from "uuid";

import styles from './TextInput.scss'
const TextInput = ({
  // TODO: [should] define what the input icon is
  // task = null, 

  name,
  id = v4(),
  type = 'text',
  placeholder,
  value,
  handleChange
}) => {
  return (
    <label
      className={styles['TextInput']}
      htmlFor={id}
    >
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        type={type}
      />
    </label>
  )
}

export default TextInput
