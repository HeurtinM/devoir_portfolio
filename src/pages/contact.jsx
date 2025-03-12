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
                        
                    </address>
                </section>
            </section>
        </div>
    )
}

export default Contact;