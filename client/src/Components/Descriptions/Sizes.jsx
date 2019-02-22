import React from 'react'

const Sizes = props => {
  return (
    <div>
      <li className="dropdown-list-item" 
      onClick={() => props.selectSize(props.size)}>{props.size}</li>
    </div>
  )
}

export default Sizes;