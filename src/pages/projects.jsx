import coder from "../images/portfolio-imgs/coder.jpg"
import wellBeing from "../images/portfolio-imgs/espace-bien-etre.jpg"
import freshFood from "../images/portfolio-imgs/fresh-food.jpg"
import jpRestaurant from "../images/portfolio-imgs/restaurant-japonais.jpg"
import screen from "../images/portfolio-imgs/screens.jpg"
import seo from "../images/portfolio-imgs/seo.jpg"

const Projects = () =>{
    return(
        <div>
            <div className="my-5">
              <h1 className="text-center fw-bold">Portfolio</h1>
              <h2 className="text-center fs-6 text">Voici quelques-une de mes réalisations</h2>
              <hr className="my-4"/>
            </div>
            <div className="container text-center mb-5">
                <div className="row">
                    <div className="col-md-4 my-2">
                        <div className="card">
                            <img className="card-img-top" src={freshFood} alt="carton de legumes"></img>
                            <div className="card-body">
                                <h3 className="card-title">Fresh Food</h3>
                                <p className="card-text">Site de vente de produits frais en ligne</p>
                                <a href="#" className="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer">
                                <p className="card-text text-secondary">Site réalisé avec PHP et MySQL</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-2">
                        <div className="card">
                            <img className="card-img-top" src={jpRestaurant} alt="plateau de sushis"></img>
                            <div className="card-body">
                                <h3 className="card-title">Restaurant Akira</h3>
                                <p className="card-text">Site de vente de produits frais en ligne</p>
                                <a href="#" className="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer">
                                <p className="card-text text-secondary">Site réalisé avec WordPress</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-2">
                        <div className="card">
                            <img className="card-img-top" src={wellBeing} alt="tête de Buhdda, fleur de lotus et empilement de pierre polies sous fond de coucher de soleil"></img>
                            <div className="card-body">
                                <h3 className="card-title">Espace bien-être</h3>
                                <p className="card-text">Site de vente de produits frais en ligne</p>
                                <a href="#" className="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer">
                                <p className="card-text text-secondary">Site réalisé avec LARAVEL</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-2">
                        <div className="card">
                            <img className="card-img-top" src={seo} alt="groupe de mots lier au marketing web sur fond bleu avec SEO en gros au centre"></img>
                            <div className="card-body">
                                <h3 className="card-title">SEO</h3>
                                <p className="card-text">Amélioration du référencement d'un site e-commerce</p>
                                <a href="#" className="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer">
                                <p className="card-text text-secondary">Utilisation des outils SEO</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-2">
                        <div className="card">
                            <img className="card-img-top" src={coder} alt="lignes de code HTML"></img>
                            <div className="card-body">
                                <h3 className="card-title">Création d'une API</h3>
                                <p className="card-text ">Création d'une API RESTFULL publique</p>
                                <a href="#" className="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer">
                                <p className="card-text text-secondary">PHP - SYMFONY</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-2">
                        <div className="card">
                            <img className="card-img-top" src={screen} alt="écrans de pc, laptop et tablette ainsi qu'un clavier"></img>
                            <div className="card-body">
                                <h3 className="card-title">Maquette d'un site web</h3>
                                <p className="card-text">Création d'un prototype d'un site</p>
                                <a href="#" className="btn btn-primary">Voir le site</a>
                            </div>
                            <div className="card-footer">
                                <p className="card-text text-secondary">Réalisé avec FIGMA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>












        </div>
    )
}

export default Projects;