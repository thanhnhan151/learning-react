import React from "react"
import styles from "./styles.module.css"

export function UserUsername(props) {
  return (
    <React.Fragment>
      <b className={styles.username}>Username: </b>
      <span>{props.username}</span>
    </React.Fragment>
  )
}