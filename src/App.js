import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Projects from "./components/Projects";
import About from "./components/About";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container fluid="md">
          <About />
          <Projects />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
