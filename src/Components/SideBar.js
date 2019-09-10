import React from 'react';
import '../Stylesheet.css';
//import ContentHandler from './ContentHandler';
import {Nav} from 'react-bootstrap';

class SideBar extends React.Component {

  componentDidMount(){

  }

  componentWillUnmount(){

  }

  render() {
    return (
      <div className="SideBar">
        {/* Remember to add a menu here probs <Menu or just some bootstrap shit /> */}
        <Nav variant="pills" className="flex-column" activeKey="AboutMe" onSelect={this.handleClick}>
          <Nav.Item>
            <Nav.Link eventKey="AboutMe">About Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="SomethingElse">SomethingElse</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>)
  }
  handleClick = (eventKey) => {
    console.log(eventKey);
    //Updates the Redux state to reflect the current selected section
    
  }
}

export default SideBar;
