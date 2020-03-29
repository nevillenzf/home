import React from 'react';
import { Image } from 'react-bootstrap';

import 'react-image-lightbox/style.css';

class AboutMe extends React.Component {


  render() {
    return (
        <div className = "infoCard">
          <div className ="backCard">
            <div className = "frontCard">
              <div className="portraitContainer"><Image src="portrait-1.jpg" rounded className="portrait"/></div>
              <div className = "self-intro-1"> Hey, I'm Neville! I'm a Senior at the University of Wisconsin-Madison
                  studying Computer Sciences and am <b>actively looking for opportunities </b>!
              </div>
              <div className = "self-intro-2"> I'm a creative that loves new technologies and am constantly trying
               to better myself. I am interested in <b>Full time Full-Stack opportunities </b> starting
               <b> Summer 2020 </b> when I graduate!
              </div>
            </div>
          </div>
        </div>
    )
  }

  componentDidMount()
  {

  }

}

export default AboutMe;
