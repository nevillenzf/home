import React from 'react';
import '../Stylesheet.css';
import {Button} from 'react-bootstrap';

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
                {desc}
              </div>
            )
          })
        }
        </div>
        <div className="technologies">
        {
          this.props.info.technologies.map((tech, idx) => {
            return (
              <Button className="tech"
                      key={idx}
                      variant="dark">
                {tech}
              </Button>
            )
          })
        }
        </div>
      </div>)
  }
}

export default Project;
