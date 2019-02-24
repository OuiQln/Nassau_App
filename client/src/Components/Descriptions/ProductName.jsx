import React from 'react';
import styles from '../../../dist/styles/productName.css'

const ProductName = (props) => {
    return (
      <div className={styles.productName}>
        {props.productName}
      </div>
    )
  };
export default ProductName; 