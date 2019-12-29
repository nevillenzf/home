import React from 'react';
import PixContainer from './PixContainer';

import '../Stylesheet.css';

class Intro extends React.Component {
  constructor(props) {
  super(props);
  this.state = { width: 0, height: 0 };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  this.isHoveringOverControl = this.isHoveringOverControl.bind(this);
  this.isHoveringOver = false;
  this.moveToContent = this.moveToContent.bind(this);
  }


  isHoveringOverControl = (bool) => {
    this.isHoveringOver = bool;
  }

  componentDidMount(){
    this.updateWindowDimensions(); //Call Method to set initial height and width of component
    window.addEventListener("resize", this.updateWindowDimensions());
    window.addEventListener("keydown", this.keyDownKing);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.updateWindowDimensions());
    window.removeEventListener("keydown", this.keyDownKing);
  }

  render() {
    return (
      <div  className="Intro"
            onMouseEnter={() => this.isHoveringOverControl(true)}
            onMouseLeave={() => this.isHoveringOverControl(false)}
            onWheel={(e) => this.mouseWheelKing(e)}>

            <div id="pix">
              <PixContainer moveToContent={this.moveToContent}/>
            </div>

      </div>)
  }

  //Master internal function for key down events - listener god
  keyDownKing = (event) => {
    // 40 is down key
    if (event.keyCode === 40 )
    {
      event.preventDefault();
      this.moveToContent();
    }
  }

  //Mouse wheel king
  mouseWheelKing = (event) => {
    // deltaY is vertical movement
    // deltaX is horizontal movement - positive (down) / negative (up)
    if (event.deltaY > 2)
    {
      //DISABLED MOUSE WHEEL
      //event.preventDefault();
      this.moveToContent();
    }
  }

  //Scrolls to the Content Component
  //Ways to trigger this
  // *Down key when component is in view
  // *Mouse scroll down when component is in view
  // *Click on the button at the bottom of the component
  moveToContent(){
    //Prep for scrolling
    if (this.isHoveringOver === true)
    {
      window.scrollTo({
        top: this.state.height,
        behavior: "smooth",
      });
    }
  }


  //Just makes sure that the component is consistent with the browser window
  updateWindowDimensions(){
    this.setState({height: window.innerHeight, width: window.innerWidth});
  }
}

export default Intro;
