import React from 'react';
import '../Stylesheet.css';
import Tape from './Tape';
import Pin from './Pin';
import InfoModal from './InfoModal';

class Polaroid extends React.Component {
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
    this.state = {zIndex: 4, showModal: false};
    this.tilt = 'rotate(0deg)';

    //Check for box shadow
    this.checkForBoxShadow(this.props.tape, this.props.pin);

    //check for tilt
    if (this.props.tilt)
    {
      this.tilt = 'rotate(-5deg)';
      this.boxShadow = '5px 5px 5px rgba(54, 53, 52, 1)';
      if (!isNaN(this.props.tilt))
      {
        this.tilt = "rotate(" + this.props.tilt + "deg)";
      }
    }

    this.polaroidWrapperStyle = {
      width: this.width,
      height: this.height,
      padding: '15px 15px 30px 15px',
      border: '1px solid #BFBFBF',
      backgroundColor: 'white',
      boxShadow: this.boxShadow,
      marginBottom: '40px',
      transform: this.tilt,
    };

    this.polaroidImageStyle = {
      width: this.width - 50,
      height: this.width - 50,
      backgroundColor: 'rgba(0,0,0, 0.8)',
    };

    this.polaroidTextStyle = {
      color: 'black',
      fontFamily: "'Permanent Marker', cursive",
      transform: 'rotate(-5deg)',
      right: 20,
      bottom: 20,
      position: 'absolute',
      textAlign: 'right',
    };

    this.toggleModal = this.toggleModal.bind(this);

  }



  toggleModal(command){
    if (command === "hide")
    {
      this.setState({showModal: false});
    }
    else if (command === "show")
    {
      this.setState({showModal: true});
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

  handleClick(){
    //toggle open of close extra info
    if (this.state.showModal === false && this.props.basicInfo)
    {
      this.toggleModal("show");
    }
    //else open up lightbox
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
        return(
          <div className="PolaroidText" style={this.polaroidTextStyle}>{this.props.text} </div>
        )
      }
    }
  }

  renderModal()
  {
    if (this.props.basicInfo && this.props.projectInfo)
    {
      return(
        <div className="ModalWrapper">
          <InfoModal  show={this.state.showModal}
                      onHide={() => this.toggleModal("hide")}
                      projectInfo={this.props.projectInfo}
                      basicInfo={this.props.basicInfo}/>
        </div>
      )
    }
    else if (this.props.basicInfo && this.props.experienceInfo)
    {
      return(
        <div className="ModalWrapper">
          <InfoModal  show={this.state.showModal}
                      onHide={() => this.toggleModal("hide")}
                      experienceInfo={this.props.experienceInfo}
                      basicInfo={this.props.basicInfo}/>
        </div>
      )
    }
  }

  render() {
    return (
      <div  className="PolaroidWrapper"
            style={this.polaroidWrapperStyle}
            onClick={()=>this.handleClick()}
            >
        {this.renderTape()}
        {this.renderPin()}

        <div className="Polaroid">
          <div className="PolaroidPic">
            <img src={this.props.image} alt="Not available" style={this.polaroidImageStyle}/>
          </div>
          {this.renderText()}
        </div>
        {this.renderModal()}
      </div>
    )
  }
}

export default Polaroid;
