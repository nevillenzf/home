import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faSquare as solidSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare as regSquare } from '@fortawesome/free-regular-svg-icons';

import 'react-image-lightbox/style.css';

class Hobbies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {pageList: [false, false],
                  scrollable: [false, false]}; //false means that it's not scrollable [TOP,BOTTOM]
    //Set the current page to this.props.currPage
    this.hobbies = [{ title: "DotA 2", 
                          description: ["Played for UW-Madison's DotA 2 varsity team for 2 years. The team is currently ranked top 3 in North America as of March 2020.",
                                        "The team is in the playoff stage of a tournament with a prize pool of $50,000",
                                        "Personally have reached Immortal rank, which is the highest achievable rank in DotA 2."],
                                        links: {"dotabuff":"https://www.dotabuff.com/players/141692717"},
                    },
                    { title: "Music",
                           description: ["During my free time I also enjoy playing the guitar and just jamming out to songs!",
                                        "Favorite genre of music would be R&B and Funk.",
                                        "Tom Misch, Frank Ocean & Mac Ayres are my top 3 musical inspirations"
                                        ],
                                        links: {"soundcloud":"https://soundcloud.com/nevsn"},

                    }];
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
                  <b>{this.hobbies[this.props.currPage].title}</b>
                  <div className="Links">
                  {
                      Object.entries(this.hobbies[this.props.currPage].links).map(([key, value]) => {

                          return (
                            <div key={key} className="ProjLink">
                               <a href={value}>{key}</a> 
                            </div>
                            )
                        })
                  }
                  </div>
                </div>

              </div>
                <div  className = "description" 
                      onMouseEnter = {(e)=>this.checkIfScrollable(e.currentTarget)}
                      onScroll={(e)=>this.checkIfScrollable(e.currentTarget)}>
                    <div className = {this.state.scrollable[0] ? "topScroller" : ""}>
                      <FontAwesomeIcon icon ={this.state.scrollable[0] ? faChevronUp : ""}/>
                    </div>
                    {
                      this.hobbies[this.props.currPage].description.map((desc, idx) => {

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
    )}
    else
    {
      return(
        <div className="mobileContainer">
          {
                      this.hobbies.map((hobby, idx) => {
                        return(
                          <div className= "infoCard">
                            <div className ="backCard">
                            <div className = "frontCard">
                              <div className = "title">
                                <div className="topTitle">
                                  <b>{hobby.title}</b>
                                  <div className="Links">
                                  {
                                      Object.entries(hobby.links).map(([key, value]) => {
                
                                          return (
                                            <div key={key} className="ProjLink">
                                              <a href={value}>{key}</a> 
                                            </div>
                                            )
                                        })
                                  }
                                  </div>
                                </div>
                
                              </div>
                                <div  className = "description"
                                      onMouseEnter = {(e)=>this.checkIfScrollable(e.currentTarget)}
                                      onScroll={(e)=>this.checkIfScrollable(e.currentTarget)}>
                                    <div className = {this.state.scrollable[0] ? "topScroller" : ""}>
                                      <FontAwesomeIcon icon ={this.state.scrollable[0] ? faChevronUp : ""}/>
                                    </div>
                                    {
                                      hobby.description.map((desc, idx) => {

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

export default Hobbies;
