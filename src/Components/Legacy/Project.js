import React from 'react';
import '../Stylesheet.css';
import PostItNote from './PostItNote';
import Polaroid from './Polaroid';
import Pin from './Pin';

class Project extends React.Component {
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
        <div className="infoContent">
          <PostItNote height={320}
                    width={320}
                    tape = "top"
                    title = "Technologies"
                    text = {this.props.info.technologies}
                    tilt = {-10}
                     />
           <PostItNote height={320}
                     width={320}
                     tape = "top"
                     text = "Find out more!"
                     fontSize = {36}
                     color = "rgba(235, 164, 52,1)"
                     onClick = {()=> window.location = this.props.info.githubLink}
                     tilt = {3}
                      />
        </div>
      </div>)
  }
}

export default Project;
