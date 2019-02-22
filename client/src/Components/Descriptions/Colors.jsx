import React from 'react';
import ColorBox from './ColorBox.jsx'

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
    console.log (this.state)
  }

  render () {
    return (
      <div>
        <span className="colorName">COLOR:</span><span className="colorTag">{this.state.colorNames[this.state.colorIndex]}</span>
          <div className="Colors">
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