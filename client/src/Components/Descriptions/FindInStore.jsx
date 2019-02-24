import React from 'react';
import styles from '../../../dist/styles/findInStore.css'

const FindInStore = props => {
  return (
    <div className={styles.findInStore}>
    <i className="fas fa-map-marker-alt"></i>
    <span className={styles.storeSpan}></span>
      FIND IN STORE
    </div>
  )
}

export default FindInStore; 