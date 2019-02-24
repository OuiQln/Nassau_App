import React from 'react';
import styles from '../../../dist/styles/sizes.css';


const Sizes = props => {
  return (
    <div>
      <li className={styles.dropdownListItem} 
      onClick={() => props.selectSize(props.size)}>{props.size}</li>
    </div>
  )
}

export default Sizes;