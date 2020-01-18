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
                    text = {[ "Hey again, Neville here! I’m a senior at the University of Wisconsin-Madison graduating in Spring 2020.",
                              "and am looking for opportunities . I develop and design full stack web applications and websites."]}
                    color = "note"
                    fontSize = {26}
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
