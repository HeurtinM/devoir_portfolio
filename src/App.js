import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/home";
import Services from "./pages/services";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import LegalNotice from "./pages/legal_notice";

const App = () => {
  const location = useLocation(); //le brief envoyait a https://api.reactrouter.com/v7/functions/react_router.NavLink.html pour la feature de changer le liens nav actif de couleur mais je ne me souvient pas avoir vue ça dans les cours et je n'ai pas réussi a bien comprendre, a la place j'utilise un hook pour determiner le "nav" actif et change son nom de class pour style.css
    
    return(
      <div className="container">
        <header>
          <nav>
            <a href="/" className={location.pathname === '/' ? 'active' : ''}>Acceuil</a>
            <a href="services" className={location.pathname === '/services' ? 'active' : ''} >Services</a>
            <a href="projects" className={location.pathname === '/projects' ? 'active' : ''}>Réalisations</a>
            <a href="contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</a>
            <a href="legal_notice" className={location.pathname === '/legal_notice' ? 'active' : ''}>Mentions légals</a>
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


export default App;