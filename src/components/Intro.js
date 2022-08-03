import { Container, Row, Col, Button } from "react-bootstrap";

const intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center">
        <Row>
          <Col>
            <div className="title">NONTON GRATIS</div>
            <div className="title">GAK PAKE KARCIS</div>
            <div className="introButton mt-4 text-center">
                <Button variant="dark">Lihat Semua List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default intro;
