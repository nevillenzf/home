import React from 'react';
import '../Stylesheet.css';
import Polaroid from './Polaroid';
import PostItNote from './PostItNote';
import FadeIn from 'react-fade-in';

import 'react-image-lightbox/style.css';

class Experiences extends React.Component {
  //Projects page

  render() {
    return (
      <FadeIn className="corkboardContent">
          <Polaroid height={320}
                    width={300}
                    tape = "top black"
                    text = "Buildout, Summer '19"
                    image = '/buildout-logo.png'
                    basicInfo = {{  title:'Buildout',
                                    period:"Software Engineering Intern"}}
                    experienceInfo =
                    {{
                      description: ["Implemented Tensorflow through the Keras Python framework to create \
                                    an Image Recognition Machine Learning model that had a 98% accuracy when \
                                    predicting 98% of the time.",
                                    "Deployed a Flask server in production through AWS ECS that hosts the trained model \
                                    and makes predictions based on received images via Celery and Sidekiq cron jobs.",
                                    "Developed a native Image Editor app within the Buildout app using Fabric js, React and\
                                     Ruby on Rails that lives within Bootstrap 3 Modal to allow for in-app image enhancement/ editing.",
                                    "Developed a solid understanding of Amazon Cloud Service, Docker, Git, Agile(Scrum) and their role in the workflow of a software engineer."],

                                  }}
                    />

          <Polaroid height={320}
                    width={300}
                    tape = "top black"
                    text = "WICIL Engineering!"
                    image = '/wicil-engineering.jpeg'
                    basicInfo = {{  title:'Wisconsin Computational Intelligence Lab',
                                    period:"Frontend Engineer"}}
                    experienceInfo =
                    {{
                      description: ["Developing a Graphical User Interface (GUI) for a MEG \
                                    research project using Reactjs and Fabricjs.",
                                    "Users can utilize this GUI to easily construct the memory model \
                                    for architecture simulation to facilitate the debug and analysis processes."],
                                  }}
                    />

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

export default Experiences;
