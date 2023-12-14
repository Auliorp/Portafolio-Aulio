import Sidenav from "./components/Sidenav";
import Home from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
//se arma la estructura visual de la pagina web.
function App() {
   return (
      <div>
         <Sidenav />
         <Home />
         <Work />
         <Projects />
         <AboutMe />
         <Contact />
      </div>
   );
}

export default App;
