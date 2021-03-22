import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
  render() {
const colorBoxes = this.props.colors.map(color => <ColorBox background={color} />)

    return (
      <div className="palette">
        {/* navbar */}
        <div className="palette-colors">
          {colorBoxes}
        </div>
        {/* footer */}
      </div>
    )
  }
}

export default Palette;