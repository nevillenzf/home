import React from 'react';
import '../Stylesheet.css';
import pie from '../Images/pie.jpeg';
class PixContainer extends React.Component {
//Created a component for the picture because might include onhover functions to interact with picture
  render() {
    return (
      <div className="PixContainer" >
        <img src= {pie} alt="random fam" className="Pix"/>
      </div>)
  }
}

export default PixContainer;
