import "bootstrap/dist/css/bootstrap.min.css"; // BootstrapのCSSをインポート
import Row from "react-bootstrap/Row";

function About() {
  return (
    <Row className="py-5" id="about">
      <h2 className="text-center">About Me</h2>
      <p class="text-justify rounded-bottom bg-light">電気通信大学を2024年3月に中退。以降、テックキャンプに通いwebアプリケーション開発を実装からデプロイまで1通り学びました。</p>
    </Row>
  );
}

export default About;