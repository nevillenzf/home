import React from 'react';
import '../Stylesheet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUser, faTools, faTasks, faIcons } from '@fortawesome/free-solid-svg-icons';

import store from '../index';

class SideBar extends React.Component {


  render() {
    return (
    <div className="SideBarContainer">
      <div className="SideBar">

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
