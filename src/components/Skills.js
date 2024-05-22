import "bootstrap/dist/css/bootstrap.min.css"; // BootstrapのCSSをインポート
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card"; // React BootstrapのCardコンポーネントをインポート

import frameworkData from "../data/framework-data.json";
import cloudPlatformData from "../data/cloud-platform-data.json";
import programmingLanguageData from "../data/programming-language-data.json";

function Skills() {
  return (
    <div id="skills">
      <h2 className="md-1 text-center">Skill</h2>
      <Row className="py-2 g-3" xs={1} md={3} id="skill">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title as="h3">フレームワーク</Card.Title>
              <Lists skillArray={frameworkData} />
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title as="h3">デプロイ先</Card.Title>
              <Lists skillArray={cloudPlatformData} />
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title as="h3">プログラミング言語</Card.Title>
              <Lists skillArray={programmingLanguageData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

const Lists = ({ skillArray }) => {
  //配列の最初を除いておく。
  const outputs=skillArray.filter((value, index, array) => {
    return array.indexOf(value) !== 0
  });
  const skillList = outputs.map((skill, index) => {
    return <ListGroup.Item>{skill.name}</ListGroup.Item>;
  });
  return <ListGroup>{skillList}</ListGroup>;
};
export default Skills;
