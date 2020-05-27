import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBriefcase, faUser, faTools, faTasks, faIcons } from '@fortawesome/free-solid-svg-icons';
import { ButtonGroup, Button} from 'react-bootstrap';

import store from '../index';

class SideBar extends React.Component {


  render() {
    return (
    <div className="SideBarContainer">
      <div className="SideBar">
      <ButtonGroup vertical className="sideBtnGroup">
        <Button variant="dark" size="lg"
                className={this.props.currContent === "About Me" ? "selectedBtn" : "sideBtn"}
                onClick={()=> this.props.updateContent("About Me")}>
                About me </Button>
        <Button variant="dark" size="lg"
                className={this.props.currContent === "Skills" ? "selectedBtn" : "sideBtn"}
                onClick={() => this.props.updateContent("Skills")}>
                Skills </Button>
        <Button variant="dark" size="lg"
                className={this.props.currContent === "Experience" ? "selectedBtn" : "sideBtn"}
                onClick={() => this.props.updateContent("Experience")}>
                Experience </Button>
        <Button variant="dark" size="lg"
                className={this.props.currContent === "Projects" ? "selectedBtn" : "sideBtn"}
                onClick={() => this.props.updateContent("Projects")}>
                Projects </Button>
        <Button variant="dark" size="lg"
                className={this.props.currContent === "Hobbies" ? "selectedBtn" : "sideBtn"}
                onClick={() => this.props.updateContent("Hobbies")}>
                Leisure </Button>
      </ButtonGroup>
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
