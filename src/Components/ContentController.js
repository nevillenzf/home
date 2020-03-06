import React from 'react';
import '../Stylesheet.css';
import 'react-image-lightbox/style.css';
import SideBar from './SideBar';

import AboutMe from './AboutMe';
import Skills from './Skills';
import Experiences from './Experiences';
import Projects from './Projects';
import Hobbies from './Hobbies';

class ContentController extends React.Component {
  //Tape can be placed all around the component on every angle etc,
  //takes in the dimensions of the polaroid image component
  //tape is usually the same size
  constructor(props)
  {
    super(props);
    this.state = {currExpPage: 0, currProjPage: 0, currHobPage: 0};
    //keep track of currContent and display information when a new content is selected

    this.renderContent = this.renderContent.bind(this);
    this.setPageNumber = this.setPageNumber.bind(this);
  }

  renderContent()
  {
    //console.log(this.props.currContent);

    if (this.props.currContent === "About Me")
    {
      return <AboutMe/>
    }
    else if (this.props.currContent === "Skills")
    {
      return <Skills/>
    }
    else if (this.props.currContent === "Experience")
    {
      return <Experiences currPage={this.state.currExpPage}
                          setPageNumber = {this.setPageNumber}/>
    }
    else if (this.props.currContent === "Projects")
    {
      return <Projects currPage={this.state.currProjPage}
                       setPageNumber = {this.setPageNumber}/>
    }
    else if (this.props.currContent === "Hobbies")
    {
      return <Hobbies currPage={this.state.currHobPage}
                      setPageNumber = {this.setPageNumber}/>
    }
  }

  setPageNumber(newPage)
  {
    if (this.props.currContent === "Experience")
    {
      console.log("Poopernickle")
      this.setState({
        currExpPage: newPage
      })
    }
    else if (this.props.currContent === "Projects")
    {
      this.setState({
        currProjPage: newPage
      })
    }
    else if (this.props.currContent === "Hobbies")
    {
      this.setState({
        currHobPage: newPage
      })
    }
  }

  render() {
    return (
      <div className="contentController" >
        <SideBar updateContent = {this.props.updateContent}
                  currContent = {this.props.currContent}/>
        <div className = "infoContainer">
          <div className = "infoContent">
            
            {this.renderContent()}


          </div>
        </div>
      </div>
    )
  }
}

export default ContentController;
