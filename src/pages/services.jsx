import banner from "../images/banner.jpg" 

const Services = () =>{
    return(
        <div>
            <img src={banner} alt="bannière bleu avec des lignes lumineuses" />
            <div className="my-5">
              <h1 className="text-center fw-bold">Mon offre de services</h1>
              <h2 className="text-center fs-6 text">Voici les prestations sur lesquelles je peux intervenir</h2>
              <hr className="my-4"/>
            </div>
            <div className="container text-center mb-5 ">
              <div className="row">
                <div className="col-md-4 my-3">
                  <div className="card h-100">  
                    <i className="bi bi-brush fs-1 text-primary my-4"></i>
                    <div className="card-body">
                      <h3 className="card-title">UX Design</h3>
                        <p className="card-text">L’UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l’utilisateur au centre des préoccupations.
                           L’objectif est de rendre l’utilisation agréable et le plus fluide et agréable possible.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 my-3">
                  <div className="card h-100">
                    <i className="bi bi-code-slash fs-1 text-primary my-4"></i>
                    <div className="card-body">
                      <h3 className="card-text">Développement web</h3>
                        <p className="card-text">Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 my-3">
                  <div className="card h-100">
                   <i className="bi bi-search fs-1 text-primary my-4"></i>
                   <div className="card-body">
                      <h3 className="card-title">Référencement</h3>
                      <p class="card-text">Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L’objectif est d’obtenir un maximum de visiteurs qualifiés sur le site.</p>
                   </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Services;