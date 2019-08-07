import React from 'react'
import { v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";

const iconsMap = {
  search: faSearch
}

import styles from './TextInput.scss'
const TextInput = ({
  task = null,
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
        has-icon={(task === null).toString()}
      />
      {
        task !== null && (
          <FontAwesomeIcon
            className={styles['TextInput__task--icon']}
            icon={iconsMap[task]}
          />
        )
      }
    </label>
  )
}

export default TextInput
