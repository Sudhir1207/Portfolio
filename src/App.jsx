import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import MySkills from "./components/MySkills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="content-container">
      <Navbar />
      <Hero />
      <About />
      <MySkills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
