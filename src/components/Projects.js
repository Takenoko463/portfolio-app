function Projects() {
  return (
    <section className="Projects" id="projects">
      <h2>Projects</h2>
      <subsection>
        <h3>WebApplication</h3>
        <div class="project">
          <h4>
            <a href="https://github.com/Takenoko463/prompter">Prompter</a>
          </h4>
          <p>ChatGPTなどのテキスト型AIへの質問文を収集するサイトです。</p>
        </div>
        <div class="project">
          <h4>
            <a href="https://github.com/Takenoko463/emotion-analyst-front">
              emotion-analyst
            </a>
          </h4>
          <p>感情を分析し、円グラフで感情の割合を出力するサイトです。</p>
        </div>
        <div class="project">
          <h4>
            <a href="https://github.com/Takenoko463/job_list_front">job-list</a>
          </h4>
          <p>就活の進捗状況を共有するサイトです。</p>
        </div>
      </subsection>
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
export default Projects;
