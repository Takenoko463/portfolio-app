import './App.css';
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Projects/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
