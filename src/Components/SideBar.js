import React from 'react';
import '../Stylesheet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
//import ContentHandler from './ContentHandler';
import {Nav} from 'react-bootstrap';
import store from '../index';
import resume from '../Images/resume.pdf';

class SideBar extends React.Component {

  componentDidMount(){
    window.addEventListener("keydown", this.keyDownKing);

  }

  componentWillUnmount(){
    window.addEventListener("keydown", this.keyDownKing);

  }

  render() {
    return (
    <div className="SideBarContainer">
      <div className="SideBar">
        {/* Remember to add a menu here probs <Menu or just some bootstrap shit /> */}
        <Nav variant="pills" className="flex-column" activeKey="AboutMe" onSelect={this.handleClick}>
          <Nav.Item>
            <Nav.Link eventKey="AboutMe">About Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Skills">Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Portfolio">Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Interests">Interests</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <a href= {resume} target="_blank" rel="noopener noreferrer">Resume</a>
          </Nav.Item>
        </Nav>


      </div>
      <div id="up-arrow">
        <button className="UpButton" onClick={() =>this.moveToContent()}><FontAwesomeIcon icon={faAngleDoubleUp} /></button>
      </div>
    </div>)
  }

  //Master internal function for key down events - listener god
  keyDownKing = (event) => {
    // 40 is down key
    if (event.keyCode === 38 )
    {
      event.preventDefault();
      this.moveToContent();
    }
  }

  moveToContent(){
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  }

  handleClick = (eventKey) => {
    //Updates the Redux state to reflect the current selected section
    store.dispatch({type: "CURR_SECTION", sect: eventKey});
    if (eventKey === 'Resume')
    {

    }
  }

}

export default SideBar;
