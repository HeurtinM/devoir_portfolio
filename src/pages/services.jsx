import banner from "../images/banner.jpg"

const Services = () =>{
    return(
        <div>
            <img src={banner} alt="bannière bleu avec des lignes lumineuses" />
            <h1>Services</h1>
            <div class="card">  {/*adaptation de l'exemple donné ici: https://getbootstrap.com/docs/4.0/components/card/ */}
             <i class="bi bi-brush"></i>
             <div class="card-body">
               <h2 class="card-title">UX Design</h2>
                <p class="card-text">L’UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l’utilisateur au centre des préoccupations.
                  L’objectif est de rendre l’utilisation agréable et le plus fluide et agréable possible.</p>
            </div>
           </div>
           <div class="card">
             <i class="bi bi-code-slash"></i>
             <div class="card-body">
               <h2 class="card-text">Développement web</h2>
                <p class="card-text">Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).</p>
            </div>
           </div>
           <div class="card">
             <i class="bi bi-search"></i>
             <div class="card-body">
               <h2 class="card-title">Référencement</h2>
                <p class="card-text">Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L’objectif est d’obtenir un maximum de visiteurs qualifiés sur le site.</p>
            </div>
           </div>
        </div>
    )
}

export default Services;