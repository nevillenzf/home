import React from 'react';
import '../Stylesheet.css';
import AboutMe from './AboutMe';
import PortfolioTab from './PortfolioTab';
import ResumeTab from './ResumeTab';
import InterestTab from './InterestTab';
import {connect} from 'react-redux';

class ContentHandler extends React.Component {
  constructor(props) {
  super(props);
  this.renderContent = this.renderContent.bind(this);
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
    if (this.props.currSection === "AboutMe")
    {
        return (
          <div>
            <AboutMe />
          </div>
        )
    }
    else if (this.props.currSection === "Portfolio")
    {
      return (
        <div>
          <PortfolioTab />
        </div>
      )
    }
    else if (this.props.currSection === "Skills")
    {
      return (
        <div>
          <AboutMe />
        </div>
      )
    }
    else if (this.props.currSection === "Interests")
    {
      return (
        <div>
          <InterestTab/>
        </div>
      )
    }
    else if (this.props.currSection === "Resume")
    {
      return (
        <div>
          <ResumeTab/>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    currSection: state.currSection,
  }
}

ContentHandler = connect(mapStateToProps)(ContentHandler);

export default ContentHandler;
