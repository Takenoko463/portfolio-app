import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Projects from "./components/Projects";
import About from "./components/About";
import Container from "react-bootstrap/Container";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container fluid="md">
          <About />
          <Projects />
          <Skills />
          <Contact/>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
