import React from 'react';
import PixContainer from './PixContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import '../Stylesheet.css';

class Intro extends React.Component {
  constructor(props) {
  super(props);
  this.state = { width: 0, height: 0 };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  this.isHoveringOverControl = this.isHoveringOverControl.bind(this);
  this.isHoveringOver = false;
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
              <PixContainer/>
            </div>

            <div id="intro-text">
              <p>Hi, I'm Neville </p>
              <p>I am a senior at the <a id="wisc-link" href="https://www.wisc.edu"> University of Wisconsin-Madison </a>
              seeking software engineering/ development opportunities for Spring 2020</p>
            </div>

            <div id="down-arrow">
              <button className="Button" onClick={() =>this.moveToContent()}><FontAwesomeIcon icon={faAngleDoubleDown} /></button>
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
