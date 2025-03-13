const Contact = () =>{
    return(
        <div>
            <h1>Contact</h1>
            <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
            <section>
                <form action="">
                    <h2>Formulaire de contact</h2>
                    <input type="text" placeholder="Votre nom"/>
                    <input type="text" placeholder="Votre adresse email"/>
                    <input type="text" placeholder="Votre numero de téléphone"/>
                    <input type="text" placeholder="Sujet"/>
                    <input type="text" placeholder="Votre message"/>
                    <button type="submit">Envoyer</button>
                </form>
                <section>
                    <h2>John Doe</h2>
                    <address>
                        <p><i class="bi bi-map"></i>40 rue Laure Diebold</p>
                        <p><i class="bi bi-geo-alt"></i>69009 Lyon, France</p>
                        <p><i class="bi bi-phone"></i>10 20 30 40 50</p>
                        <p><i class="bi bi-envelope-at"></i>john.doe@gmail.com</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754099!2d4.796403976643224!3d45.77866571240161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sen!2sfr!4v1741866522600!5m2!1sen!2sfr" width="600" height="450" frameborder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>{/*recuperer avec l'option de google map, juste remplacer "style" par "frameborder="0" apres une recharche rapide sur stack overflow */}
                    </address>
                </section>
            </section>
        </div>
    )
}

export default Contact;