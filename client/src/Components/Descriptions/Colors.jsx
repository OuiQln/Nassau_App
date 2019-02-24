import React from 'react';
import ColorBox from './ColorBox.jsx'
import styles from '../../../dist/styles/colors.css'

class Colors extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      colorNames: this.props.colorNames,
      colorIndex: 0
    }
    this.colorClick = this.colorClick.bind(this);
  }

  colorClick(index) {
    this.setState({
      colorIndex: index,
    })
  }

  render () {
    return (
      <div>
        <span className={styles.colorName}>COLOR:</span><span className={styles.colorTag}>{this.state.colorNames[this.state.colorIndex]}</span>
          <div className={styles.colors}>
            {this.props.colors.map((color, i) => (
              <ColorBox color={color} index={i} key={i} colorClick={this.colorClick}
              isSelected={this.state.colorIndex === i}/>
            ))}
          </div>
      </div>
    )
  }
};

export default Colors; 