import React from 'react';
import '../Stylesheet.css';
import PostItNote from './PostItNote';
import Projects from './Projects';
import Experiences from './Experiences';
import AboutMe from './AboutMe';
import 'react-image-lightbox/style.css';

class Corkboard extends React.Component {
  //Tape can be placed all around the component on every angle etc,
  //takes in the dimensions of the polaroid image component
  //tape is usually the same size
  renderContent()
  {
    //console.log(this.props.currContent);

    if (this.props.currContent === "About Me" || this.props.currContent === "Skills")
    {
      //This holds information for both
      return (<AboutMe content = {this.props.currContent}/>)
    }

    else if (this.props.currContent === "Experience")
    {
      return (
        <Experiences />
      )
    }
    else if (this.props.currContent === "Projects")
    {
      return(
        <Projects />
      )
    }
    else if (this.props.currContent === "Hobbies")
    {

    }
  }

  render() {
    return (
      <div className="Corkboard" >
        <div className="corkboardMenu">
        <PostItNote height={320}
                    width={320}
                    tape = "tl tr bl br"
                    type = "menu"
                    title = "Content"
                    text = {["About Me", "Skills", "Experience", "Projects", "Hobbies"]}
                    currContent = {this.props.currContent}
                    tilt = {-10}
                    updateContent = {this.props.updateContent}
                   />
         <PostItNote height={320}
                     width={320}
                     tape = "top black"
                     title = "To Do List"
                     text = {["Get a Job"]}
                     color = "rgba(248, 202, 250, 1)"
                     tilt = {5}
                    />
        </div>
        {this.renderContent()}

      </div>
    )
  }
}

export default Corkboard;
