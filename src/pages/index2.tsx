 
 
import { useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import React from "react";

 
  
  class Test extends React.Component<any, any>{
    constructor(props){
      super(props)
    }
  componentDidMount(){
 
  
  }
  
  render(){
      return (
    
     
<div >
<header id="connect">
<div class="row my-auto py-7">
  <div class="col mw-xxl">
    <div id="main-btn" class="p-1">
      <button class="btn btn-primary position-relative">
          <span class="px-1">
          <img src="images/arrow-left.svg" width="11"/>
        </span>  
        Connect your wallet
       <span class="px-1">
          <img src="images/arrow-right.svg" width="11"/>
        </span>  
      </button>
    </div>
    <div class="position-absolute w-100 p-6" style2="bottom: 0; left: 0;">
        <a class="btn btn-light" href="#welcome">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 33" width="33"><path d="M1.19,7.92a3,3,0,0,1,0-4.22L4,.88a3,3,0,0,1,4.22,0L27.5,20.05,46.77.87A3,3,0,0,1,51,.88L53.81,3.7a3,3,0,0,1,0,4.22l-24.2,24.2a3,3,0,0,1-4.22,0Z" fill="#fff"/></svg>
        </a>
    </div>
  </div>
</div>
</header>

<section id="welcome" class="align-items-start">
<div class="row mw-md">
  <div class="col p-4 p-sm-7 bg-secondary">
      <h1>Welcome</h1>
          <article class="my-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu odio, auctor accumsan venenatis fermentum, finibus non quam. Sed enim nisl, varius at sem non, interdum pellentesque dui. Donec accumsan sed urna nec finibus. Sed ut efficitur urna, vel finibus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam placerat facilisis arcu porttitor iaculis. Praesent augue nisi, aliquet sit amet erat et, dignissim euismod risus.</p>
          </article>
  </div>
  <div class="bg-img bg-primary">
    
    <div class="h-50 w-100">
         
            <div class="d-flex justify-content-center h-100">
              <p class="m-auto text-primary" style2="min-height: 250px;">illustration</p>
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
                  <div style2="background-color: #c48bfe;">
                    <div>1</div>
                  </div>
                </div>
                <div class="col flex-grow-1 px-2 px-sm-4 py-2">
                  <h2>Title</h2>
                  <span class="w-100 ms-n4 d-block" style2="background-color: #c48bfe; height: 10px;"></span>
                  <p class="small py-3 pe-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu odio, auctor accumsan venenatis fermentum, finibus non quam. Sed enim nisl, varius at sem non, interdum pellentesque dui. Donec accumsan sed urna nec finibus. Sed ut efficitur urn</p>
                </div>
          </li>
          <li>
                <div class="list-number">
                  <div style2="background-color: #c48bfe;">
                    <div>2</div>
                  </div>
                </div>
                <div class="col flex-grow-1 px-2 px-sm-4 py-2">
                  <h2>Title</h2>
                  <span class="w-100 ms-n4 d-block" style2="background-color: #c48bfe; height: 10px;"></span>
                  <p class="small py-3 pe-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu odio, auctor accumsan venenatis fermentum, finibus non quam. Sed enim nisl, varius at sem non, interdum pellentesque dui. Donec accumsan sed urna nec finibus. Sed ut efficitur urna, vel finibus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
          </li>
          <li>
                <div class="list-number">
                  <div style2="background-color: #c48bfe;">
                    <div>3</div>
                  </div>
                </div>
                <div class="col flex-grow-1 px-2 px-sm-4 py-2">
                  <h2>Title</h2>
                  <span class="w-100 ms-n4 d-block" style2="background-color: #c48bfe; height: 10px;"></span>
                  <p class="small py-3 pe-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu odio, auctor accumsan venenatis fermentum, finibus non quam. Sed enim nisl, varius at sem non, interdum pellentesque dui. Donec accumsan sed urna nec finibus. Sed ut efficitur urn</p>
                </div>
          </li>
          <li>
                <div class="list-number">
                  <div style2="background-color: #c48bfe;">
                    <div>4</div>
                  </div>
                </div>
                <div class="col flex-grow-1 px-2 px-sm-4 py-2">
                  <h2>Title</h2>
                  <span class="w-100 ms-n4 d-block" style2="background-color: #c48bfe; height: 10px;"></span>
                  <p class="small py-3 pe-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu odio, auctor accumsan venenatis fermentum, finibus non quam. Sed enim nisl, varius at sem non, interdum pellentesque dui. Donec accumsan sed urna nec finibus. Sed ut efficitur urna, vel finibus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
          </li>
          <li>
                <div class="list-number">
                  <div style2="background-color: #c48bfe;">
                    <div>5</div>
                  </div>
                </div>
                <div class="col flex-grow-1 px-2 px-sm-4 py-2">
                  <h2>Title</h2>
                  <span class="w-100 ms-n4 d-block" style2="background-color: #c48bfe; height: 10px;"></span>
                  <p class="small py-3 pe-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu odio, auctor accumsan venenatis fermentum, finibus non quam. Sed enim nisl, varius at sem non, interdum pellentesque dui. Donec accumsan sed urna nec finibus. Sed ut efficitur urn</p>
                </div>
          </li>
          <li>
                <div class="list-number">
                  <div style2="background-color: #c48bfe;">
                    <div>6</div>
                  </div>
                </div>
                <div class="col flex-grow-1 px-2 px-sm-4 py-2">
                  <h2>Title</h2>
                  <span class="w-100 ms-n4 d-block" style2="background-color: #c48bfe; height: 10px;"></span>
                  <p class="small py-3 pe-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu odio, auctor accumsan venenatis fermentum, finibus non quam. Sed enim nisl, varius at sem non, interdum pellentesque dui. Donec accumsan sed urna nec finibus. Sed ut efficitur urna, vel finibus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
          </li>
      </ul>
  </div>
</div>
</section>

<section id="rarity" class="min-h-0">
<div class="row mw-xxl">
  <div class="col col-lg-6 p-4 p-sm-7 bg-secondary mw-md">
      <h1>Rarity</h1>
          <article class="my-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu odio, auctor accumsan venenatis fermentum, finibus non quam. Sed enim nisl, varius at sem non, interdum pellentesque dui. Donec accumsan sed urna nec finibus. Sed ut efficitur urna, vel finibus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </article>
        <button class="btn btn-primary btn-lg" type="button" data-bs-toggle="offcanvas" data-bs-target="#Traits" aria-controls="Traits">View traits</button>
  </div>

  <div class="col-12 col-lg-6 ms-lg-n7 mt-4 mt-lg-0 px-4 px-md-8 px-lg-0">
    <div class="mx-auto w-100 ps-lg-6 pe-lg-0 pe-xl-6 ms-xl-n4 mt-lg-0">
        <div class="ratio ratio-1x1">
       
                <div class="d-flex justify-content-center" style2="background-color:#ffcf6e;">
                  <p class="m-auto text-primary">illustration</p>
                </div>
               
        </div>
    </div>
  </div>
 
</div>

 {/* carousel */}

</section>

<section id="faq" class="min-h-0">
<div class="row mw-lg">
  <div class="col">
      <h1>FAQ</h1>
   
      <div class="d-grid gap-3 pt-6">
        <div class="d-grid question-collapse">
            <button class="d-flex align-items-center justify-content-between btn btn-md btn-secondary dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              <p class="d-inline-block">Question #1</p>
            </button>
            <div class="collapse" id="collapseOne">
              <div class="card card-body">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu odio, auctor accumsan venenatis fermentum, finibus non quam. Sed enim nisl, varius at sem non, interdum pellentesque dui. Donec accumsan sed urna nec finibus. Sed ut efficitur urna, vel finibus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              </div>
            </div>
        </div>
     
        <div class="d-grid question-collapse">
            <button class="d-flex align-items-center justify-content-between btn btn-md btn-secondary dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <p>Question #2</p>
            </button>
            <div class="collapse" id="collapseTwo">
              <div class="card card-body">
                This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
              </div>
            </div>
        </div>
      
        <div class="d-grid question-collapse">
            <button class="d-flex align-items-center justify-content-between btn btn-md btn-secondary dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <p>Question #3</p>
            </button>
            <div class="collapse" id="collapseThree">
              <div class="card card-body">
                 <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu odio, auctor accumsan venenatis fermentum, finibus non quam. Sed enim nisl, varius at sem non, interdum pellentesque dui. Donec accumsan sed urna nec finibus. Sed ut efficitur urna, vel finibus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              </div>
            </div>
        </div>
      
        <div class="d-grid question-collapse">
            <button class="d-flex align-items-center justify-content-between btn btn-md btn-secondary dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <p>Question #4</p>
            </button>
            <div class="collapse" id="collapseFour">
              <div class="card card-body">
                 <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu odio, auctor accumsan venenatis fermentum, finibus non quam. Sed enim nisl, varius at sem non, interdum pellentesque dui. Donec accumsan sed urna nec finibus. Sed ut efficitur urna, vel finibus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              </div>
            </div>
        </div>
      
        <div class="d-grid question-collapse">
            <button class="d-flex align-items-center justify-content-between btn btn-md btn-secondary dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              <p>Question #5</p>
            </button>
            <div class="collapse" id="collapseFive">
              <div class="card card-body">
                 <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu odio, auctor accumsan venenatis fermentum, finibus non quam. Sed enim nisl, varius at sem non, interdum pellentesque dui. Donec accumsan sed urna nec finibus. Sed ut efficitur urna, vel finibus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
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
                <img src="images/pigeons/head/head-brain-10.jpg" class="d-block w-100" alt=""/>
              </div>
              <h4 class="badge rounded-pill bg-purple h5 mt-n4 mx-4">Nom Prénom</h4>
              <p class="small text-center text-light mb-0">Job</p>
            </div>
        </div>
        <div class="col-8 col-md-4 pb-5">
            <div class="p-0 mx-auto">
              <div class="ratio ratio-1x1">
                <img src="images/pigeons/head/head-brain-10.jpg" class="d-block w-100" alt=""/>
              </div>
              <h4 class="badge rounded-pill bg-purple h5 mt-n4 mx-4">Nom Prénom</h4>
              <p class="small text-center text-light mb-0">Job</p>
              <a href="#" traget="_blank" class="small text-center btn-link text-light">@instagram</a>
            </div>
        </div>
        <div class="col-8 col-md-4 pb-5">
            <div class="p-0 mx-auto">
              <div class="ratio ratio-1x1">
                <img src="images/pigeons/head/head-brain-10.jpg" class="d-block w-100" alt=""/>
              </div>
              <h4 class="badge rounded-pill bg-purple h5 mt-n4 mx-4">Nom Prénom</h4>
              <p class="small text-center text-light mb-0">Job</p>
            </div>
        </div>
      </div>
  </div>
</div>
</section>
 {/* terms */}
 {/* footer */}
 </div>

 
      )
    }
  
  }

  
  export default Test;
 
 

