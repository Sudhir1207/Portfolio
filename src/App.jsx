import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import MySkills from "./components/MySkills";

function App() {
  return (
    <div className="content-container">
      <Navbar />
      <Hero />
      <About />
      <MySkills />
      <Projects />
    </div>
  );
}

export default App;
