import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faSquare as solidSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare as regSquare } from '@fortawesome/free-regular-svg-icons';

import 'react-image-lightbox/style.css';

class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {pageList: [false, false, false, false, false],
                  scrollable: [false, false]};
    //Set the current page to this.props.currPage
    this.experiences = [{ title: "Cadence", 
                          tagline: "Musical togetherness, anywhere, anytime.", 
                          description: ["Lead a team of 6 students and Live Undiscovered Music (LÜM) to develop a Music Chatroom web app that would bring back the joys of listening to music together.",
                          "Users can join Lounges and listen to what other people around them are listening to or better yet become their own Loungemasters",
                          "Designed and implemented the overall software architecture with Express.js, React.js and PostgreSQL.",
                          "Integrated Spotify’s API and Socket.io to allow for synced music within the browser.",
                          "Designed and implemented the overall UI/UX design of the application with Bootstrap & FontAwesome."],
                          links: {"github":"https://github.com/nklabjan/Music-Chatroom",
                                  "check me out": "https://music-chatroom-client.herokuapp.com"},
                        },
                        { title: "UW-Live Well",
                           tagline: "Full Stack Roommate Finder application for Software Engineering class",
                           description: ["A full stack application developed in a week for a class.",
                                        "Integrates React for Front end, Flask for the back-end and SQLAlchemy for the Postgres Database servers."],
                           links: {"github":"https://github.com/nevillenzf/uw-live-well"}
                        },
                        { title: "VisualEyes",
                           tagline: "Making the street art experience interactive",
                           description: ["VisualEyes is a project in collaboration with Milwaukee's Black Cat Alley through the gAlpha Generator Start-up program.",
                           "Our goal is to bring interactive information to users through Augmented Reality and Computer Vision.", 
                           "Users can use their smartphones to interact with murals in Black Cat Alley which can then display additional information on the mural and the mural artist, and spawn an interactive 3D model."],
                           links: {"github":"https://github.com/dannysj/visualeyes"}
                        },
                        { title: "Zuck",
                           tagline: "A potential solution for kitchen supply management",
                           description: [ "Robotic shelf powered by an Arduino using C++ and a Raspberry Pi using Python via Google's AIY kit.",
                                          "Undergraduate Research Project to develop solutions for real-world problems by researching the interaction between human and computers.",
                                          "Integrated Google's Cloud Speech API for voice recognition interactions."],
                           links: {"github":"https://github.com/nevillenzf/zuck-shelf"}
                        },
                        { title: "This Website",
                           tagline: "Powered by React to showcase my portfolio!",
                           description: ["You're looking at it!",
                                          "Created from scratch using React, FontAwesome and Bootstrap."],
                           links: {"github":"https://github.com/nevillenzf/my-react-website"}
                        }
                      ];

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
                <div className="topTitle">
                  <b>{this.experiences[this.props.currPage].title}</b>
                  <div className="Links">
                  {
                      Object.entries(this.experiences[this.props.currPage].links).map(([key, value]) => {

                          return (
                            <div key={key} className="ProjLink">
                               <a href={value}>{key}</a> 
                            </div>
                            )
                        })
                  }
                  </div>
                </div>
                <div className = "position">{this.experiences[this.props.currPage].tagline}</div>

              </div>
                <div  className = "description"
                      onMouseEnter = {(e)=>this.checkIfScrollable(e.currentTarget)}
                      onScroll={(e)=>this.checkIfScrollable(e.currentTarget)}>
                    <div className = {this.state.scrollable[0] ? "topScroller" : ""}>
                      <FontAwesomeIcon icon ={this.state.scrollable[0] ? faChevronUp : ""}/>

                    </div>
                    {
                      this.experiences[this.props.currPage].description.map((desc, idx) => {

                          return (
                            <div key={idx} className="desc">
                              <FontAwesomeIcon  icon = {faChevronRight}
                                                size = "sm"
                                                className = "descIcon"
                              />
                              {desc} 
                            </div>
                            )
                        })
                    }
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

  componentDidMount()
  {
    var newPage = this.props.currPage;
    var newPageList = this.state.pageList;
    newPageList[newPage] = true;
    this.setState({pageList: newPageList});
  }

}

export default Projects;
