import React from 'react'
import styles from '../../dist/styles/mainPhoto.css';

const MainPhoto = (props) => {
    return (
      <div className={styles.mainPhotoContainer}>
        {/* <figure onMouseMove={props.handleMouseMove} > */}
          <img className={styles.mainPhoto}  src={props.displayPhoto}/>
        {/* </figure> */}
      </div>
    )
  };
export default MainPhoto;

// style={`url(${props.displayPhoto}) ${props.backgroundPosition}`}