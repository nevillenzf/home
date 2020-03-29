import React from 'react';
import Intro from './Intro';
import ContentWrapper from './ContentWrapper';
import SocialBar from './SocialBar';
import "../Stylesheet.css";

class WebsiteWrapper extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      currContent: 'About Me',
    }
    this.updateContent = this.updateContent.bind(this);
  }

  updateContent(newContent)
  {
    this.setState({currContent: newContent});
  }

  render() {
    console.log("Hi thank you for looking at the console. Have a lovely day.")
    //Check type of device
    

    return (
      <div className="WebsiteWrapper">
        <script src="https://kit.fontawesome.com/620e0a4f1e.js"></script>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />

          <Intro updateContent={this.updateContent}/>
          <ContentWrapper currContent={this.state.currContent} updateContent={this.updateContent}/>
          <SocialBar />
      </div>)
  }
}

export default WebsiteWrapper;
