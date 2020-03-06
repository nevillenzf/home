import React from 'react';
import '../Stylesheet.css';
import PostItNote from './PostItNote';
import Polaroid from './Polaroid';
import Pin from './Pin';

class Experience extends React.Component {
//Created a component for the picture because might include onhover functions to interact with picture

  render() {
    return (
      <div className="projectInfo" >
        <div className="description">
        {
          this.props.info.description.map((desc, idx) => {
            return (
              <div className="desc" key={idx}>
                <Pin/>{desc}
              </div>
            )
          })
        }
        </div>
      </div>)
  }
}

export default Experience;
