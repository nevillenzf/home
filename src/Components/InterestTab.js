import React from 'react';
import {CardDeck, Card, Button} from 'react-bootstrap';
class InterestTab extends React.Component {
//Created a component for the picture because might include onhover functions to interact with picture

  render() {
    return (
      <div id="interest" >
        <Card >
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
        <br/>
        <Card >
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <button>Go somewhere</button>
          </Card.Body>
          <Card.Footer className="text-muted">
            Random crap
          </Card.Footer>
          </Card>
          <br/>
          <Card >
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <button>Go somewhere</button>
            </Card.Body>
            <Card.Footer className="text-muted">
              Random crap
            </Card.Footer>
            </Card>
            <br/>
            <Card >
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <button>Go somewhere</button>
              </Card.Body>
              <Card.Footer className="text-muted">
                Random crap
              </Card.Footer>
            </Card>
      </div>)
  }
}

export default InterestTab;
