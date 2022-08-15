import { Container, Row, Col } from 'react-bootstrap';

// Footer component for the app
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Newz</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;

