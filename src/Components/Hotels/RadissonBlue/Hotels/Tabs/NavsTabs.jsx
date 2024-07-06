import { Amenities } from "./Amenities/Amenities";
import Gallery from "./HotelGallery/Gallery";
import Overview from "./Overview/Overview";
import PropertyRules from "./PropertyRules/PropertyRules";
import Rooms from "./Rooms/Rooms";


export default function NavsTabs() {
  
  return (
    <>
      <nav className='container'>
        <div class="nav justify-content-center mb-3" id="nav-tab" role="tablist">
          <button class="nav-link" id="nav-overview-tab" data-bs-toggle="tab" data-bs-target="#nav-overview" type="button" role="tab" aria-controls="nav-overview" aria-selected="true">
            Overview
          </button>
          <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
            Rooms
          </button>
          <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
            Amenities
          </button>
          <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
            Property Rules
          </button>
          <button class="nav-link" id="nav-gallery-tab" data-bs-toggle="tab" data-bs-target="#nav-gallery" type="button" role="tab" aria-controls="nav-gallery" aria-selected="false">
            Hotel Gallery
          </button>
        </div>
      </nav>
      <div class="container tab-content" id="nav-tabContent">
        <div class="tab-pane fade show" id="nav-overview" role="tabpanel" aria-labelledby="nav-overview-tab" tabindex="0">
          <Overview />
        </div>
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
          <Rooms />
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
          <Amenities />
        </div>
        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
          <PropertyRules />
        </div>
        <div class="tab-pane fade" id="nav-gallery" role="tabpanel" aria-labelledby="nav-gallery-tab" tabindex="0">
          <Gallery />
        </div>
      </div>
    </>
  )
}
