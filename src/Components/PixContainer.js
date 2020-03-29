import React from 'react';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import FadeIn from 'react-fade-in';
//import portrait from '../Images/portrait-1.jpg';

class PixContainer extends React.Component {
//Created a component for the picture because might include onhover functions to interact with picture

  renderName()
  {
    return (
      <div>
        Hey, I'm {this.props.text}.
      </div>
    )
  }
  renderBtn() {
    if (this.props.displayBtn)
    {
      return (
        <FadeIn>
          <a  href="/resume.pdf"
              target="_blank">

              <Button className = "resumeButton"
                  variant="dark"
                  size="lg">
                  Get My Resume
              </Button>
          </a>
        </FadeIn>
      )
    }
  }

  render() {
    return (
      <div className="PixContainer" >
        <div className = "introContent">
          <div className = "introduction">{this.renderName()}</div>
          <div className ="btnWrapper">{this.renderBtn()}</div>
        </div>
        <div id="down-arrow">
          <button className="arrowBtn" onClick={() =>this.props.moveToContent()}>
            <FontAwesomeIcon icon={faAngleDoubleDown} size="lg" />
          </button>
        </div>
      </div>
    )
  }

  componentDidMount()
  {

  }
}

export default PixContainer;
