import React from 'react';
import '../Stylesheet.css';
import ContentHandler from './ContentHandler';
class ContentWrapper extends React.Component {
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
      <div className="Content">
        {/* Remember to add a menu here probs <Menu or just some bootstrap shit /> */}
        <ContentHandler />
      </div>)
  }

  //Just makes sure that the component is consistent with the browser window
  updateWindowDimensions(){
    this.setState({height: window.innerHeight, width: window.innerWidth});
  }
}

export default ContentWrapper;
