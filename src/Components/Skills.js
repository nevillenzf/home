import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


import 'react-image-lightbox/style.css';

class Skills extends React.Component {


  render() {
    return (
        <div className = "infoCard">
          <div className ="backCard">
            <div className = "frontCard">
            <div className = "title">
              These are some of the technologies that I've been working with recently:
            </div>
            <div className = "technologies">
              <div className= "column-1">
                <div> Languages </div>
                <div><FontAwesomeIcon icon= {faChevronRight} /> C# </div>
                <div><FontAwesomeIcon icon= {faChevronRight} /> HTML & CSS </div>
                <div><FontAwesomeIcon icon= {faChevronRight} /> Java </div>
                <div><FontAwesomeIcon icon= {faChevronRight} /> Javascript </div>
                <div><FontAwesomeIcon icon= {faChevronRight} /> Python </div>
                <div><FontAwesomeIcon icon= {faChevronRight} /> SQL </div>
              </div>

              <div className = "column-2">
                <div> Technologies </div>
                <div><FontAwesomeIcon icon= {faChevronRight} /> Docker </div>
                <div><FontAwesomeIcon icon= {faChevronRight} /> Express.js </div>
                <div><FontAwesomeIcon icon= {faChevronRight} /> Flask </div>
                <div><FontAwesomeIcon icon= {faChevronRight} /> Node.js </div>
                <div><FontAwesomeIcon icon= {faChevronRight} /> React.js </div>
                <div><FontAwesomeIcon icon= {faChevronRight} /> Socket.io </div>
                <div><FontAwesomeIcon icon= {faChevronRight} /> Tensorflow (Keras) </div>
                <div><FontAwesomeIcon icon= {faChevronRight} /> Unity3D </div>
              </div>
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

export default Skills;
