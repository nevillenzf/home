import React from 'react';
import '../Stylesheet.css';
import FadeIn from 'react-fade-in';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faSquare as solidSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare as regSquare } from '@fortawesome/free-regular-svg-icons';
import update from 'immutability-helper';

import 'react-image-lightbox/style.css';

class Experiences extends React.Component {

  constructor(props) {
    super(props);
    this.state = {pageList: [false, false]};
    //Set the current page to this.props.currPage
    this.experiences = [{ company: "Buildout", 
                          position: "Software Engineering Intern", 
                          description: ["Implemented Tensorflow through the Keras Python framework to create \
                          an Image Recognition Machine Learning model that had a 98% accuracy when \
                          predicting 98% of the time.",
                          "Deployed a Flask server in production through AWS ECS that hosts the trained model \
                          and makes predictions based on received images via Celery and Sidekiq cron jobs.",
                          "Developed a native Image Editor app within the Buildout app using Fabric js, React and\
                           Ruby on Rails that lives within Bootstrap 3 Modal to allow for in-app image enhancement/ editing.",
                          "Developed a solid understanding of Amazon Cloud Service, Docker, Git, Agile(Scrum) and their role in the workflow of a software engineer."]}
                        ,{ company: "Wisconsin Computational Lab (WICIL)",
                           position: "Front End Engineer",
                           description: ["Developing a Graphical User Interface (GUI) for a MEG \
                           research project using Reactjs and Fabricjs.",
                           "Users can utilize this GUI to easily construct the memory model \
                           for architecture simulation to facilitate the debug and analysis processes."]

                        }];
    //keep track of currContent and display information when a new content is selected
    this.renderContent = this.renderContent.bind(this);
  }

  toggleState(page, idx, status)
  {
    if (status === "enter")
    {
      this.setState({pageList:
        [...this.state.pageList.slice(0, idx), true,
         ...this.state.pageList.slice(idx + 1, this.state.pageList.length + 1)]});
    }
    else if (status === "leave")
    {
      if (idx !== this.props.currPage)
      {
        this.setState({pageList:
          [...this.state.pageList.slice(0, idx), false,
           ...this.state.pageList.slice(idx + 1, this.state.pageList.length + 1)]});
      }
    }
    else if (status === "click")
    {
      //Make everything else false and add it into the list
      var newList = [];
      for (var i = 0; i < this.state.pageList.length; i++)
      {
        newList.push(false);
      }
      this.setState({pageList:
        [...newList.slice(0, idx), true,
         ...newList.slice(idx + 1, this.state.pageList.length + 1)],
        });
      //Use big function to change the page number
      this.props.setPageNumber(idx);
    }
  }

  renderContent(){
    
  }

  render() {
    return (
        <div className = "infoCard">
            <div className = "pagesControl">
              {
                this.state.pageList.map((page, idx) => {

                    return (
                      <button className="pageBullet" key={idx}>
                        <FontAwesomeIcon  icon = {page ? solidSquare :regSquare}
                                          size = "sm"
                                          onMouseEnter = {() => this.toggleState(page, idx, "enter")}
                                          onMouseLeave = {() => this.toggleState(page, idx, "leave")}
                                          onClick = {() => this.toggleState(page, idx, "click")}/>
                      </button>
                      )
                  })
              }
          </div>
        <div className = "infoCard">

          <div className ="backCard">
            <div className = "frontCard">
              <div className = "title">
                {this.experiences[this.props.currPage].company}
              </div>
              <div className = "description">
                {this.experiences[this.props.currPage].description}
              </div>
            
            </div>
          </div>
        </div>
        </div>
    )
  }

  componentDidMount()
  {
    var newPage = this.props.currPage;
    var newPageList = this.state.pageList;
    newPageList[newPage] = true;
    this.setState({pageList: newPageList});
  }

}

export default Experiences;
