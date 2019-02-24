import React from 'react';

const Materials = props => {
  return (
    <div>
      <ul>
        <li>{props.material}</li>
        <li>{props.care}</li>
      </ul>
    </div>
  )
}

export default Materials; 