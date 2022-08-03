import { Container, Row, Card, Col, Image } from "react-bootstrap";
import jokerImg from "../asset/img/Trending/joker.jpg";
import yowisbenImg from "../asset/img/Trending/yowisben.jpg";
import endgameImg from "../asset/img/Trending/endgame.jpg";

const trending = () => {
  return (
    <div className="trending">
      <Container id="trending">
        <br/><br/>
        <h1 className="text-white">Trending Movie</h1>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImg p-2 m-1">
              <Image src={jokerImg} alt="Joker Image " width="100%" height="500px"  />
              <Card.Title className="text-center m-2">JOKER</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImg p-2 m-1">
              <Image src={yowisbenImg} alt="Joker Image " width="100%" height="500px"  />
              <Card.Title className="text-center m-2">YOWIS BEN 1</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImg p-2 m-1">
              <Image src={endgameImg} alt="Joker Image " width="100%" height="500px"  />
              <Card.Title className="text-center m-2">AVENGERS ENDGAME</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImg p-2 m-1">
              <Image src={jokerImg} alt="Joker Image " width="100%" height="500px"  />
              <Card.Title className="text-center m-2">JOKER</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImg p-2 m-1">
              <Image src={jokerImg} alt="Joker Image " width="100%" height="500px"  />
              <Card.Title className="text-center m-2">JOKER</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImg p-2 m-1">
              <Image src={jokerImg} alt="Joker Image " width="100%" height="500px"  />
              <Card.Title className="text-center m-2">JOKER</Card.Title>
              <Card.Text className="text-left">This is a wider card with supporting text</Card.Text>
              <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default trending;
