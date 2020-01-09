import React from 'react';
import '../Stylesheet.css';
import Tape from './Tape';
import Pin from './Pin';


class PostItNote extends React.Component {
//Created a component for the picture because might include onhover functions to interact with picture
//Define polaroid
  constructor(props) {
    super(props);
    if (this.props.height && this.props.width)
    {
      this.height = this.props.height
      this.width = this.props.width
    }

    else
    {
      this.height = 250;
      this.width = 250;
    }

    this.boxShadow = '0px 5px 5px rgba(54, 53, 52, 1)';
    this.color = 'rgba(255, 255, 165, 1)';
    this.image = '';
    this.tilt = 'rotate(0deg)';
    this.fontSize = 24
    //Check for tilt
    if (this.props.tilt)
    {
      this.tilt = 'rotate(-5deg)';
      this.boxShadow = '5px 5px 5px rgba(54, 53, 52, 1)';
      if (!isNaN(this.props.tilt))
      {
        this.tilt = "rotate(" + this.props.tilt + "deg)";
      }
    }
    //Check for box shadow
    this.checkForBoxShadow(this.props.tape, this.props.pin);
    //Check for color
    this.choosePostItColor(this.props.color);

    if (this.props.fontSize !== undefined)
    {
      this.fontSize = this.props.fontSize;
    }

    this.postItWrapperStyle = {
      width: this.width,
      height: this.height,
      padding: '15px 15px 30px 15px',
      border: '1px solid #BFBFBF',
      backgroundColor: this.color,
      boxShadow: this.boxShadow,
      color: 'black',
      fontFamily: "'Permanent Marker', cursive",
      marginBottom: '40px',
      transform: this.tilt,
      backgroundImage: this.image,
      backgroundRepeat: 'repeat',
      fontSize: this.fontSize,
    };

    this.postItSoloStyle = {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };

    this.postItTitleStyle = {
      textDecoration: 'underline',
      fontSize: 36
    };

    this.twoLinerTopStyle = {
      marginTop: '20px',
      marginLeft: 20,
      fontSize: 36,
      textAlign: 'left',
    }

    this.twoLinerBotStyle = {
      bottom: 20,
      right: 20,
      textAlign: 'right',
    }
  }

  checkForBoxShadow(tapes, pins){
    if (tapes)
    {
      if (tapes.length !== undefined)
      {
        var temp = tapes.split(" ");
        //Check for only important ones
        var newTemp = temp.filter(function(value, index, arr){
          return (value === "top" || value === "bottom"|| value === "left" || value === "right"||
                  value === "tl"|| value === "tr"|| value === "bl"|| value === "br");
        })

        if(newTemp.length > 1)
        {
          //check if it's only top
          if (newTemp.includes("bottom") || newTemp.includes("left") || newTemp.includes("right") ||
              newTemp.includes("bl") || newTemp.includes("br"))
          {
            this.boxShadow = "";
          }
          else
          {
            this.boxShadow = '0px 5px 5px rgba(54, 53, 52, 1)';
          }
        }
      }
    }
    else if (pins)
    {
      if (pins.length !== undefined)
      {
        var tempPin = pins.split(" ");
        //Check for only important ones
        var newTempPin = tempPin.filter(function(value, index, arr){
          return (value === "top" || value === "bottom"|| value === "left" || value === "right"||
                  value === "tl"|| value === "tr"|| value === "bl"|| value === "br");
        })

        if(newTempPin.length > 1)
        {
          if (newTempPin.includes("bottom") || newTempPin.includes("left") || newTempPin.includes("right") ||
              newTempPin.includes("bl") || newTempPin.includes("br"))
          {
            this.boxShadow = "";
          }
          else
          {
            this.boxShadow = '0px 5px 5px rgba(54, 53, 52, 1)';
          }
        }
      }
    }
  }

  choosePostItColor(color){
    if (color)
    {
      if (color.length !== undefined)
      {
        if (color === "note")
        {
          this.image = 'url(tile.png)';
        }
        else this.color = color;
      }
    }
  }

  renderTape(){
    //if tape exist just add it into the list
    if(this.props.tape)
    {
      //check and see how many tapes are there that were passed in
      //default just print in the middle of the top
      var tapeList = [];

      if (this.props.tape.length !== undefined)
      {
        var tempList = this.props.tape.split(" ");
        var color = "regular"
        //Check for colortype
        if (tempList.includes("black"))
        {
          color = "black";
          tempList = tempList.filter(function(value,index, arr){
            return (value !== "black");
          })
        }


        //Check tempList and remove from list if it's not legal
        //top bottom left right tl tr bl br
        tapeList = tempList.filter(function(value, index, arr){
          return (value === "top" || value === "bottom"|| value === "left" || value === "right"||
                  value === "tl"|| value === "tr"|| value === "bl"|| value === "br");
        })
      }
      else
      {
        //Default if not defined
        tapeList = ["top"];
        color = "regular"
      }

      return(
        <div className="tapeList">
        {
          tapeList.map((tape, idx) => {
            return (
              <Tape key={idx}
                    type = {tape}
                    polaroidHeight={this.height}
                    polaroidWidth={this.width}
                    color={color}
                    />
            )
          })
        }
        </div>
      )
    }
  }

  renderPin(){
    //if tape exist just add it into the list
    if(this.props.pin)
    {
      //check and see how many tapes are there that were passed in
      //default just print in the middle of the top
      var pinList = [];

      if (this.props.pin.length !== undefined)
      {
        var tempList = this.props.pin.split(" ");
        var color = "rgba(240, 74, 62, 1)"
        //Check for colortype
        if (tempList.includes("black"))
        {
          color = "black";
          tempList = tempList.filter(function(value,index, arr){
            return (value !== "black");
          })
        }


        //Check tempList and remove from list if it's not legal
        //top bottom left right tl tr bl br
        pinList = tempList.filter(function(value, index, arr){
          return (value === "top" || value === "bottom"|| value === "left" || value === "right"||
                  value === "tl"|| value === "tr"|| value === "bl"|| value === "br");
        })
      }
      else
      {
        //Default if not defined
        pinList = ["top"];
        color = "rgba(240, 74, 62, 1)"
      }

      return(
        <div className="pinList">
        {
          pinList.map((pin, idx) => {
            return (
              <Pin  key={idx}
                    type = {pin}
                    polaroidHeight={this.height}
                    polaroidWidth={this.width}
                    color={color}
                    />
            )
          })
        }
        </div>
      )
    }
  }

  renderText()
  {
    if (this.props.text)
    {
      if (this.props.text.length > 0)
      {
        //determine what type of post it this is too, two-liner, menu, list
        //menu and list is the same except menu has hover effect
        //two liner is basically two lines of text top left and bottom right of card
        if (Array.isArray(this.props.text))
        {
          if (this.props.text.length > 2 || this.props.type !== "two-liner")
          {
            var content = this.props.text.map((text, idx) => {
                return(
                  <div  className={this.props.type === "menu" ? "PostItMenuText" :"PostItText"}
                        style={this.postItTextStyle}
                        key={idx}
                        onClick={ this.props.type === "menu" ? ()=>{this.props.updateContent(text)}: null}>{text}
                  </div>
                )
              })
          }
          else
          //two-liner
          {
            content = <div className="PostItTwoLinerBody">
                        <div  className="PostItText"
                        style={this.twoLinerTopStyle}
                        >{this.props.text[0]} </div>
                        <div  className="PostItText"
                        style={this.twoLinerBotStyle}
                        >{this.props.text.length > 1 ? this.props.text[1] : ""} </div>
                      </div>

          }
        }
        else return (
          content = <div  className = {this.props.text === "Find out more!" ? "PostItMenuText" : "PostItText"}
                          style={this.postItSoloStyle}
                >{this.props.text} </div>
        )

      }

      return (
        <div className="PostItBody">
          {content}
        </div>
      )
    }
  }

  render() {
    return (
      <div  className="PostItWrapper"
            style={this.postItWrapperStyle}
            onClick={this.props.onClick !== undefined ? this.props.onClick : null}
            >
        {this.renderTape()}
        {this.renderPin()}

        <div className="PostItTitle" style={this.postItTitleStyle}>
          {this.props.title ? this.props.title : ""}
        </div>
          {this.renderText()}
      </div>
    )
  }
}

export default PostItNote;
