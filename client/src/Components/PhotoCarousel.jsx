import React from 'react'
import classnames from 'classnames';
import styles from '../../dist/styles/photoCarousel.css';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PhotoCarousel = (props) => {
    const selected = props.isSelected ? styles.indyPhotoSelected : styles.indyPhoto
    const classes = `tower${props.index} ${selected} ${styles.carouselPic}`
    return (
      <div >
        <span>
          <img className={classes} src={props.photo} 
            onClick={()=>props.photoClick(props.index)}/>
        </span>
      </div>
    )
  }
export default PhotoCarousel;

// style = {{transition: 'transform 800ms ease 0s'}} also translate

