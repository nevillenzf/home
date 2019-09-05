import React from 'react';
import './Stylesheet.css';

class Intro extends React.Component {
  constructor(props) {
  super(props);
  this.state = { width: 0, height: 0 };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount(){
    this.updateWindowDimensions(); //Call Method to set initial height and width of component
    window.addEventListener("resize", this.updateWindowDimensions());
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.updateWindowDimensions());
  }

  render() {
    return (
      <div className="Intro" >
      Hi, I'm Neville
      </div>)
  }

  updateWindowDimensions(){
    this.setState({height: window.innerHeight, width: window.innerWidth});
  }
}

export default Intro;
