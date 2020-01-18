import React from 'react';
import '../Stylesheet.css';
import 'react-image-lightbox/style.css';

class ContentController extends React.Component {
  //Tape can be placed all around the component on every angle etc,
  //takes in the dimensions of the polaroid image component
  //tape is usually the same size
  renderContent()
  {
    //console.log(this.props.currContent);

    if (this.props.currContent === "About Me" || this.props.currContent === "Skills")
    {
      //This holds information for both
    }

    else if (this.props.currContent === "Experience")
    {

    }
    else if (this.props.currContent === "Projects")
    {

    }
    else if (this.props.currContent === "Hobbies")
    {

    }
  }

  render() {
    return (
      <div className="contentController" >

      </div>
    )
  }
}

export default ContentController;
