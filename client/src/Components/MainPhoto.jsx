import React from 'react'

const MainPhoto = (props) => {
    return (
      <div id="mainPhotoContainer">
        {/* <figure onMouseMove={props.handleMouseMove} > */}
          <img className="photoCarousel" id="mainPhoto"  src={props.displayPhoto}/>
        {/* </figure> */}
      </div>
    )
  };
export default MainPhoto;

// style={`url(${props.displayPhoto}) ${props.backgroundPosition}`}