import React from 'react'

const Quantity = props => {
  return (
    <div>
      <li className="dropdown-list-item" 
      onClick={() => props.selectQuantity(props.number)}>{props.number}</li>
    </div>
  )
}

export default Quantity;