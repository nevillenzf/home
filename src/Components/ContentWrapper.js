import React from 'react';
import '../Stylesheet.css';
import Corkboard from './Corkboard';

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
      <div className="contentWrapper">
        <Corkboard updateContent={this.props.updateContent} currContent={this.props.currContent}/>
      </div>)
  }

  //Just makes sure that the component is consistent with the browser window
  updateWindowDimensions(){
    this.setState({height: window.innerHeight, width: window.innerWidth});
  }
}

export default ContentWrapper;
