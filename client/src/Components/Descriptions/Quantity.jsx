import React from 'react'
import styles from '../../../dist/styles/quantity.css';

const Quantity = props => {
  return (
    <div>
      <li className={styles.dropdownListItem}
      onClick={() => props.selectQuantity(props.number)}>{props.number}</li>
    </div>
  )
}

export default Quantity;