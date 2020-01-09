import React from 'react';
import '../Stylesheet.css';
import PostItNote from './PostItNote';
import FadeIn from 'react-fade-in';

import 'react-image-lightbox/style.css';

class AboutMe extends React.Component {


  render() {
    return (
      <FadeIn className="corkboardContent">
          <PostItNote height={"500px"}
                    width={"800px"}
                    text = {["Neville Ng", "Software Engineer"]}
                    color = "note"
                    fontSize = {40}
                     >
          </PostItNote>
      </FadeIn>
    )
  }

  componentDidMount()
  {

  }

}

export default AboutMe;
