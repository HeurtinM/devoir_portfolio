const Contact = () =>{
    return(
        <div>
            <div className="my-5">
              <h1 className="text-center fw-bold">Contact</h1>
              <p className="text-center fs-6 text">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
              <hr className="my-4"/>
            </div>
            <div className="container mb-5 border border-4 shadow">
                <div className="row">
                    <section className="col-md-6">
                        <form action="">
                            <h2 className="my-3 border-bottom border-primary mb-5 fw-bold">Formulaire de contact</h2>
                            <div class="form-group">
                                <input type="text" placeholder="Votre nom" className="form-control my-2" required/>
                            </div>
                            <div class="form-group">
                                <input type="email" placeholder="Votre adresse email" className="form-control my-2" required/>
                            </div>
                            <div class="form-group">
                                <input type="tel" placeholder="Votre numero de téléphone" className="form-control my-2" required/>
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Sujet" className="form-control my-2" required/>                                
                            </div>
                            <div class="form-group">
                                <textarea type="text" placeholder="Votre message" className="form-control my-2" rows={14} required/>                                
                            </div>
                            <div className="text-center mb-3">
                                <button type="submit" className="btn btn-primary">Envoyer</button>
                            </div>

                        </form>
                    </section>
                    <section className="col-md-6">
                    <h2 className="my-3 border-bottom border-primary fw-bold">Mes coordonnées</h2>
                        <p className="mb-1 mt-5 fs-4"> John Doe</p>
                        <address>
                            <p className="mb-1"><i class="bi bi-map"></i> 40 rue Laure Diebold</p>
                            <p className="mb-1"><i class="bi bi-geo-alt"></i> 69009 Lyon, France</p>
                            <p className="mb-1"><i class="bi bi-phone"></i> 10 20 30 40 50</p>
                            <p className="mb-1"><i class="bi bi-envelope"></i> john.doe@gmail.com</p> {/* <i class="bi bi-envelope-at"></i> qui est demandé par la maquette ne fonctionne pas, je l'ai donc remplacer par cette icone */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754099!2d4.796403976643224!3d45.77866571240161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sen!2sfr!4v1741866522600!5m2!1sen!2sfr" width="600" height="450"  className="col-12" frameborder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>{/*recuperer avec l'option de google map, juste remplacer "style" par "frameborder="0" apres une recharche rapide sur stack overflow */}
                        </address>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Contact;