import JohnDoePic from "../images/john-doe-about.jpg"
import HeroBg from "../images/hero-bg.jpg"

const Home = () =>{
    return(
        <div>
            <section>
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
                <img src={HeroBg} alt="photo d'un developpeur en travail vue de dos" />
            </section>
            <section>
                <h3>A propos</h3>
                <img src={JohnDoePic} alt="photo de John Doe a son bureau" /> {/*j'ecrit l'alt comme si il s'agissait bel et bien d'une image de John Doe et pas juste une stock image*/}
                <article>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nisi beatae nemo cupiditate veniam laborum sequi? Eveniet omnis quas, cumque, dolor tempore vitae quae non, tempora perspiciatis officiis eius vel.</p>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nisi beatae nemo cupiditate veniam laborum sequi? Eveniet omnis quas, cumque, dolor tempore vitae quae non, tempora perspiciatis officiis eius vel.</p>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nisi beatae nemo cupiditate veniam laborum sequi? Eveniet omnis quas, cumque, dolor tempore vitae quae non, tempora perspiciatis officiis eius vel.</p>
                </article>
            </section>
            <section>
                <h3>A propos</h3>
                <article>
                <label>HTML5 <progress value="90" max="100">90 %</progress></label>
                <label>CSS3 <progress value="80" max="100">80 %</progress></label>
                <label>Javascript <progress value="70" max="100">70 %</progress></label> {/*ne pas oublier de passer ça en maj avec le css*/}
                <label>PHP <progress value="60" max="100">60 %</progress></label>
                <label>React <progress value="50" max="100">50 %</progress></label> 
                </article>

            </section>
        </div>
    )
}

export default Home;