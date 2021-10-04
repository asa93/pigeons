 
 
import { useMemo, useEffect } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import React from "react";

import WalletNav from '../pages/walletNav.tsx'

import $ from 'jquery';

 function Static(){
 

      return (
 
 
      <body data-bs-spy="scroll" data-bs-target="#mainNavbar" data-bs-offset="50" tabindex="0">
      <nav class="navbar" role="navigation">    
        <div class="container-fluid justify-content-end">
            <div class="flex-grow-1 ps-2" style={{zIndex: "5000"}}>
              <a class="navbar-brand" href="#connect">
                <img class="d-inline-block" src={require("./images/pudgypigeons-logo.svg").default.src} alt="Pudgy Pigeons logo" style={{ "height" :"42px"}} />
              </a>
            </div>
            
          <div class="navbar-collapse pt-5 pt-sm-0" id="offcanvas">
              <ul class="navbar-nav" id="mainNavbar">
                <li class="nav-item">
                  <a class="nav-link" href="#welcome">Welcome</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#road-map">Utility Road Map</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#rarity">Rarity</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#faq">FAQ</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#team">Team</a>
                </li>
                <li class="nav-item">
                  <button type="button" data-bs-toggle="offcanvas" data-bs-target="#Terms" aria-controls="Terms" class="btn btn-light nav-link">Terms & Conditions</button>
                </li>
              </ul>
              <ul class="social pb-5">
                <li>
                      <a href="https://discord.com/invite/tPeHSBdmyd" target="_blank" alt="Discord" class="btn">
                        <img src={require("./images/discord-logo-white.svg").default.src} style={{width:"25",height:"25"}}  alt="Discord logo"/>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/Pudgy_Pigeons"  target="_blank" alt="Twitter" class="btn">
                        <img src={require("./images/twitter-bird-white.svg").default.src} style={{width:"25",height:"25"}} alt="Twitter logo"/>
                      </a>
                </li>
            </ul>
          </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#offcanvas" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span>
                  <span></span>
                </span>
                <span></span>
            </button>
        </div>
      </nav>
    
    <WalletNav/>

      <main>
        
        <header id="connect">
          <div class="row my-auto py-7">
            <div class="col mw-xxl pt-9 mt-9 mt-lg-0">
              <div id="main-btn" class="p-1">
                <button class="btn btn-primary position-relative">
                  Connect your wallet
                </button>
              </div>
              <div class="position-absolute w-100 p-6" style={{bottom: 0, left: 0}}>
                  <a class="btn btn-light" href="#welcome">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 33" style={{width:"33"}}><path d="M1.19,7.92a3,3,0,0,1,0-4.22L4,.88a3,3,0,0,1,4.22,0L27.5,20.05,46.77.87A3,3,0,0,1,51,.88L53.81,3.7a3,3,0,0,1,0,4.22l-24.2,24.2a3,3,0,0,1-4.22,0Z" fill="#fff"/></svg>
                  </a>
              </div>
            </div>
          </div>
        </header>
       
        <section id="welcome" class="align-items-start min-h-0">
          <div class="row mw-md">
            <div class="col-12 col-sm-10 col-md-12 p-5 p-md-7 bg-secondary-darken">
                <h1>Welcome</h1>
                    <article class="my-5">
                      <p>Pudgy Pigeons are a collection of programmatically and randomly generated NFTs on the Solana blockchain. The 1st generation of Pudgy Pigeons consists of 8,888 randomly assembled cute and (very) pudgy pigeons from over 250,000 total options and 158 traits hand drawn by French artist and illustrator, Tanguy Jestin. Each Pudgy Pigeon is composed of an unique set of background, face, hat, feather color and clothing. All Pudgy Pigeons’ traits are rare, but some are rarer than others with rarity ranging from common, uncommon, rare, epic, legendary and unique.</p>
                    </article>
            </div>
            <div class="bg-img bg-secondary" style={{"background": "url(images/welcome/welcome-bg-left.png) top left, url(images/welcome/welcome-bg-right.png) top right"}}>
                  <div class="d-flex w-100 justify-content-left align-items-stretch h-100 pt-0 pt-sm-9 pt-xxl-8">
                    <div class="w-50 mh-100 ratio ratio-1x1">
                      <div>
                        
                        <img src={require("./images/welcome/welcome-left.png").default.src} class="h-100"/>
                      </div>
                    </div>
                    <div class="d-block d-sm-none d-lg-flex w-50 mh-100">
                        <img src={require("./images/welcome/welcome-right.png").default.src} class="h-100"/>
                    </div>
                  </div>
              </div>
          </div>
        </section>
    
        <section id="road-map">
          <div class="row mw-xxl">
            <div class="col">
                <h1>Utility Road Map</h1>
                <ul class="mw-xl mx-auto pt-6 px-0">
                    <li>
                          <div class="list-number">
                            <div style={{"backgroundColor": "#c48bfe"}}>
                              <div>1</div>
                            </div>
                          </div>
                          <div class="col flex-grow-1 px-2 px-sm-4 py-2">
                            <h2>Launch Gen 1 Pudgy Pigeons</h2>
                            <span class="w-100 ms-md-n4 d-block" style={{backgroundColor: "#c48bfe", "height": "10px"}}></span>
                            <p class="small py-3 pe-4">We’re going live on Solana on October 9th ! Yes, we are also thinking about a presale mechanism!</p>
                          </div>
                    </li>
                    <li>
                          <div class="list-number">
                            <div style={{backgroundColor: "#c48bfe"}}>
                              <div>2</div>
                            </div>
                          </div>
                          <div class="col flex-grow-1 px-2 px-sm-4 py-2">
                            <h2>Launch of the Pigeons Squad Fund</h2>
                            <span class="w-100 ms-md-n4 d-block" style={{backgroundColor: "#c48bfe", "height": "10px"}}></span>
                            <p class="small py-3 pe-4">A Pigeons Squad Fund will be funded with 10% of the total sales at launch and secondary market royalties afterwards. The Pigeons Squad Fund will be used to add additional members to the Pigeons Squad to continue building and growing the Pudgy Pigeons in the long haul.</p>
                          </div>
                    </li>
                    <li>
                          <div class="list-number">
                            <div style={{backgroundColor: "#c48bfe"}}>
                              <div>3</div>
                            </div>
                          </div>
                          <div class="col flex-grow-1 px-2 px-sm-4 py-2">
                            <h2>Opening of the secondary market</h2>
                            <span class="w-100 ms-md-n4 d-block" style={{"backgroundColor" : "#c48bfe", "height": "10px"}}></span>
                            <p class="small py-3 pe-4">Right after the launch, we will make sure that all the Pudgy Pigeons holders or Pudgy Pigeons aficionados are able to sell and/or buy Pudgy Pigeons on the best available terms. We will discuss with the community to decide on which secondary markets to list our Pudgy Pigeons.</p>
                          </div>
                    </li>
                    <li>
                          <div class="list-number">
                            <div style={{"backgroundColor": "#c48bfe"}}>
                              <div>4</div>
                            </div>
                          </div>
                          <div class="col flex-grow-1 px-2 px-sm-4 py-2">
                            <h2>Pigeons Squad supply control initiative</h2>
                            <span class="w-100 ms-md-n4 d-block" style={{"backgroundColor": "#c48bfe", "height": "10px"}}></span>
                            <p class="small py-3 pe-4">After going live, a part of the Pigeons Squad Fund will be used to mop the Pudgy Pigeons floor on secondary markets. Pudgy Pigeons bought by the Pigeons Squad Fund will then be burnt on a bi-monthly basis in order to reduce supply and reward Pudgy Pigeons holders through a reduced supply and floor price increase.</p>
                          </div>
                    </li>
                    <li>
                          <div class="list-number">
                            <div style={{"backgroundColor": "#c48bfe"}}>
                              <div>5</div>
                            </div>
                          </div>
                          <div class="col flex-grow-1 px-2 px-sm-4 py-2">
                            <h2>Holders reward mechanisms</h2>
                            <span class="w-100 ms-md-n4 d-block" style={{"backgroundColor": "#c48bfe", "height": "10px"}}></span>
                            <p class="small py-3 pe-4">Airdrop? Pudgy Pigeons swag? Special community raffles? You name it! Holders of Pudgy Pigeons will be airdropped a Pudgy Pigeon Egg after the launch. We will develop a very cool line of Pudgy Pigeons swag with giveaways to holders of Pudgy Pigeons. Raffles will be organized for the community with prizes such as hand drawn and signed print copies of Pudgy Pigeons by Tanguy Jestin, the artist and illustrator at the origin of the Pudgy Pigeons. In other words, we’ll blow you away!</p>
                          </div>
                    </li>
                    <li>
                          <div class="list-number">
                            <div style={{"backgroundColor": "#c48bfe"}}>
                              <div>6</div>
                            </div>
                          </div>
                          <div class="col flex-grow-1 px-2 px-sm-4 py-2">
                            <h2>Launch of Gen 2 through breeding and games</h2>
                            <span class="w-100 ms-md-n4 d-block" style={{"backgroundColor": "#c48bfe", "height": "10px"}}></span>
                            <p class="small py-3 pe-4">After the launch of Gen 1, we will work with the community to determine the BEST way to launch Gen 2! Breeding will be implemented to reduce supply even further (Pudgy Pigeons Egg Airdrop will have a big role with breeding). We’ll set up a points system that rewards long time holding and community involvement. A mini-game will be developed for Pudgy Pigeons holders exclusively and will use the points system. A large number of points will give you access to specific traits for Gen 2.</p>
                          </div>
                    </li>
                </ul>
            </div>
          </div>
        </section>
     
        <section id="rarity" class="min-h-0">
          <div class="row mw-xxl">
            <div class="col col-lg-7 p-4 p-sm-7 bg-secondary mw-md">
                <h1>Rarity</h1>
                    <article class="my-5">
                      <p>How rare is my Pudgy Pigeon? To answer this question we’ve established a trait rarity system to differentiate the rarity of each of the Pudgy Pigeons’ hand drawn traits (158 of them). The rarity will range from <span class="badge-sm rounded-pill common text-secondary">common</span>, <span class="badge-sm rounded-pill uncommon">uncommon</span>, <span class="badge-sm rounded-pill rare">rare</span>, <span class="badge-sm rounded-pill epic">epic</span>, <span class="badge-sm rounded-pill legendary">legendary</span> and unique. Each rank from common to legendary has a corresponding % chance of being minted. In addition there are 8 unique Pudgy Pigeons that are celebrations of the Solana community uniquely designed by the artist to celebrate members of the Solana community such as Matty Sino from Sino Global Capital which was the first unique Pudgy Pigeon.</p>
                    </article>
                  <button class="btn btn-primary btn-lg" id="background-tab" type="button" data-bs-toggle="offcanvas" data-bs-target="#Traits" aria-controls="Traits">View traits</button>
            </div>
          
            <div class="col-12 col-lg-5 col-xl-6 ms-lg-n7 mt-4 mt-lg-0 px-4 px-md-8 px-lg-0">
              <div class="mx-auto w-100 ps-lg-6 pe-lg-0 pe-xl-6 ms-xl-n4 mt-lg-0">
                  <div class="ratio ratio-1x1">
                    <img src={require("./images/pigeons/pudgypigeons_gif-min.gif").default.src}  class="rounded-0" loading="lazy"/>
                  </div>
              </div>
            </div>
         
          </div>
      
            <div class="offcanvas offcanvas-end" tabindex="-1" id="Traits" aria-labelledby="Traits">
                <div class="offcanvas-header position-relative w-100 justify-content-center py-0">
                      <button type="button" class="btn btn-sm btn-link align-self-start w-auto me-auto" data-bs-dismiss="offcanvas" aria-label="Close" style={{}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style={{width:"20",height:"20"}}><path d="M33.6,61.92a3.37,3.37,0,0,1-4.79,0L1.28,34.41a3.39,3.39,0,0,1,0-4.8L28.81,2.08a3.37,3.37,0,0,1,4.79,0l3.15,3.15a3.4,3.4,0,0,1-.06,4.85L19.63,26.34H60.32a3.39,3.39,0,0,1,3.4,3.39v4.54a3.39,3.39,0,0,1-3.4,3.39H19.63L36.69,53.92a3.38,3.38,0,0,1,.06,4.85Z"/></svg>
                        Back
                      </button>
                </div>
                <div class="offcanvas-body w-100 pt-0 pt-md-4 d-flex flex-column mw-xxl mx-auto">
                  <div class="w-100">
                    <h5 class="h1">Traits</h5>
                  </div>
                  <div class="row pt-3 my-auto pt-md-4 flex-grow-0 flex-sm-grow-1 align-items-center">
                    <ul class="col-12 col-md-3 nav nav-pills justify-content-center pb-4 mx-auto mt-md-3 me-md-0">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active-rose active" id="background-tab"  data-bs-toggle="pill" data-bs-target="#background" type="button" role="tab" aria-controls="background" aria-selected="true">Background</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active-primary" id="skins-tab"  data-bs-toggle="pill" data-bs-target="#skins" type="button" role="tab" aria-controls="skins" aria-selected="true">Feathers/Skins</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active-orange" id="clothing-tab"  data-bs-toggle="pill" data-bs-target="#clothing" type="button" role="tab" aria-controls="clothing" aria-selected="true">Clothing</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="head-tab"  data-bs-toggle="pill" data-bs-target="#head" type="button" role="tab" aria-controls="head" aria-selected="true">Head</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active-secondary" id="face-tab"  data-bs-toggle="pill" data-bs-target="#face" type="button" role="tab" aria-controls="face" aria-selected="true">Face</button>
                      </li>
                    </ul>
                    <div class="col-12 col-md-9 tab-content pt-0 pt-md-4" id="pills-tabContent">
                        <div class="tab-pane fade" id="head" role="tabpanel" aria-labelledby="pill-head-tab">
                          <div id="carouselhead" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                           
                            </div>
                              <button class="carousel-control-prev" type="button" data-bs-target="#carouselhead" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                              </button>
                              <button class="carousel-control-next" type="button" data-bs-target="#carouselhead" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                              </button>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="face" role="tabpanel" aria-labelledby="pill-face-tab">
                          <div id="carouselface" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                          
                            </div>
                              <button class="carousel-control-prev" type="button" data-bs-target="#carouselface" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                              </button>
                              <button class="carousel-control-next" type="button" data-bs-target="#carouselface" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                              </button>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="skins" role="tabpanel" aria-labelledby="pill-skins-tab">
                          <div id="carouselskins" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                            
                            </div>
                              <button class="carousel-control-prev" type="button" data-bs-target="#carouselskins" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                              </button>
                              <button class="carousel-control-next" type="button" data-bs-target="#carouselskins" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                              </button>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="clothing" role="tabpanel" aria-labelledby="pill-clothing-tab">
                          <div id="carouselclothing" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                             
                            </div>
                              <button class="carousel-control-prev" type="button" data-bs-target="#carouselclothing" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                              </button>
                              <button class="carousel-control-next" type="button" data-bs-target="#carouselclothing" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                              </button>
                            </div>
                        </div>
                        <div class="tab-pane fade active show" id="background" role="tabpanel" aria-labelledby="pill-background-tab">
                          <div id="carouselbackground" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                            
                            </div>
                              <button class="carousel-control-prev" type="button" data-bs-target="#carouselbackground" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                              </button>
                              <button class="carousel-control-next" type="button" data-bs-target="#carouselbackground" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                              </button>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        
        </section>
      
        <section id="faq" class="min-h-0">
          <div class="row mw-lg">
            <div class="col">
                <h1>FAQ</h1>
               
                <div class="d-grid gap-3 pt-6">
                  <div class="d-grid question-collapse">
                      <button class="d-flex align-items-center justify-content-between btn btn-md btn-secondary dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <p class="d-inline-block">Why buy a Pudgy Pigeon</p>
                      </button>
                      <div class="collapse" id="collapseOne">
                        <div class="card card-body">
                          <p>
                          Owning a Pudgy Pigeon means participating in one the cutest and coolest randomized NFT projects on Solana and getting a killer profile picture designed by French artist and illustrator Tanguy Jestin. With the Pigeons Squad Fund we want Pudgy Pigeons to be a community driven and centric project. Pudgy Pigeons holders will be at the center of the project.
                        </p>
                        </div>
                      </div>
                  </div>
                  
                  <div class="d-grid question-collapse">
                      <button class="d-flex align-items-center justify-content-between btn btn-md btn-secondary dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <p>How to buy a Pudgy Pigeon</p>
                      </button>
                      <div class="collapse" id="collapseTwo">
                        <div class="card card-body">
                          Pudgy Pigeon purchasing will happen through a dedicated mint button which will be found at the top of the website. On launch date, connect your wallet and simply click on “MINT”. Boom! You are now part of the Pudgy Pigeons Squad!
                        </div>
                      </div>
                  </div>
           
                  <div class="d-grid question-collapse">
                      <button class="d-flex align-items-center justify-content-between btn btn-md btn-secondary dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <p>When is the drop? How much? Fair Launch?</p>
                      </button>
                      <div class="collapse" id="collapseThree">
                        <div class="card card-body">
                           <p>
                          We are expected to go live on Solana on October 9th! Exact day and time to be determined (follow our social channels for exact day and time). We expect that Pudgy Pigeons will be priced at a flat rate of 2 SOL. We will consult with the community to determine and establish rules to make sure that our launch is fair and all the members of the Pudgy Pigeons Squad are able to get a Pudgy Pigeon.
                        </p>
                        </div>
                      </div>
                  </div>
                  
                  <div class="d-grid question-collapse">
                      <button class="d-flex align-items-center justify-content-between btn btn-md btn-secondary dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <p>Is there a rarity system?</p>
                      </button>
                      <div class="collapse" id="collapseFour">
                        <div class="card card-body">
                           <p>
                          Yes, rarity is at the center of the Pudgy Pigeons project. Traits have been designed with a rarity ranking ranging from common to legendary. All of the Pudgy Pigeons traits and their rarity % can be viewed over in our <a class="btn-link" href="#rarity">“Traits”</a> dedicated section, go take a look at it, we’ve made it fun to go through!
                        </p>
                        </div>
                      </div>
                  </div>
                   
                  <div class="d-grid question-collapse">
                      <button class="d-flex align-items-center justify-content-between btn btn-md btn-secondary dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        <p>What is the Pigeons Squad Fund</p>
                      </button>
                      <div class="collapse" id="collapseFive">
                        <div class="card card-body">
                           <p>
                          The Pigeons Squad Fund is a community dedicated fund which will hold 10% of our total sales and secondary market royalties and will be used to ensure the growth and development of the Pudgy Pigeons project. It will, among other things, be used to mop the Pudgy Pigeons floor on secondary markets.
                        </p>
                        </div>
                      </div>
                  </div>
                
                  <div class="d-grid question-collapse">
                      <button class="d-flex align-items-center justify-content-between btn btn-md btn-secondary dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        <p>What about Secondary Markets? Are there secondary sales royalties?</p>
                      </button>
                      <div class="collapse" id="collapseSix">
                        <div class="card card-body">
                           <p>
                          We are in the process of establishing relationships with the biggest Solana NFT secondary markets. We want to make sure that they have market standard terms that are the best for the Pudgy Pigeons community. There are royalties for secondary sales that are set at 3%. We will be contributing 10% of this back into the Pigeons Squad Fund for future developments and community initiatives.
                        </p>
                        </div>
                      </div>
                  </div>
                 
                  <div class="d-grid question-collapse">
                      <button class="d-flex align-items-center justify-content-between btn btn-md btn-secondary dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        <p>Do I own the Pudgy Pigeon after purchasing?</p>
                      </button>
                      <div class="collapse" id="collapseSeven">
                        <div class="card card-body">
                           <p>
                          Yes! Intellectual property rights are transferred to the buyer with each sale. Go check the Terms & Conditions section for more info.
                        </p>
                        </div>
                      </div>
                  </div>
                
                </div>
            </div>  
          </div>
        </section>
      
        <section id="team" class="min-h-0">
          <div class="row mw-lg">
            <div class="col">
                <h1>Team</h1>
                <div class="row pt-6 justify-content-center">
                  <div class="col-8 col-md-4 pb-5">
                      <div class="p-0 mx-auto">
                        <div class="ratio ratio-1x1">
                          <img src={require("./images/pigeons/pudgypigeons_team_projectmanagement.jpg").default.src}  class="d-block w-100" alt="Liquid, Project Management" loading="lazy"/>
                        </div>
                        <h4 class="badge rounded-pill h5 mt-n4 mx-4 bg-purple">Liquid</h4>
                        <p class="small text-center text-light mb-0">Project Management</p>
                      </div>
                  </div>
                  <div class="col-8 col-md-4 pb-5">
                      <div class="p-0 mx-auto">
                        <div class="ratio ratio-1x1">
                          <img src={require("./images/pigeons/pudgypigeons_team_TanguyJestin.jpg").default.src}  class="d-block w-100" alt="Tanguy Jestin, Art & Design" loading="lazy"/>
                        </div>
                        <h4 class="badge rounded-pill h5 mt-n4 mx-4 bg-primary">Tanguy Jestin</h4>
                        <p class="small text-center text-light mb-0">Art & Design</p>
                        <a href="https://www.instagram.com/tanguyjestin" target="_blank" class="small text-center btn-link text-light">@tanguyjestin</a>
                      </div>
                  </div>
                  <div class="col-8 col-md-4 pb-5">
                      <div class="p-0 mx-auto">
                        <div class="ratio ratio-1x1">
                          <img src={require("./images/pigeons/pudgypigeons_team_development.jpg").default.src}  class="d-block w-100" alt="Ichigo & Team, Development"  />
                        </div>
                        <h4 class="badge rounded-pill h5 mt-n4 mx-4 bg-orange">Ichigo & Team</h4>
                        <p class="small text-center text-light mb-0">Development</p>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </section>
 
      <div class="offcanvas offcanvas-start" tabindex="-1" id="Terms" aria-labelledby="Terms">
                <div class="offcanvas-header position-relative w-100 justify-content-center pt-0 pb-2">
                    <button type="button" class="btn btn-sm btn-link align-self-start w-auto me-auto" data-bs-dismiss="offcanvas" aria-label="Close">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style={{width:"20",height:"20"}}><path d="M33.6,61.92a3.37,3.37,0,0,1-4.79,0L1.28,34.41a3.39,3.39,0,0,1,0-4.8L28.81,2.08a3.37,3.37,0,0,1,4.79,0l3.15,3.15a3.4,3.4,0,0,1-.06,4.85L19.63,26.34H60.32a3.39,3.39,0,0,1,3.4,3.39v4.54a3.39,3.39,0,0,1-3.4,3.39H19.63L36.69,53.92a3.38,3.38,0,0,1,.06,4.85Z"/></svg>
                      Back
                    </button>
                </div>
                <div class="offcanvas-body w-100 pt-0 pt-md-4 d-flex flex-column mw-xl mx-auto">
                  <div class="w-100 text-center">
                    <h5 class="h1">Terms & Conditions</h5>
                  </div>
                  <div class="mw-lg pt-6 pb-2 mx-auto">
                    <p class="mb-5">
                      PLEASE READ THESE TERMS CAREFULLY BEFORE USING THE APP, THE SMART CONTRACTS, OR THE WEBSITE. THESE TERMS GOVERN YOUR USE OF THE APP, THE SMART CONTRACTS, AND THE SITE, UNLESS PUDGY PIGEONS HAS AGREED TO DIFFERENT WRITTEN AGREEMENT WITH YOU TO THE CONTRARY, SIGNED BY BOTH PARTIES. PUDGY PIGEONS IS ONLY WILLING TO MAKE THE APP, THE SMART CONTRACTS, AND THE SITE AVAILABLE TO YOU IF YOU ACCEPT ALL OF THESE TERMS. BY USING THE APP, THE SMART CONTRACTS, THE SITE, OR ANY PART THEREOF, YOU ARE CONFIRMING THAT YOU UNDERSTAND AND AGREE TO BE BOUND BY ALL OF THE TERMS CONTAINED HEREIN.
                    </p>
                    <article class="pb-4">
                      <h2>Terms</h2>
                      <p>Pudgy Pigeons © is a collection of digital artworks (“<strong>NFTs</strong>”) running on the Solana network (the “<strong>Network</strong>”). This website is only an interface allowing participants to exchange the NFTs (the “<strong>Website</strong>”). Users are entirely responsible for the safety and management of their own private Solana wallets and validating all transactions and smart contracts generated by this website before approval (the “<strong>Transactions</strong>”). The Pudgy Pigeons smart contract runs on the Network and as such there is no ability to undo, reverse, or restore any transactions. We shall assume no responsibility whatsoever in relation to the Transactions.</p>
                      <p>The Website and its connected services are provided “as is” and we do not assume any warranty of any kind in relation to the uses of the Website or the Transactions. By using the Website you hereby accept sole responsibility for any and all Transactions involving the NFTs and undertake to comply with the terms and conditions herein (the “<strong>T&Cs</strong>”). We shall not be held liable for any incorrect or failed transactions. In order to use this website, and any related tools it may provide, you agree to hold us harmless for any and all problems, errors, and failures no matter the cause or source of those errors and accept sole responsibility for all Transactions.</p>
                    </article>
                    <article class="pb-4" style={{"textAlign": "justify"}}>
                      <h2>OWNERSHIP AND LIABILITY</h2>
                      <p>(i). <u>Purchasing</u>. Purchasing an NFT entitles the purchaser to such NFT. All rights to the NFT are transferred to the Purchaser and such rights are mediated entirely by the smart contract and the Network. We shall have no right to seize, freeze, or otherwise modify the ownership of any Pudgy Pigeon and shall assume no responsibility or claims relating to such rights.</p>
                      <p>(ii). <u>Personal Use</u>. Subject to your continued compliance with the T&Cs, you shall hold a license to use, copy, and display the purchased NFT, along with any extensions that you choose to create or use, solely for the following purposes: (a) own personal, non-commercial use; (b) as part of a secondary marketplace that permits the purchase and sale of your NFT, provided that the marketplace cryptographically verifies each NFT owner’s rights to display the art for their Pudgy Pigeon to ensure that only the actual owner can display the art; or (c) as part of a third party website or application that permits the inclusion, involvement, or participation of your Pudgy Pigeon, provided that the website/application cryptographically verifies each Pudgy Pigeon owner’s rights to display the art for their Pudgy Pigeon to ensure that only the actual owner can display the art, and provided that the Artartis no longer visible once the owner of the Pudgy Pigeon leaves the website/application.</p>
                      <p>(iii). <u>Commercial Use</u>. Subject to your continued compliance with the T&Cs, you shall have an unlimited, worldwide license to use, copy, and display the purchased NFT for the purpose of creating derivative works based upon the NFT (the “Commercial Use”). Commercial Uses examples may be, among other uses, (a) the use of the NFT to produce and sell merchandise products, it being provided that we also reserve the right to produce and sell merchandise (the “Swag”) and you shall irrevocably and on a no royalty basis allow us to produce and sell the Swag unless mentioned otherwise in writing to us (10 business days prior written notice) (b) displaying copies of the NFT. For the sake of clarity, nothing in this section will be deemed to restrict you from (x) owning or operating a marketplace that permits the use and sale of Pudgy Pigeons generally, provided that the marketplace cryptographically verifies each Pudgy Pigeon owner’s rights to display the art for their Pudgy Pigeon to ensure that only the actual owner can display the Pudgy Pigeon; (y) owning or operating a third party website or application that permits the inclusion, involvement, or participation of Pudgy Pigeons generally, provided that the third party website or application cryptographically verifies each Pudgy Pigeon owner’s rights to display the art for their Pudgy Pigeon to ensure that only the actual owner can display the art, and provided that the art is no longer visible once the owner of the purchased Pudgy Pigeon leaves the website/application; or (z) earning revenue from any of the foregoing.</p>
                      <p>(iv). <u>Liability</u>. YOU UNDERSTAND AND AGREE THAT PUDGY PIGEONS WILL NOT BE LIABLE TO YOU OR TO ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES WHICH YOU MAY INCUR, HOWSOEVER CAUSED AND UNDER ANY THEORY OF LIABILITY, INCLUDING, WITHOUT LIMITATION, ANY LOSS OF PROFITS (WHETHER INCURRED DIRECTLY OR INDIRECTLY), LOSS OF GOODWILL OR BUSINESS REPUTATION, LOSS OF DATA, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR ANY OTHER INTANGIBLE LOSS, EVEN IF PUDGY PIGEONS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. (b) YOU AGREE THAT OUR TOTAL, AGGREGATE LIABILITY TO YOU FOR ANY AND ALL CLAIMS ARISING OUT OF OR RELATING TO THESE T&Cs OR YOUR ACCESS TO OR USE OF (OR YOUR INABILITY TO ACCESS OR USE) ANY PORTION OF THE APP, WHETHER IN CONTRACT, TORT, STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, IS LIMITED TO THE GREATER OF (A) THE AMOUNTS YOU ACTUALLY PAID US UNDER THESE TERMS IN THE 12 MONTH PERIOD PRECEDING THE DATE THE CLAIM AROSE, OR (B) $100.</p>
                      </article>
                  </div>
                </div>
      </div>
   
      </main>
      
          <footer class="container-fluid px-4 pt-2 pb-6 pb-md-4">
              <div class="row align-items-center justify-content-center gap-3">
                <div class="w-auto">
                  <img class=" mt-n2" src={require("./images/pudgypigeons-icon.png").default.src}  height="52px"/>
                </div>
                <p class="text-center small w-auto m-0">Copyright ©2021 Pudgy Pigeons — Tous droits réservés
                  </p>
                   <ul class="social w-auto ps-1" style={{"zIndex": "0" }}>
                    <li>
                      <a href="https://discord.com/invite/tPeHSBdmyd" target="_blank" alt="Discord" class="btn">
                        <img src={require("./images/discord-logo-white.svg").default.src}  style={{width:"25",height:"25"}} alt="Discord logo"/>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/Pudgy_Pigeons"  target="_blank" alt="Twitter" class="btn">
                        <img src={require("./images/twitter-bird-white.svg").default.src}  style={{width:"25",height:"25"}} alt="Twitter logo"/>
                      </a>
                    </li>
                </ul>
              </div>
          </footer>
         
          <script src="https://getbootstrap.com/docs/4.0/assets/js/vendor/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
          <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossorigin="anonymous"></script>

        <script>
          
        </script>
         {/*
          <script src={require("./js/jquery-3.6.0.min.js").default.src}></script>
          <script src={require("./js/bootstrap.bundle.min.js").default.src} type="text/javascript"></script>
          <script src={require("./js/custom.js").default.src} type="text/javascript"></script>
         */}
      </body>
     
      )
    }
  
 

  
  export default Static;
 
 

