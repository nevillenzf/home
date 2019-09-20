import React from 'react';
import '../Stylesheet.css';
import {Carousel} from 'react-bootstrap';
import visualeyes from '../Images/gifs/home.gif';

class PortfolioTab extends React.Component {
//Created a component for the picture because might include onhover functions to interact with picture
  render() {
    return (
      <div id="portfolio" >
        <Carousel interval={null}>
          <Carousel.Item>
          <div className="PortfolioBG">
            <img src={visualeyes} alt="VisualEyesBG" position="absolute" object-fit="fill" width="100%" height="100%"/>
          </div>
          <div className="PortfolioSlide">
            <img src={visualeyes} alt="VisualEyes" />
          </div>
            <Carousel.Caption>
              <a href="https://github.com/dannysj/visualeyes"><h2>VisualEyes</h2></a>
              <p>Delivering Information Interactively through the world of Augmented Reality and Computer Vision.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <div className="PortfolioSlide">
            <img src="https://media.giphy.com/media/MFVAwsSghTKOeslhwQ/giphy-downsized-large.gif" alt="Second slide" />
          </div>
          <Carousel.Caption>
          <a href="https://github.com/dannysj/visualeyes"><h2>Second slide</h2></a>
          <p>Delivering Information Interactively through the world of Augmented Reality and Computer Vision.</p>
          </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </div>)
  }
}

export default PortfolioTab;
