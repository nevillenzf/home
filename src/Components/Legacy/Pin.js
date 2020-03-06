import React from 'react';
import '../Stylesheet.css';

class Pin extends React.Component {
  //Pin can be placed all around the component on every angle etc,
  //takes in the dimensions of the polaroid image component
  //Pin is usually the same size
  constructor(props) {
    super(props);
    //Probably received image dimensions
    //positioning based on the type

    //Default positions
    this.topPos = 0
    this.leftPos = this.props.polaroidWidth / 2 - 15
    this.rotation = 0
    this.handleColor = this.handleColor.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
    this.position = 'absolute'

    //Handle pin color
    this.handleColor(this.props.color)
    //Handle position
    this.handlePosition( this.props.type,
                          this.props.polaroidWidth,
                          this.props.polaroidHeight)
    //determine if absolute or relative
    if (!this.props.polaroidWidth && !this.props.polaroidHeight)
    {
      this.position = 'relative';
    }
    this.pinStyle = {
      width: 30,
      minWidth: 30,
      height: 30,
      backgroundColor : this.color,
      position: this.position,
      top: this.topPos,
      left: this.leftPos,
      transform: this.rotation,
      borderRadius: '50%',
      boxShadow: '0px 3px  rgba(0,0,0,0.6)',
      zIndex: 2,

    };

    this.innerPinStyle = {
      width: 25,
      height: 25,
      backgroundColor : this.color,
      position: 'relative',
      top: -2,
      left: 2.5,
      transform: this.rotation,
      filter: 'brightness(85%)',
      borderRadius: '50%',
      boxShadow: '0px 5px  rgba(0,0,0,0.6)',

    };
  }

  handleColor(color){
    if (color)
    {
      if (color.length > 0)
      {
        this.color = color
      }
      else this.color = 'rgba(240, 74, 62, 1)';
    }
    else this.color = 'rgba(240, 74, 62, 1)'
  }

  handlePosition(type, polaroidWidth, polaroidHeight){

    if (type === "bottom")
    {
      this.topPos = polaroidHeight - 30;
    }
    else if (type === "left")
    {
      this.topPos = polaroidHeight/2 - 30;
      this.leftPos = 0;
    }
    else if (type === "right")
    {
      this.topPos = polaroidHeight/2 - 30;
      this.leftPos = polaroidWidth - 30;
    }
    else if (type === 'tl')
    {
      this.leftPos = 0
    }
    else if (type === 'tr')
    {
      this.leftPos = polaroidWidth - 30
    }
    else if (type === 'bl')
    {
      this.topPos = polaroidHeight - 30;
      this.leftPos = 0;
    }
    else if (type === 'br')
    {
      this.topPos = polaroidHeight - 30;
      this.leftPos = polaroidWidth - 30;
    }
  }

  render() {
    return (
      <div className="Pin" style={this.pinStyle}>
        <div className = "innerPin" style={this.innerPinStyle}/>
      </div>
    )
  }
}

export default Pin;
