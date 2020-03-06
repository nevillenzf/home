import React from 'react';
import '../Stylesheet.css';

class Tape extends React.Component {
  //Tape can be placed all around the component on every angle etc,
  //takes in the dimensions of the polaroid image component
  //tape is usually the same size
  constructor(props) {
    super(props);
    //Probably received image dimensions
    //positioning based on the type

    //Default positions
    this.topPos = -45
    this.leftPos = this.props.polaroidWidth / 2
    this.rotation = 0
    this.handleColor = this.handleColor.bind(this);
    this.handlePosition = this.handlePosition.bind(this);

    //Handle color
    this.handleColor(this.props.color)
    //Handle position
    this.handlePosition( this.props.type,
                          this.props.polaroidWidth,
                          this.props.polaroidHeight)

    this.tapeStyle = {
      width: 40,
      height: 100,
      backgroundColor : this.color,
      position: 'absolute',
      top: this.topPos,
      left: this.leftPos - 20,
      transform: this.rotation
    };
  }

  handleColor(color){
    if (color === "regular")
    {
      this.color = 'rgba(176, 165, 146, 0.5)'
    }
    else if (color === "black")
    {
      this.color = 'rgba(0, 0, 0, 0.7)'
    }
  }

  handlePosition(type, polaroidWidth, polaroidHeight){

    if (type === "bottom")
    {
      this.topPos = polaroidHeight - 45;
    }
    else if (type === "left")
    {
      this.topPos = polaroidHeight/2 - 45;
      this.leftPos = 0;
    }
    else if (type === "right")
    {
      this.topPos = polaroidHeight/2 - 45;
      this.leftPos = polaroidWidth;
    }
    else if (type === 'tl')
    {
      this.rotation = 'rotate(45deg)'
      this.leftPos = 0
    }
    else if (type === 'tr')
    {
      this.rotation = 'rotate(-45deg)'
      this.leftPos = polaroidWidth
    }
    else if (type === 'bl')
    {
      this.rotation = 'rotate(-45deg)'
      this.topPos = polaroidHeight - 45;
      this.leftPos = 0;
    }
    else if (type === 'br')
    {
      this.rotation = 'rotate(45deg)'
      this.topPos = polaroidHeight - 45;
      this.leftPos = polaroidWidth;
    }
  }

  render() {
    return (
      <div className="Tape" style={this.tapeStyle}>

      </div>
    )
  }
}

export default Tape;
