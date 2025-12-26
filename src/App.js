import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { lazy, Suspense } from "react";

// Lazy loaded components
const About = lazy(() => import("./Components/About"));
const Project = lazy(() => import("./Components/Project"));
const Skills = lazy(() => import("./Components/Skills"));
const Contact = lazy(() => import("./Components/Contact"));

function App() {
  return (
    <>
      <Navbar />

      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Hero />
        <About />
        <Project />
        <Skills />
        <Contact />
      </Suspense>
    </>
  );
}

export default App;
