import "bootstrap/dist/css/bootstrap.min.css"; // BootstrapのCSSをインポート
import Card from "react-bootstrap/Card"; // React BootstrapのCardコンポーネントをインポート
import Row from "react-bootstrap/Row";
import projectData from "../data/project-data.json";
import frameworkData from "../data/framework-data.json";
function Projects() {
  const webApplications = projectData.webApplications;
  const others = projectData.others;

  return (
    <Row className="py-2" id="projects">
      <h2 className="md-1 text-center">Projects</h2>

      <Child title="webApplication" projectArray={webApplications} />

      <Child title="バイト先や掲示板で用いたもの" projectArray={others} />
    </Row>
  );
}
const Child = ({ title, projectArray }) => {
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
          {project.framework_id && <p>{frameworkData[project.framework_id].name}</p>}
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
