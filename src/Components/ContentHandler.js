import React from 'react';
import '../Stylesheet.css';
import AboutMe from './AboutMe';

class ContentHandler extends React.Component {
  constructor(props) {
  super(props);
  this.renderContent = this.renderContent.bind(this);
  this.currSection = "AboutMe";
  }

//Created a component for the picture because might include onhover functions to interact with picture
  render() {
    return (
      <div className="Content" >
        {/* Selective rendering based off selection in menu - could probably use redux for this */}
        {this.renderContent()}
      </div>)
  }

  renderContent() {
    if (this.currSection === "AboutMe")
    {
        return (
          <div>
            <AboutMe />
          </div>
        )
    }
    else if (this.currSection === "SomethingElse")
    {
      return (
        <div>
          Lorem ipsum sum...
        </div>
      )
    }
  }
}

export default ContentHandler;
