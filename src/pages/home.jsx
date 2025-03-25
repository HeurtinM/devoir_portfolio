import JohnDoePic from "../images/john-doe-about.jpg"
import React, { useEffect, useState } from 'react';

const Home = () =>{
    
    const[user,SetUser] = useState([]);

    const getUser = async () =>{
        const res = await fetch("https://api.github.com/users/github-john-doe");
        const json = await res.json();
        SetUser(json);
    }


    useEffect(()=>{
        getUser();
    },[])
    return(
        <div>
         <div className="bgImage container-fluid d-flex justify-content-center align-items-center">
            <section className="text-center">
                <h1 className="display-1 fw-bold text-light">Bonjour, je suis John Doe</h1> 
                <h2 className="display-3 fw-bold text-light">Développeur web full stack</h2>
                <button className="btn btn-danger" type="button" data-bs-toggle="modal" data-bs-target="#myModal">En savoir plus</button>
            </section>
            <div id="myModal" className="modal fade" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered container-fluid modal-lg">
                    <div className="modal-content bg-dark text-white">
                        <div className="modal-header">
                            <h3 className="modal-title fs-5 fw-bold" id="myModalLabel">Mon profile GitHub</h3>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-5 my-4 ms-4">
                                    <img src={user.avatar_url} alt="avatar du profile de John Doe" className="img-fluid"/> {/* je ne decrit pas l'avatar dans l'alt car il pourrait changer*/}
                                </div>
                                <div className="col-sm-6 my-4"> 
                                    <div class="border-bottom mb-2">
                                        <p><i class="bi bi-person"></i> <a href={user.html_url}>{user.name}</a></p>
                                    </div>
                                    <div class="border-bottom mb-2">
                                        <p><i class="bi bi-geo-alt"> </i>{user.location}</p>
                                    </div>
                                    <div class="border-bottom mb-2">
                                        <p ><i class="bi bi-card-text"> </i>{user.bio}</p>
                                    </div>
                                    <div class="border-bottom mb-2">
                                        <p ><i class="bi bi-box"></i> Repositories: {user.public_repos}</p>
                                    </div>
                                    <div class="border-bottom mb-2">
                                        <p ><i class="bi bi-people"></i> Followers: {user.followers}</p>
                                    </div>
                                    <div>
                                        <p ><i class="bi bi-people"></i> Following: {user.following}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        </div>
                    </div>
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