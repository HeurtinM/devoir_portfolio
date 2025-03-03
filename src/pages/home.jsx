import JohnDoePic from "../images/john-doe-about.jpg"
import HeroBg from "../images/hero-bg.jpg"
import React, { useEffect, useState } from 'react';

const Home = () =>{

    useEffect(()=>{

        //tout est pris directement de https://www.w3schools.com/howto/howto_css_modals.asp
     // Get the modal
     var modal = document.getElementById("myModal");

     // Get the button that opens the modal
     var btn = document.getElementById("buttonForModal");

     // Get the <span> element that closes the modal
     var span = document.getElementsByClassName("close")[0];

     // When the user clicks on the button, open the modal
     btn.onclick = function() {
      modal.style.display = "block";
     }

     // When the user clicks on <span> (x), close the modal
     span.onclick = function() {
      modal.style.display = "none";
     }

     // When the user clicks anywhere outside of the modal, close it
     window.onclick = function(event) {
     if (event.target === modal) {
     modal.style.display = "none";
     }
     }
    },[])
    
    const[user,SetUser] = useState([]);

    const getUser = async () =>{
        const res = await fetch("https://api.github.com/users/github-john-doe");
        const json = await res.json();
        SetUser(json);
    }


    useEffect(()=>{ //j'ai cru comprendre qu'il était preferable d'utiliser plusieurs hooks useEffect plutot que de mettre differente logique dans un seul
        getUser();
    },[])
    return(
        <div>
            <section>
                <h1>Bonjour, je suis John Doe</h1> 
                <h2>Développeur web full stack</h2>
                <button id="buttonForModal">En savoir plus</button>
                <img src={HeroBg} alt="developpeur en travail vue de dos" />
            </section>
            <div id="myModal" class="modal">
             <div class="modal-content">
              <span class="close">&times;</span>
              <section>
              {user.login}
              {user.location}
              {user.bio}
              {user.public_repos}
              {user.followers}
              {user.following}
              </section>
             </div>
            </div>
            <section>
                <h3>A propos</h3>
                <img src={JohnDoePic} alt="John Doe a son bureau" /> {/*j'ecrit l'alt comme si il s'agissait bel et bien d'une image de John Doe et pas juste une stock image*/}
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