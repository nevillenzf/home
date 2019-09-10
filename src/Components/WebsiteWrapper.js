import React from 'react';
import '../Stylesheet.css';
import Intro from './Intro';
import ContentWrapper from './ContentWrapper';

class WebsiteWrapper extends React.Component {
  render() {

    return (
      <div className="WebsiteWrapper">
      <script src="https://kit.fontawesome.com/620e0a4f1e.js"></script>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
        <Intro />
        <ContentWrapper />
      </div>)
  }
}

export default WebsiteWrapper;
