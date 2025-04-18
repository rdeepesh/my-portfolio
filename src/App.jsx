import { lazy, Suspense } from "react";
import "./App.css";
import Preloader from "./Components/UI/Preloader";

const Header = lazy(() => import("./layout/Header"));
const HeroSection = lazy(() => import("./Components/Sections/HeroSection"));
const AboutMe = lazy(() => import("./Components/Sections/AboutMe"));
const Projects = lazy(() => import("./Components/Sections/Projects"));
const Contact = lazy(() => import("./Components/Sections/Contact"));

function App() {
  return (
    <Suspense fallback={<Preloader/>}>
      <Header />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Contact />
    </Suspense>
  );
}

export default App;
