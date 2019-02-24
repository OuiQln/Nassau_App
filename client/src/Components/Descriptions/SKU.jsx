import React from 'react';
import styles from '../../../dist/styles/sku.css'

const SKU = (props) => {
  return (
    <div>
      <div className={styles.sku}>SKU# {props.sku}</div>
    </div>
  )
};

export default SKU;