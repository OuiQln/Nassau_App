import React from 'react';

const Details = props => {
  return (
    <div>
      <ul>
        {props.details.map ((detail, i) => ( <li detail={detail} key={i}>{detail}</li>))}
      </ul>
    </div>
  )
}

export default Details; 