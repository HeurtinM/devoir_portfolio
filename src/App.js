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
      <div className="container-fluid px-0"> {/*tout les elements bootstrap dans ce projet sont pris directement de la documentation bootstraps https://getbootstrap.com/docs/5.3/getting-started/introduction/ puis adaptés */}
        <header>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
            <a class="navbar-brand" href="/">John Doe</a> {/**renvoie a l'acceuil, un peu redondant mais simplifie grandement la replication de la maquette */}
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a href="/" className={"nav-link " + (location.pathname === '/' ? 'active' : '' )}>Acceuil</a> {/*j'ai besoin de 2 classnames une pour bootstrap et une pour changer le CSS si la page est celle active.*/}
                  </li>
                  <li class="nav-item">
                    <a href="services" className={"nav-link " + (location.pathname === '/services' ? 'active' : '')} >Services </a>
                  </li>
                  <li class="nav-item">
                    <a href="projects" className={"nav-link " + (location.pathname === '/projects' ? 'active' : '')}>Portfolio </a>
                  </li>
                  <li class="nav-item">
                    <a href="contact" className={"nav-link " + (location.pathname === '/contact' ? 'active' : '')}>Contact </a>
                  </li>
                  <li class="nav-item">
                    <a href="legal_notice" className={"nav-link " + (location.pathname === '/legal_notice' ? 'active' : '')}>Mentions légals </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="services"  element={<Services/>}></Route>
              <Route path="projects"  element={<Projects/>}></Route>
              <Route path="contact"  element={<Contact/>}></Route>
              <Route path="legal_notice"  element={<LegalNotice/>}></Route>
            </Routes>
        </main>
        <footer class="bg-dark text-white ">
          <div class="row w-75 mx-auto px-auto">
            <section class="col-12 col-md-4 px-md-5 py-5">
              <h2>John Doe</h2>
              <address>
                40 rue Laure Diebold<br/>
                69009 Lyon, France<br/>
                10 20 30 40 50<br/>
                <a href="mailto:">john.doe@gmail.com</a>
              </address>
              <section >
                  <a href="https://github.com/" className="icon"><i class="bi bi-github"></i></a>
                  <a href="https://x.com/home?lang=en" className="icon"><i class="bi bi-twitter"></i></a>
                  <a href="https://www.linkedin.com/" className="icon"><i class="bi bi-linkedin"></i></a>

                </section>
            </section>
            <section class="col-12 col-md-4 px-md-5 py-5">
              <h2>Liens utiles</h2>
              <nav>
              <a href="/" className={location.pathname === '/' ? 'active' : ''}>Acceuil </a><br/>
              <a href="services" className={location.pathname === '/services' ? 'active' : ''} >Services </a><br/>
              <a href="projects" className={location.pathname === '/projects' ? 'active' : ''}>Portfolio </a><br/>
              <a href="contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact </a><br/>
              <a href="legal_notice" className={location.pathname === '/legal_notice' ? 'active' : ''}>Mentions légals </a>
            </nav>
            </section>
            <section class="col-12 col-md-4 px-md-5 py-5">
              <h2 className="noWrap">Mes dernières réalisations</h2>
              <article>
                <a href="">Fresh Food</a><br/>
                <a href="">Restaurant Akira</a><br/>
                <a href="">Espace bien-être</a><br/>
                <a href="">SEO</a><br/>
                <a href="">Création d'une API</a><br/>
                <a href="">Maquette d'un site</a><br/>
              </article>
            </section>
          </div>
        </footer>
      </div>
    )
  }

export default App;