import './App.css';
import './index.css';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import AboutMe from './components/aboutMe.js';
import Projects from './components/projects.js';
import Certificates from './components/certificates.js';
import Contact from './components/contact.js';

function App() {
  return (
   <div className="w-full min-h-screen overflow-x-hidden">
   <Navbar />
   <Home />
   <AboutMe />
    <Projects />
    <Certificates />
    <Contact />
   </div>
  );
}

export default App;
