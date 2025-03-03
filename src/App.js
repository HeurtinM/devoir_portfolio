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
          <div>John Doe</div>{/* je ne voit pas quel balise semantic mettre pour cette element, donc j'utilise simplement une div pour aider a la manipulation avec le CSS */}

          <nav>
            <a href="/" className={location.pathname === '/' ? 'active' : ''}>Acceuil </a>
            <a href="services" className={location.pathname === '/services' ? 'active' : ''} >Services </a>
            <a href="projects" className={location.pathname === '/projects' ? 'active' : ''}>Portfolio </a>
            <a href="contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact </a>
            <a href="legal_notice" className={location.pathname === '/legal_notice' ? 'active' : ''}>Mentions légals </a>
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
          <section>
            <h2>John Doe</h2>
            <address>
              40 rue Laure Diebold<br/>
              69009 Lyon, France<br/>
              10 20 30 40 50<br/>
              <a href="mailto:">john.doe@gmail.com</a> {/*desactiver le underline et couleur en CSS*/}
            </address>
          </section>
          <section>
            <h2>Liens utiles</h2>
            <nav>
            <a href="/" className={location.pathname === '/' ? 'active' : ''}>Acceuil </a><br/>
            <a href="services" className={location.pathname === '/services' ? 'active' : ''} >Services </a><br/>
            <a href="projects" className={location.pathname === '/projects' ? 'active' : ''}>Portfolio </a><br/>
            <a href="contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact </a><br/>
            <a href="legal_notice" className={location.pathname === '/legal_notice' ? 'active' : ''}>Mentions légals </a> {/*desactiver le underline et couleur en CSS*/}
          </nav>
          <section>
            <a href="https://www.linkedin.com/">Linkedin</a>
            <a href="https://x.com/home?lang=en">Twitter</a>
            <a href="https://github.com/">GitHub</a> {/*remplacer text par icones*/}
          </section>
          </section>
          <section>
            <h2>mes dernières réalisations</h2>
            <article>
              <a href="">Fresh Food</a><br/>
              <a href="">Restaurant Akira</a><br/>
              <a href="">Espace bien-être</a><br/>
              <a href="">SEO</a><br/>
              <a href="">Création d'une API</a><br/>
              <a href="">Maquette d'un site</a><br/> {/*desactiver le underline et couleur en CSS*/}
            </article>
          </section>
        </footer>
      </div>
    )
  }

export default App;