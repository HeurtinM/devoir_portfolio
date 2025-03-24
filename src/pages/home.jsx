import JohnDoePic from "../images/john-doe-about.jpg"
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


    useEffect(()=>{ //j'ai cru comprendre qu'il était preferable d'utiliser plusieurs hooks useEffect plutot que de mettre differente logiques dans un seul
        getUser();
    },[])
    return(
        <div>
         <div className="bgImage container-fluid d-flex justify-content-center align-items-center">
            <section className="text-center">
                <h1 className="display-1 fw-bold text-light">Bonjour, je suis John Doe</h1> 
                <h2 className="display-3 fw-bold text-light">Développeur web full stack</h2>
                <button id="buttonForModal" className="btn btn-danger">En savoir plus</button>
            </section>
            <div id="myModal" className="modal">
             <div class="modal-content">
              <span class="close">&times;</span>
              <section>
                <img src={user.avatar_url} alt="image de profile de John Doe" /> {/* je ne decrit pas l'avatar dans l'alt car il pourrait changer*/}
                {user.login}
                {user.location}
                {user.bio}
                {user.public_repos}
                {user.followers}
                {user.following}
              </section>
             </div>
            </div>
         </div>
            <div className="container border shadow my-3">
                <div className="row">
                    <section className="col-sm-6">
                        <h3 className="fw-bold border-bottom border-primary border-5 pb-2 my-4">A propos</h3>
                        <img src={JohnDoePic} alt="John Doe a son bureau" className="img-fluid w-100"/>  {/* j'ecrit l'alt comme si il s'agissait bel et bien d'une image de John Doe et non pas juste une stock image */}
                        <article>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nisi beatae nemo cupiditate veniam laborum sequi? Eveniet omnis quas, cumque, dolor tempore vitae quae non, tempora perspiciatis officiis eius vel.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nisi beatae nemo cupiditate veniam laborum sequi? Eveniet omnis quas, cumque, dolor tempore vitae quae non, tempora perspiciatis officiis eius vel.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nisi beatae nemo cupiditate veniam laborum sequi? Eveniet omnis quas, cumque, dolor tempore vitae quae non, tempora perspiciatis officiis eius vel.</p>
                        </article>
                    </section>
                    <section className="col-sm-6">
                        <h3 className="fw-bold border-bottom border-primary border-5 pb-2 my-4">Mes compétences</h3>
                        <article>
                            <section className="my-4">
                                <h4>HTML5 90%</h4>
                                <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </section>
                            <section className="my-4">
                                <h4>CSS3 80%</h4>
                                <div className="progress">
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </section>
                            <section className="my-4">
                                <h4>JAVASCRIPT 70%</h4>
                                <div className="progress">
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </section>
                            <section className="my-4">
                                <h4>PHP 60%</h4>
                                <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </section>
                            <section className="my-4">
                                <h4>REACT 50%</h4>
                                <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </section>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    )
}



export default Home;