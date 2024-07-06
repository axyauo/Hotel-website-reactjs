import React from 'react'
import './TheHungryBirds.css'
import Resturant from './Resturant/Resturant'
import Banquet from './Banquet/Banquet'
import FooterHungryBirds from './FooterHungryBirds/FooterHungryBirds'

export default function TheHungryBirds() {
  return (
    <>
       <nav className='container-fluid '>
        <div class="nav_ justify-content-center_ nav_btn" id="nav-tab" role="tablist">
            <div className="row">
                <div className="col-6 p-0">
                   <button class="nav-link active" id="nav-resturant-tab" data-bs-toggle="tab" data-bs-target="#nav-resturant" type="button" role="tab" aria-controls="nav-resturant" aria-selected="true">
                    Resturant
                </button> 
                </div>
                <div className="col-6 p-0">
                    <button class="nav-link" id="nav-banquet-tab" data-bs-toggle="tab" data-bs-target="#nav-banquet" type="button" role="tab" aria-controls="nav-banquet" aria-selected="true">
                        Banquet
                    </button> 
                </div>
            </div>
        </div>
      </nav>
      <div class="container-fluid_ tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-resturant" role="tabpanel" aria-labelledby="nav-resturant-tab" tabindex="0">
          <Resturant />
        </div>
        <div class="tab-pane fade show" id="nav-banquet" role="tabpanel" aria-labelledby="nav-banquet-tab" tabindex="0">
          <Banquet />
        </div>
      </div> 
      <footer>
        <FooterHungryBirds />
      </footer>
    </>
  )
}
