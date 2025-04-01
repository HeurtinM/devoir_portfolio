import React from 'react';
import { Helmet } from 'react-helmet';

const LegalNotice = () =>{
    return(
        <div>
            <Helmet>
                <meta name="robots" content="noindex" /> 
            </Helmet>
            <div className="my-5">
              <h1 className="text-center fw-bold">Mentions légals</h1>
              <hr className="my-4"/>
            </div>
            <section className="accordion w-75 mx-auto my-5">
                <div class="accordion" id="legalNoticeAccordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Editeur du site
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#legalNoticeAccordion">
                            <div class="accordion-body">
                                <h3 className="mb-1">John Doe</h3>
                                <address>
                                <p className="mb-1"><i class="bi bi-map"></i> 40 rue Laure Diebold</p>
                                <p className="mb-1"><i class="bi bi-geo-alt"></i> 69009 Lyon, France</p>
                                <p className="mb-1"><i class="bi bi-phone"></i> 10 20 30 40 50</p>
                                <p className="mb-1"><i class="bi bi-envelope"></i> john.doe@gmail.com</p> {/*pareille que pour la page contact, "envelope-at" ne semble plus fonctionner */}
                                </address>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Hébergeur
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#legalNoticeAccordion">
                            <div class="accordion-body">
                                <h3 className="fw-bold">alwaysdata</h3>
                                <address>
                                    <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                                    <i class="bi bi-globe"></i> <a href="https://www.alwaysdata.com/en/">www.alwaysdata.com</a>
                                </address>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Crédits
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#legalNoticeAccordion">
                            <div class="accordion-body">
                                <h3 className="fw-bold">Crédits</h3>
                                <p>Ce site a été réalisé par Manu Heurtin, étudiant au <a href="https://www.centre-europeen-formation.fr/">Centre Européen de Formation</a></p>
                                <p className="fst-italic">Les images utilisées sur ce site sont libre de droit et ont été obtenues sur le site <a href="https://pixabay.com/">Pixabay</a></p>{/*je ne pense pas pertinant d'utiliser la balise <i> pour ces textes */}
                                <p className="fst-italic">La favicon de ce site a été fournie par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe">John doe Icons erstellt von Freepik - Flaticon</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="min-vh-20"></div> {/*espace de remplissage pour que le footer reste en bas de la page meme si tout les menu accordéons sont fermé */}
        </div>
    )
}

export default LegalNotice;