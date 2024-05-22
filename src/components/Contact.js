import "bootstrap/dist/css/bootstrap.min.css"; // BootstrapのCSSをインポート
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <div id="contact">
      <h2 className="text-center">Contact</h2>
      <Row className="py-5 justify-content-center">
        <Col lg="9">
          <ListGroup>
            <ListGroup.Item>
              <strong>PhoneNumber</strong>:08027329450
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>EmailAddress</strong>:binwushi1@gmail.com
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
