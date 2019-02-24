import React from 'react';
import styles from '../../../dist/styles/colorBox.css'

const ColorBox = props => {
  const selectedColor = props.isSelected ? styles.selectedColor : null
  const classes = `${selectedColor} ${styles.colorRectangle}`
  return (
    <div className={classes} 
    style={{backgroundColor: `#${props.color}`}}
    onClick={()=> props.colorClick(props.index)}
    />
  )
};

export default ColorBox; 