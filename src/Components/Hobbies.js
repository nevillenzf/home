import React from 'react';
import '../Stylesheet.css';
import FadeIn from 'react-fade-in';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


import 'react-image-lightbox/style.css';

class Hobbies extends React.Component {


  render() {
    return (
        <div className = "infoCard">
          <div className ="backCard">
            <div className = "frontCard">
            <div className = "title">
              These are some of the technologies that I've been working with recently:
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

export default Hobbies;
