import "bootstrap/dist/css/bootstrap.min.css"; // BootstrapのCSSをインポート
import Card from "react-bootstrap/Card"; // React BootstrapのCardコンポーネントをインポート
import Row from "react-bootstrap/Row";

function Projects() {
  const projects = [
    {
      name: "Prompter",
      url: "54.199.100.28",
      git_hub_url: "https://github.com/Takenoko463/prompter",
      content:
        "ChatGPTなどのテキスト型AIへの質問文を収集するサイトです。idがadmin,passwordは2222です。",
    },
    {
      name: "emotion-analyst",
      url: "https://emotionanalyzer-c2d45.web.app/",
      git_hub_url: "https://github.com/Takenoko463/emotion-analyst-front",
      content: "感情を分析し、円グラフで感情の割合を出力するサイトです。",
    },
    {
      name: "job-list",
      url: "#",
      git_hub_url: "https://github.com/Takenoko463/job_list_front",
      content: "就活の進捗状況を共有するサイトです。",
    },
  ];

  return (
    <Row className="Projects" id="projects">
      <h2>Projects</h2>

      <Child title="webApplication" projectArray={projects} />

      <subsection>
        <h3>アルバイト先や掲示板で用いたもの</h3>
        <div class="project">
          <h4>
            <a href="https://github.com/Takenoko463/find_instapage">
              find_instapage
            </a>
          </h4>
          <p>ホームページにインスタグラムがある会社を探す</p>
        </div>
        <div class="project">
          <h4>
            <a href="https://github.com/Takenoko463/cheking_board">
              checking_board
            </a>
          </h4>
          <p>掲示板が更新されるとメールで通知される</p>
        </div>
      </subsection>
    </Row>
  );
}
const Child = ({ title, projectArray }) => {
  const projectList = projectArray.map((project, index) => {
    return (
      <Card key={index} className="mb-2">
        <Card.Body>
          <Card.Title as="h4">
            <a href={project.url}>{project.name}</a>
          </Card.Title>
          <Card.Link href={project.git_hub_url}>github_url</Card.Link>
          <Card.Text>{project.content}</Card.Text>
        </Card.Body>
      </Card>
    );
  });
  return (
    <subsection>
      <h3>{title}</h3>
      {projectList}
    </subsection>
  );
};
export default Projects;
