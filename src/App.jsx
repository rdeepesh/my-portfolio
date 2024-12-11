import './App.css';
import AboutMe from './Components/Sections/AboutMe';
import Contact from './Components/Sections/Contact';
import HeroSection from './Components/Sections/HeroSection';
import Header from './layout/Header';

function App() {

  return (
    <>
      <Header/>
      <HeroSection/>
      <AboutMe/>
      <Contact/>
    </>
  )
}

export default App
