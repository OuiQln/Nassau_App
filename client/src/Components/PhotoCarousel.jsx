import React from 'react'
import classnames from 'classnames';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PhotoCarousel = (props) => {
    const selected = props.isSelected ? "indyPhotoSelected" : "indyPhoto"
    const classes = `tower${props.index} ${selected} carouselPic`
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

