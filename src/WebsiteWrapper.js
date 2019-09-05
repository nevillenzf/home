import React from 'react';
import './Stylesheet.css';
import Intro from './Intro';
import ContentWrapper from './ContentWrapper';

class WebsiteWrapper extends React.Component {
  render() {

    return (
      <div className="WebsiteWrapper">
        <Intro />
        <ContentWrapper />
      </div>)
  }
}

export default WebsiteWrapper;
