import React from 'react';
import '../Stylesheet.css';
import {Modal} from 'react-bootstrap';
import Project from './Project';
import Experience from './Experience';

class InfoModal extends React.Component {
//Created a component for the picture because might include onhover functions to interact with picture
  constructor(props){
    super(props);
    //Check what type is it
    this.type = "none"
    if (this.props.projectInfo)
    {
      //Project(title, period, technologies, period, githubLink, description)
      this.type = "Project"
    }
    else if (this.props.experienceInfo)
    {
      //Experience(title, company, period, githubLink, description)
      this.type = "Experience"
    }
  }

  renderBody()
  {
    if (this.type === "Project")
    {
      return (
        <div>
          <Project info={this.props.projectInfo}/>
        </div>
      )
    }
    else if (this.type === "Experience")
    {
      return (
        <div>
          <Experience info={this.props.experienceInfo}/>
        </div>
      )
    }
  }

  render() {
    return (
      <div id="infoModal" >
        <Modal
            show={this.props.show}
            onHide={this.props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            className="modalWrapper"
            centered >
          <Modal.Header closeButton>
             <Modal.Title id="example-custom-modal-styling-title">
              <div className="basicInfo">
                 <div className="infoTitle">{this.props.basicInfo.title}</div>
                 <div className="infoPeriod">{this.props.basicInfo.period}</div>
              </div>
             </Modal.Title>
           </Modal.Header>
          <Modal.Body>
            {this.renderBody()}
          </Modal.Body>
        </Modal>
      </div>)
  }
}

export default InfoModal;
