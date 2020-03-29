import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
//import ContentHandler from './ContentHandler';
import {Col} from 'react-bootstrap';
import store from '../index';

class SocialBar extends React.Component {

  componentDidMount(){
    window.addEventListener("keydown", this.keyDownKing);

  }

  componentWillUnmount(){
    window.addEventListener("keydown", this.keyDownKing);

  }

  render() {
    return (
    <div className="SocialBarContainer">

    <Col >
      <div className="SocialBar">
          <button className="socialBtn" onClick={() => window.location.href='https://github.com/nevillenzf'}><FontAwesomeIcon icon={faGithub} /></button>
          <button className="socialBtn" onClick={() => window.location.href='https://linkedin.com/in/nevillenzf'}> <FontAwesomeIcon icon={faLinkedin} /> </button>
          <button className="socialBtn" onClick={() => window.location.href='https://instagram.com/nevillenzf'}> <FontAwesomeIcon icon={faInstagram} /> </button>
          <button className="socialBtn" onClick={() => window.location.href='https://facebook.com/nevillenzf'}> <FontAwesomeIcon icon={faFacebook} /> </button>

        {/* Vertical line for styling purposes*/}
      </div>
    <div className="lineContainer">
      <div className="vertLine"/>
    </div>
    </Col>

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

export default SocialBar;
