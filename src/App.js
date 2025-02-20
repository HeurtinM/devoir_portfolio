import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Services from "./pages/services";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import LegalNotice from "./pages/legal_notice";

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <header>
          <nav>
            <a href="/">Acceuil</a>
            <a href="services">Services</a>
            <a href="projects">Réalisations</a>
            <a href="contact">Contact</a>
            <a href="legal_notice">Mentions légals</a>
          </nav>

          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="services"  element={<Services/>}></Route>
            <Route path="projects"  element={<Projects/>}></Route>
            <Route path="contact"  element={<Contact/>}></Route>
            <Route path="legal_notice"  element={<LegalNotice/>}></Route>
          </Routes>
        </header>
        <main>

        </main>
        <footer>
          
        </footer>
      </div>
    )
  }
}

export default App;