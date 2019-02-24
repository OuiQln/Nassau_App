import React from 'react';
import styles from '../../../dist/styles/price.css'

const Price = props => {
  return (
    <div className={styles.price}>
      <div>${props.price}</div>
    </div>
  )
};

export default Price; 