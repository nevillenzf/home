import React from 'react';
import {Carousel} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faSquare as solidSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare as regSquare } from '@fortawesome/free-regular-svg-icons';

import cadence1 from '../Images/cadence-1-lq.gif';
import cadence2 from '../Images/cadence-2.png';
import cadence3 from '../Images/cadence-3.png';
import cadence4 from '../Images/cadence-4.png';

import livewell1 from '../Images/live-well-1.png';
import livewell2 from '../Images/live-well-2.png';

import visualeyes1 from '../Images/visualeyes-1.gif';
import visualeyes2 from '../Images/visualeyes-2.png';
import visualeyes3 from '../Images/visualeyes-3.gif';

import website1 from '../Images/website-1.jpg';

import zuck1 from '../Images/zuck-1.png';

import 'react-image-lightbox/style.css';

class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {pageList: [false, false, false, false, false],
                  scrollable: [false, false]};
    //Set the current page to this.props.currPage
    this.projects = [{ title: "Cadence", 
                          tagline: "Musical togetherness, anywhere, anytime.", 
                          description: ["Lead a team of 6 students and Live Undiscovered Music (LÜM) to develop a Music Chatroom web app that would bring back the joys of listening to music together.",
                          "Users can join Lounges and listen to what other people around them are listening to or better yet become their own Loungemasters",
                          "Designed and implemented the overall software architecture with Express.js, React.js and PostgreSQL.",
                          "Integrated Spotify’s API and Socket.io to allow for synced music within the browser.",
                          "Designed and implemented the overall UI/UX design of the application with Bootstrap & FontAwesome."],
                          images: [cadence1,cadence2,cadence3,cadence4],
                          links: {"github":"https://github.com/nklabjan/Music-Chatroom",
                                  "check me out": "https://project-cadence.herokuapp.com"},
                        },
                        { title: "UW-Live Well",
                           tagline: "Full Stack Roommate Finder application for Software Engineering class",
                           description: ["A full stack application developed in a week for a class.",
                                        "Integrates React for Front end, Flask for the back-end and SQLAlchemy for the Postgres Database servers."],
                           images: [livewell1, livewell2],
                           links: {"github":"https://github.com/nevillenzf/uw-live-well"}
                        },
                        { title: "VisualEyes",
                           tagline: "Making the street art experience interactive",
                           description: ["VisualEyes is a project in collaboration with Milwaukee's Black Cat Alley through the gAlpha Generator Start-up program.",
                           "Our goal is to bring interactive information to users through Augmented Reality and Computer Vision.", 
                           "Users can use their smartphones to interact with murals in Black Cat Alley which can then display additional information on the mural and the mural artist, and spawn an interactive 3D model."],
                           images: [visualeyes3, visualeyes1, visualeyes2],
                           links: {"github":"https://github.com/dannysj/visualeyes"}
                        },
                        { title: "Zuck",
                           tagline: "A potential solution for kitchen supply management",
                           description: [ "Robotic shelf powered by an Arduino using C++ and a Raspberry Pi using Python via Google's AIY kit.",
                                          "Undergraduate Research Project to develop solutions for real-world problems by researching the interaction between human and computers.",
                                          "Integrated Google's Cloud Speech API for voice recognition interactions."],
                           images: [zuck1],
                           links: {"github":"https://github.com/nevillenzf/zuck-shelf"}
                           
                        },
                        { title: "This Website",
                           tagline: "You're looking at it!",
                           description: ["You're looking at it!",
                                          "Created from scratch using React, FontAwesome and Bootstrap."],
                           images: [website1],
                           links: {"github":"https://github.com/nevillenzf/my-react-website"}
                        }
                      ];
    this.renderContent = this.renderContent.bind(this);
  }

  checkIfScrollable(target) {
    //Do calculations to determine if scrollable
    //Need to do when it is instantiated too
    //This happens when we scroll to the bottom

    //Scroll movement difference
    var scrollVar = target.scrollHeight - target.scrollTop - target.clientHeight;
    var temp = this.state.scrollable;

    //
    if (scrollVar < 5 && scrollVar >= 0)
    {
      console.log("Bottom div should not appear");
      if (this.state.scrollable[1])
      {
        temp[1] = false;
        this.setState({scrollable: temp});
      }
    }
    else 
    {
      if (!this.state.scrollable[1])
      {
        temp[1] = true;
        this.setState({scrollable: temp});
      }
    }

    //This happens when we can onlyl scroll to the bottom
    if (target.scrollTop < 5)
    {
      if (this.state.scrollable[0])
      {
        temp[0] = false;
        this.setState({scrollable: temp});
      }
    }
    else 
    {
      if (!this.state.scrollable[0])
      {
        temp[0] = true;
        this.setState({scrollable: temp});
      }
    }
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

  renderContent() {
    if (window.innerWidth > 480)
    {
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
                <div className="topTitle">
                  <b>{this.projects[this.props.currPage].title}</b>
                  <div className="Links">
                  {
                      Object.entries(this.projects[this.props.currPage].links).map(([key, value]) => {

                          return (
                            <div key={key} className="ProjLink">
                               <a href={value}>{key}</a> 
                            </div>
                            )
                        })
                  }
                  </div>
                </div>
                <div className = "position">{this.projects[this.props.currPage].tagline}</div>

              </div>
                <div  className = "description"
                      onMouseEnter = {(e)=>this.checkIfScrollable(e.currentTarget)}
                      onScroll={(e)=>this.checkIfScrollable(e.currentTarget)}>
                    <div className = {this.state.scrollable[0] ? "topScroller" : ""}>
                      <FontAwesomeIcon icon ={this.state.scrollable[0] ? faChevronUp : ""}/>
                    </div>
                    <Carousel className = "projCar" pause= "hover" interval="60000" wrap="false">
                    {
                      this.projects[this.props.currPage].images.map((image, idx) => {

                          return (
                            <Carousel.Item key={idx} >
                              <div className="projImageContainer">
                                <img src={image} className="projImage" alt="Not found"/>
                              </div>
                            </Carousel.Item>
                            )
                        
                      })
                    }
                    </Carousel>
                    <div className = {this.state.scrollable[1] ? "bottomScroller" : ""}>
                      <FontAwesomeIcon icon ={this.state.scrollable[1] ? faChevronDown : ""}/>
                   </div>
                </div>
            
            </div>
          </div>
        </div>
        </div>
    )
    }
    else
    {
      return(
        <div className="mobileContainer">
          {
                      this.projects.map((project, idx) => {
                        return(
                          <div className= "infoCard">
                            <div className ="backCard">
                            <div className = "frontCard">
                              <div className = "title">
                                <div className="topTitle">
                                  <b>{project.title}</b>
                                  <div className="Links">
                                  {
                                      Object.entries(project.links).map(([key, value]) => {
                
                                          return (
                                            <div key={key} className="ProjLink">
                                              <a href={value}>{key}</a> 
                                            </div>
                                            )
                                        })
                                  }
                                  </div>
                                </div>
                                <div className = "position">{project.tagline}</div>
                
                              </div>
                                <div  className = "description"
                                      onMouseEnter = {(e)=>this.checkIfScrollable(e.currentTarget)}
                                      onScroll={(e)=>this.checkIfScrollable(e.currentTarget)}>
                                    <div className = {this.state.scrollable[0] ? "topScroller" : ""}>
                                      <FontAwesomeIcon icon ={this.state.scrollable[0] ? faChevronUp : ""}/>
                                    </div>
                                    <Carousel className = "projCar" pause= "hover" interval="60000" wrap="false">
                                    {
                                      project.images.map((image, idx) => {

                                          return (
                                            <Carousel.Item key={idx} >
                                              <div className="projImageContainer">
                                                <img src={image} className="projImage" alt="Not found"/>
                                              </div>
                                            </Carousel.Item>
                                            )
                                        
                                      })
                                    }
                                    </Carousel>
                                    <div className = {this.state.scrollable[1] ? "bottomScroller" : ""}>
                                      <FontAwesomeIcon icon ={this.state.scrollable[1] ? faChevronDown : ""}/>
                                  </div>
                                </div>
                            
                            </div>
                          </div>
                        </div>
                        )
                      })
                    }
        </div>
      )
          
    }
  }

  render() {
    return(
      this.renderContent()
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

export default Projects;
