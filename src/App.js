import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Projects from "./components/Projects";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container fluid="md">
          <Row>
            <Projects />
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
