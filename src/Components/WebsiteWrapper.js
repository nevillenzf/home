import React from 'react';
import '../Stylesheet.css';
import Intro from './Intro';
import ContentWrapper from './ContentWrapper';

class WebsiteWrapper extends React.Component {
  render() {

    return (
      <div className="WebsiteWrapper">
      <script src="https://kit.fontawesome.com/620e0a4f1e.js"></script>
        <Intro />
        <ContentWrapper />
      </div>)
  }
}

export default WebsiteWrapper;
