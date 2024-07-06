import './NavigationBar.css'
import logo from '../Body/Images/logo.png'
import fakeLogo from '../Body/Images/fakeLogo.png'
import { Link } from 'react-router-dom';

function NavigationBar() {
  return(
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
      <Link to="/">
        <div class="logo"><img src={fakeLogo} alt="" /></div>
      </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Our Hotels <i class='bx bx-arrow-to-bottom'></i>
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <Link to="/Candisol" className="dropdown-item">Candisol</Link>
                </li>
                <li class="nav-item">
                  <Link to="/ArchieRegency" className="dropdown-item">Archie Regency</Link>
                </li>
                <li class="nav-item">
                  <Link to="/RadissonBlue" className="dropdown-item">Radisson Blue</Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/TheHungryBirds">The Hungry Birds</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Shortcode</a>
            </li>
            
          </ul>
        </div>
        <div className="social-media">
          <ul>
            <li><a href="" ><i class='bx bxl-facebook' ></i></a></li>
            <li><a href="" ><i class='bx bxl-instagram' ></i></a></li>
            <li><a href="" ><i class='bx bxl-linkedin' ></i></a></li>
            <li><a href="" ><i class='bx bxl-twitter' ></i></a></li>
            <Link className='loginButton' to="/Login">Login</Link>
          </ul>
          
          
        </div>
      </div>
    </nav>

  )
}

export default NavigationBar;


