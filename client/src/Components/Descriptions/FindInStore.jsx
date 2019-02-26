import React from 'react';
import styles from '../../../dist/styles/findInStore.css'

const FindInStore = props => {
  return (
    <div>
      <div className={styles.findInStore} onClick={()=>props.toggleStore()}>
        <i className="fas fa-map-marker-alt"></i>
        <span className={styles.storeSpan} ></span>
          FIND IN STORE
      </div>
      <div>
      {props.findStore ? <img className={styles.storePic} src="./Pictures/findInStore.png"/> : null}
      </div>
    </div>
  )
}

export default FindInStore; 