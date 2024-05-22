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
    <section className="Projects" id="projects">
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
    </section>
  );
}
const Child = ({ title, projectArray }) => {
  const projectList = projectArray.map((project, index) => {
    return (
      <div class="project" key={index}>
        <h4>
          <a href={project.url}>{project.name}</a>
        </h4>
        <p>github_url:{project.git_hub_url}</p>
        <p>{project.content}</p>
      </div>
    );
  });
  return <subsection><h3>{title}</h3>{projectList}</subsection>;
};
export default Projects;
