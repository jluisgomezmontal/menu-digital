import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./menu.scss";

function Menu() {
  return (
    <Accordion defaultActiveKey="0" data-bs-theme="dark">
      <Accordion.Item eventKey="0" className="bg-dark text-white">
        <Accordion.Header>
          <h6>Hamburguesas</h6>
        </Accordion.Header>
        <Accordion.Body>
          <Container>
            <Row>
              <Col xs={10}>Hamburguesa Clasica</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Hamburguesa con Queso</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Hamburguesa Queso y Tocino</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Hamburguesa Hawaiana</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Hamburguesa de Pollo</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="bg-dark text-white">
        <Accordion.Header>
          <h6>Burritos</h6>
        </Accordion.Header>
        <Accordion.Body>
          <Container>
            <Row>
              <Col xs={10}>Burrito Clasica</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Burrito con Queso</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Burrito Queso y Tocino</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Burrito Hawaiana</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Burrito de Pollo</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="bg-dark text-white">
        <Accordion.Header>
          <h6>Tacos</h6>
        </Accordion.Header>
        <Accordion.Body>
          <Container>
            <Row>
              <Col xs={10}>Taco Clasica</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Taco con Queso</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Taco Queso y Tocino</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Taco Hawaiana</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Taco de Pollo</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="bg-dark text-white">
        <Accordion.Header>
          <h6>Quesadillas</h6>
        </Accordion.Header>
        <Accordion.Body>
          <Container>
            <Row>
              <Col xs={10}>Quesadilla Clasica</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Quesadilla con Queso</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Quesadilla Queso y Tocino</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Quesadilla Hawaiana</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Quesadilla de Pollo</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className="bg-dark text-white">
        <Accordion.Header>
          <h6>Bebidas</h6>
        </Accordion.Header>
        <Accordion.Body>
          <Container>
            <Row>
              <Col xs={10}>Refresco</Col>
              <Col className="text-danger" xs={2}>
                $25
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Agua</Col>
              <Col className="text-danger" xs={2}>
                $20
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Agua de Jamaica</Col>
              <Col className="text-danger" xs={2}>
                $50
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Agua de Horchata</Col>
              <Col className="text-danger" xs={2}>
                $50
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>Taco de Pollo</Col>
              <Col className="text-danger" xs={2}>
                $100
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                <p className="descripcion fw-lighte font-monospace text-body-secondary">
                  Una pequeña descripcion del producto
                </p>
              </Col>
            </Row>
          </Container>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Menu;
