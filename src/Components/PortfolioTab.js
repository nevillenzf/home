import React from 'react';
import '../Stylesheet.css';
import {Card, Button} from 'react-bootstrap';
import visualeyes from '../Images/gifs/home.gif';

class PortfolioTab extends React.Component {
//Created a component for the picture because might include onhover functions to interact with picture
  render() {
    return (
      <div id="portfolio" >
      <Card >
        <Card.Header>UW - Live Well Roommate Finder Web Application</Card.Header>
        <Card.Body>
          <Card.Title> Secondary thang</Card.Title>
          <Card.Text>
            A Full-Stack Roommate finder web application complete with a backend web server with a database.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted"> Reactjs | Flask | SQLAlchemy | PostgreSQL </Card.Footer>
        </Card>
        <Card >
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <button >Go somewhere</button>
          </Card.Body>
          <Card.Footer className="text-muted"> </Card.Footer>
          </Card>
      </div>)
  }
}

export default PortfolioTab;
