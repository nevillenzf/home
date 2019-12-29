import React from 'react';
import '../Stylesheet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
//import portrait from '../Images/portrait-1.jpg';

class PixContainer extends React.Component {
//Created a component for the picture because might include onhover functions to interact with picture
  render() {
    return (
      <div className="PixContainer" >
        <div id="down-arrow">
          <button className="arrowBtn" onClick={() =>this.props.moveToContent()}>
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          </button>
        </div>
      </div>
    )
  }
}

export default PixContainer;
