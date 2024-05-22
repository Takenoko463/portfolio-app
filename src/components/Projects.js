import "bootstrap/dist/css/bootstrap.min.css"; // BootstrapのCSSをインポート
import Card from "react-bootstrap/Card"; // React BootstrapのCardコンポーネントをインポート
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ListGroup from 'react-bootstrap/ListGroup';

import projectData from "../data/project-data.json";
import frameworkData from "../data/framework-data.json";
import cloudPlatformData from "../data/cloud-platform-data.json";
import programmingLanguageData from "../data/programming-language-data.json";
function Projects() {
  const webApplications = projectData.webApplications;
  const others = projectData.others;

  return (
    <Row className="py-2" id="projects">
      <h2 className="md-1 text-center">Projects</h2>

      <WebApplicationChild
        title="webApplication"
        projectArray={webApplications}
      />

      <OthersChild title="バイト先や掲示板で用いたもの" projectArray={others} />
    </Row>
  );
}
const WebApplicationChild = ({ title, projectArray }) => {
  const projectList = projectArray.map((project, index) => {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="default">
        <Card key={index} className="mb-2">
          <Card.Header>
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="default">概要</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="detail">詳細</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Tab.Content>
              <Tab.Pane eventKey="default">
                <Card.Title as="h4">
                  <a
                    href={project.url}
                    className="text-reset text-decoration-none"
                  >
                    {project.name}
                  </a>
                </Card.Title>
                <Card.Link href={project.git_hub_url}>github_url</Card.Link>
                <Card.Text>{project.content}</Card.Text>
              </Tab.Pane>
              <Tab.Pane eventKey="detail">
                <ListGroup variant="flush">
                  <ListGroup.Item>
                  <span>フレームワーク:</span>
                    {project.framework_id && (
                      <span>{frameworkData[project.framework_id].name}</span>
                    )}
                  </ListGroup.Item>
                  <ListGroup.Item>
                  <span>デプロイ先:</span>
                    {project.cloud_plat_form_id && (
                      <span>{cloudPlatformData[project.cloud_plat_form_id].name}</span>
                    )}
                  </ListGroup.Item>
                  <ListGroup.Item>
                  <span>主な使用言語:</span>
                    {project.programming_language_id && (
                      <span>{programmingLanguageData[project.programming_language_id].name}</span>
                    )}
                  </ListGroup.Item>
                </ListGroup>
              </Tab.Pane>
            </Tab.Content>
          </Card.Body>
        </Card>
      </Tab.Container>
    );
  });
  return (
    <Row className="py-2">
      <h3>{title}</h3>
      {projectList}
    </Row>
  );
};
const OthersChild = ({ title, projectArray }) => {
  const projectList = projectArray.map((project, index) => {
    return (
      <Card key={index} className="mb-2">
        <Card.Body>
          <Card.Title as="h4">
            <a href={project.url} className="text-reset text-decoration-none">
              {project.name}
            </a>
          </Card.Title>
          <Card.Link href={project.git_hub_url}>github_url</Card.Link>
          <Card.Text>{project.content}</Card.Text>
        </Card.Body>
      </Card>
    );
  });
  return (
    <Row className="py-2">
      <h3>{title}</h3>
      {projectList}
    </Row>
  );
};
export default Projects;
