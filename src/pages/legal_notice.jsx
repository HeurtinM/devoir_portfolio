import React from 'react';
import { Helmet } from 'react-helmet';

const LegalNotice = () =>{
    return(
        <div>
            <Helmet>
                <meta name="robots" content="noindex" /> 
            </Helmet>
            <h1>Mentions légals</h1>
            <div class="accordion" id="legalNoticeAccordion"> {/*HTML du menu accordéon pris de: https://getbootstrap.com/docs/5.3/components/accordion/ puis adapté */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Editeur du site
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#legalNoticeAccordion">
                    <div class="accordion-body">
                        <h3>John Doe</h3>
                        <address>
                        <p><i class="bi bi-map"></i>40 rue Laure Diebold</p>
                        <p><i class="bi bi-geo-alt"></i>69009 Lyon, France</p>
                        <p><i class="bi bi-phone"></i>10 20 30 40 50</p>
                        <p><i class="bi bi-envelope"></i>john.doe@gmail.com</p> {/*pareille que pour la page contact, "envelope-at" ne semble plus fonctionner */}
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
                        <h3>alwaysdata</h3>
                        <address>
                            <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                            <i class="bi bi-globe"></i><a href="https://www.alwaysdata.com/en/">www.alwaysdata.com</a> {/* retirer le text cap en css */}
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
                        <p>Ce site a été réalisé par Manu Heurtin, étudiant au <a href="https://www.centre-europeen-formation.fr/">Centre Européen de Formation</a></p> {/* retirer le text cap en css, idem en dessous*/}
                        <p className="italics">Les images utilisées sur ce site sont libre de droit et ont été obtenues sur le site <a href="https://pixabay.com/">Pixabay</a></p>{/*je ne pense pas pertinant d'utiliser la balise <i> pour ces textes */}
                        <p className="italics">La favicon de ce site a été fournie par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe">John doe Icons erstellt von Freepik - Flaticon</a></p>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default LegalNotice;