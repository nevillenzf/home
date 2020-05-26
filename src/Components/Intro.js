import React from 'react';
import PixContainer from './PixContainer';

class Intro extends React.Component {
  constructor(props) {
  super(props);
  this.state = { width: 0, height: 0 };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  this.isHoveringOverControl = this.isHoveringOverControl.bind(this);
  this.isHoveringOver = false;
  this.moveToContent = this.moveToContent.bind(this);
  this.setCurrContent = this.setCurrContent.bind(this);
  this.updateText = this.updateText.bind(this);

  this.state = {
      text: "",
      textList: ["an Engineer","a Designer","a Dreamer","Neville"],
      displayBtn: false,
    }
  }


  isHoveringOverControl = (bool) => {
    this.isHoveringOver = bool;
  }

  componentDidMount(){
    this.updateWindowDimensions(); //Call Method to set initial height and width of component
    this.updateText(0);
    window.addEventListener("resize", this.updateWindowDimensions());
    window.addEventListener("keydown", this.keyDownKing);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.updateWindowDimensions());
    window.removeEventListener("keydown", this.keyDownKing);
  }

  setCurrContent(newContent){
    this.props.updateContent(newContent);
    this.moveToContent();
  }

  render() {

    return (
      <div  className= "Intro"
            onMouseEnter={() => this.isHoveringOverControl(true)}
            onMouseLeave={() => this.isHoveringOverControl(false)}
            onWheel={(e) => this.mouseWheelKing(e)}>

            <div className= "navBar">
              <div className= "navContent" onClick={() => this.setCurrContent("About Me")}> About Me. </div>
              <div className= "navContent" onClick={() => this.setCurrContent("Skills")}> Skills. </div>
              <div className= "navContent" onClick={() => this.setCurrContent("Experience")}> Experience. </div>
              <div className= "navContent" onClick={() => this.setCurrContent("Projects")}> Projects. </div>
              <div className= "navContent" onClick={() => this.setCurrContent("Hobbies")}> Hobbies. </div>
            </div>
            <div id="pix">
              <PixContainer moveToContent={this.moveToContent}
                            text={this.state.text}
                            displayBtn={this.state.displayBtn} />
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

  dynamicTextDisplay(pos, charPos) {
    if (this.state.textList[pos][charPos] !== undefined)
    {
      this.setState({text: this.state.text + this.state.textList[pos][charPos]});
    }
  }

  updateText(pos) {
    var curr = this;
    var charPos = 0;
    curr.setState({text: ""});

    //Kick start typing process
    //Frequency is 1000/curr.state.textList[pos].length + 1
    var someTimer = setInterval(() => {
      curr.dynamicTextDisplay(pos, charPos);
      charPos++;
    }, 1000/curr.state.textList[pos].length);
    setTimeout(function () {
        clearInterval(someTimer);
        if (pos < curr.state.textList.length - 1)
        {
          //curr.setState({text: curr.state.text + "what "});
          curr.updateText(pos + 1);
        }
        else
        {
          curr.setState({displayBtn: true});
        }
    }, 2000);
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
