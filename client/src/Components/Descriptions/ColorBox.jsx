import React from 'react';

const ColorBox = props => {
  const selectedColor = props.isSelected ? "selectedColor" : null
  const classes = `${selectedColor} ColorRectangle`
  return (
    <div className={classes} 
    style={{backgroundColor: `#${props.color}`}}
    onClick={()=> props.colorClick(props.index)}
    />
  )
};

export default ColorBox; 