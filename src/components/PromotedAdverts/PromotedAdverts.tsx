import React from 'react';
import { Card, CardDeck, Container, Button } from 'react-bootstrap';
import image from '../../images/bike.jpg';

const PromotedAdverts = () => {
  return (
    <Container className='mt-5'>
      <h2 className='mt-5 mb-5 w-100 text-center'>Promoted Ads</h2>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">1599 PLN</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">1599 PLN</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">1599 PLN</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">1599 PLN</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">1599 PLN</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">1599 PLN</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">1599 PLN</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">1599 PLN</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <div className='text-center mt-4'>
        <Button className='w-25'>see all</Button>

      </div>
    </Container>
  );
};

export default PromotedAdverts;