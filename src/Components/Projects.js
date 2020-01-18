import React from 'react';
import '../Stylesheet.css';
import Polaroid from './Polaroid';
import PostItNote from './PostItNote';
import FadeIn from 'react-fade-in';

import 'react-image-lightbox/style.css';

class Projects extends React.Component {
  //Projects page

  render() {
    return (
      <FadeIn className="corkboardContent">
          <Polaroid height={320}
                    width={300}
                    pin = "tl tr"
                    text = "Cadence, '19"
                    image = '/Cadence-1.png'
                    basicInfo = {{  title:'Cadence',
                                    period:"Oct 2019 - Present"}}
                    projectInfo =
                    {{
                      technologies:["Reactjs",
                                    "Expressjs",
                                    "Socket.io",
                                    "Spotify Web API",
                                    "Spotify Web playback SDK",
                                    "PostgreSQL"],
                      description: ["Lead a team of 6 students and Live Undiscovered Music (LÜM) to develop a \
                                    Music Chatroom web app that would bring back the joys of listening to music together.",
                                    "Users can join Lounges and listen to what other people around them \
                                    are listening to or better yet become their own Loungemasters",
                                    "Designed and implemented the overall software architecture with Express.js, \
                                    React.js and PostgreSQL.",
                                    "Integrated Spotify’s API and Socket.io to allow for synced music within the browser.",
                                    "Designed and implemented the overall UI/UX design of the application with Bootstrap & FontAwesome."],

                      githubLink: "https://github.com/nklabjan/Music-Chatroom"
                                  }}
                    />

          <Polaroid height={320}
                    width={300}
                    pin = "tl tr"
                    text = "This Website!, '19"
                    image = '/grad-pic-1.jpg'
                    basicInfo = {{  title:'New React Website',
                                    period:"Dec 2019"}}
                    projectInfo =
                    {{
                      technologies:["Reactjs",
                                    "Javascript",
                                    "CSS"],
                      description: ["Redesigned my website and implemented it through Reactjs. \
                                    Most of the components that you see are custom designed instead of using any frameworks. \
                                    The purpose of doing this was to understand how to programmatically manipulate the css of \
                                    DOM elements without the stylesheets."],

                      githubLink: "https://github.com/nevillenzf/my-react-website/"
                                  }}
                    />


          <Polaroid height={320}
                    width={300}
                    pin = "tl tr"
                    text = "VisualEyes, '18"
                    image = '/visualeyes-1.png'
                    basicInfo = {{  title:'VisualEyes',
                                    period:"June - August 2018"}}
                    projectInfo =
                    {{
                      technologies:["Swift",
                                    ],
                      description: ["VisualEyes is a project in collaboration with Milwaukee's Black Cat Alley \
                                    through the gAlpha Generator Start-up program. Its goal is to bring interactive \
                                    information to users through Augmented Reality and Computer Vision. Users can use \
                                    their smartphones to interact with murals in Black Cat Alley which can then display \
                                    additional information on the mural and the mural artist, and spawn an interactive 3D model."],

                      githubLink: "https://github.com/dannysj/visualeyes"
                                  }}/>
          <PostItNote height={320}
                    width={320}
                    tape = "left right black"
                    text = {["hey i'm a teal post-it note", "pretty cool eh?"]}
                    color = "rgba(202, 250, 248, 1)"
                    tilt = {-4}
                    type = "two-liner"
                     />
        </FadeIn>
    )
  }
}

export default Projects;
