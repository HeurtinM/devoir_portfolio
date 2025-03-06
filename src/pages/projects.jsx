import coder from "../images/portfolio-imgs/coder.jpg"
import wellBeing from "../images/portfolio-imgs/espace-bien-etre.jpg"
import freshFood from "../images/portfolio-imgs/fresh-food.jpg"
import jpRestaurant from "../images/portfolio-imgs/restaurant-japonais.jpg"
import screen from "../images/portfolio-imgs/screens.jpg"
import seo from "../images/portfolio-imgs/seo.jpg"

const Projects = () =>{
    return(
        <div>
            <h1>Portfolio</h1>
            <h2>Voici quelques-unes de mes réalisations</h2>

            <div class="card">
                <img class="card-img-top" src={freshFood} alt="carton de legumes"></img>
                <div class="card-body">
                    <h3 class="card-title">Fresh Food</h3>
                    <p class="card-text">Site de vente de produits frais en ligne</p>
                    <a href="#" class="btn-show-site">Voir le site</a>
                </div>
                <div class="card-footer">
                    <p class="card-text">Site réalisé avec PHP et MySQL</p>
                </div>
            </div>

            <div class="card">
                <img class="card-img-top" src={jpRestaurant} alt="plateau de sushis"></img>
                <div class="card-body">
                    <h3 class="card-title">Restaurant Akira</h3>
                    <p class="card-text">Site de vente de produits frais en ligne</p>
                    <a href="#" class="btn-show-site">Voir le site</a>
                </div>
                <div class="card-footer">
                    <p class="card-text">Site réalisé avec WordPress</p>
                </div>
            </div>

            <div class="card">
                <img class="card-img-top" src={wellBeing} alt="tête de Buhdda, fleur de lotus et empilement de pierre polies sous fond de coucher de soleil"></img>
                <div class="card-body">
                    <h3 class="card-title">Espace bien-être</h3>
                    <p class="card-text">Site de vente de produits frais en ligne</p>
                    <a href="#" class="btn-show-site">Voir le site</a>
                </div>
                <div class="card-footer">
                    <p class="card-text">Site réalisé avec LARAVEL</p>
                </div>
            </div>

            <div class="card">
                <img class="card-img-top" src={seo} alt="groupe de mots lier au marketing web sur fond bleu avec SEO en gros au centre"></img>
                <div class="card-body">
                    <h3 class="card-title">SEO</h3>
                    <p class="card-text">Amélioration du référencement d'un site e-commerce</p>
                    <a href="#" class="btn-show-site">Voir le site</a>
                </div>
                <div class="card-footer">
                    <p class="card-text">Utilisation des outils SEO</p>
                </div>
            </div>

            <div class="card">
                <img class="card-img-top" src={coder} alt="lignes de code HTML"></img>
                <div class="card-body">
                    <h3 class="card-title">Création d'une API</h3>
                    <p class="card-text">Création d'une API RESTFULL publique</p>
                    <a href="#" class="btn-show-site">Voir le site</a>
                </div>
                <div class="card-footer">
                    <p class="card-text">PHP - SYMFONY</p>
                </div>
            </div>

            <div class="card">
                <img class="card-img-top" src={screen} alt="écrans de pc, laptop et tablette ainsi qu'un clavier"></img>
                <div class="card-body">
                    <h3 class="card-title">Maquette d'un site web</h3>
                    <p class="card-text">Création d'un prototype d'un site</p>
                    <a href="#" class="btn-show-site">Voir le site</a>
                </div>
                <div class="card-footer">
                    <p class="card-text">Réalisé avec FIGMA</p>
                </div>
            </div>
        </div>
    )
}

export default Projects;