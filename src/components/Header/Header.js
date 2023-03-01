import React, { useState } from 'react'
import '../../assets/css/main.css';
import '../../assets/css/aos.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/bootstrap-icons.css';
import '../../assets/css/jquery-ui.css';
import '../../assets/css/owl.carousel.min.css';

// const toggleDiv = () => {
//   const offcanvasDiv = document.getElementById("offcanvasWithBackdrop");
//   if (offcanvasDiv.style.display === "none") {
//     offcanvasDiv.classList.add("show");
//     offcanvasDiv.style.visibility = "visible";
//     offcanvasDiv.style.display = "block";
//     offcanvasDiv.style.backgroundColor = "#461f75";
//     console.log('if',offcanvasDiv)
//   } else {
//     offcanvasDiv.classList.remove("show");
//     offcanvasDiv.style.display = "none";
//     offcanvasDiv.style.visibility = "hidden";
//     console.log('else',offcanvasDiv)
//   }
// };



const Header = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  const closeDiv = () => {
    setShowDiv(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log('show')

  }
  const styles = {
    backgroundColor: 'white',
  };


  return (
    <>
      <header className="header" id="home"
      style={styles
}
      >
        <div className="container" >
          <div className="sideMenu">
            <button
              type="button"
              className="btn rounded-0 btn-left toggle-slide-right"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
              onClick={toggleDiv}
            >
              <i className="bi bi-text-center" />
            </button>
            {showDiv && (<div
              class="offcanvas offcanvas-start theme-bg-secondary border-0 show"
              tabindex="-1" id="offcanvasWithBackdrop"
              style={{ visibility: 'visible', backgroundColor: "#461f75" }}
              aria-modal="true" role="dialog"
            >
              <div class="p-0">
                <span class="p-0" id="offcanvasLabel"></span>
                <button type="button" onClick={closeDiv} class="btn-close custom-btn-close theme-text-white" data-bs-dismiss="offcanvas" aria-label="Close">
                  <i class="bi bi bi-x-lg"></i>
                </button>
              </div>
              {/* left side menu section */}
              <div className="offcanvas-body p-0 mt-5">
                <ul className="menuList nav flex-column w-100">
                  <li className="nav-item">
                    <a href="index.html" className="position-relative card-effect">
                      <div className="card-box" />
                      <i className="bi bi-house-fill ps-4 pe-2" />
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="index-corporate.html"
                      className="position-relative card-effect"
                    >
                      <div className="card-box" />
                      <i className="bi bi-house-fill ps-4 pe-2" />
                      Home Corporate
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="deals-offers.html"
                      className="position-relative card-effect"
                    >
                      <div className="card-box" />
                      <i className="bi bi-chat-square-heart-fill ps-4 pe-2" />
                      Specials Deals
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#travelDeals" className="position-relative card-effect">
                      <div className="card-box" />
                      <i className="bi bi-bookmark-check-fill ps-4 pe-2" />
                      Travel Deals
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#featuredFlights"
                      className="position-relative card-effect"
                    >
                      <div className="card-box" />
                      <i className="bi bi-bell-fill ps-4 pe-2" />
                      Featured Flights
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#howWork" className="position-relative card-effect">
                      <div className="card-box" />
                      <i className="bi bi-shield-fill-exclamation ps-4 pe-2" />
                      How it Work
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="about.html" className="position-relative card-effect">
                      <div className="card-box" />
                      <i className="bi bi-balloon-fill ps-4 pe-2" />
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="contact.html" className="position-relative card-effect">
                      <div className="card-box" />
                      <i className="bi bi-arrows-move ps-4 pe-2" />
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="blog.html" className="position-relative card-effect">
                      <div className="card-box" />
                      <i className="bi bi-arrow-right-circle-fill ps-4 pe-2" />
                      Blogs
                    </a>
                  </li>
                </ul>
                <div className="mt-5">
                  <p className="d-inline-flex theme-text-white">
                    <i className="bi bi-telephone-fill h4 theme-text-white ps-4 pe-2" />
                    24×7 Customer Support <br /> 1800-313-5699
                  </p>
                </div>
                <div className="mt-3">
                  <p className="d-inline-flex theme-text-white">
                    <i className="bi bi-envelope-fill h4 theme-text-white ps-4 pe-2" />
                    Email us <br /> support@example.com
                  </p>
                </div>
                <p className="ps-4 mb-0 mt-5 theme-text-white">Social Network</p>
                <div className="d-flex social mt-3 ps-4">
                  <a href="#" className="h4 pe-3">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#" className="h4 px-3">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="#" className="h4 px-3">
                    <i className="bi bi-linkedin" />
                  </a>
                  <a href="#" className="h4 px-3">
                    <i className="bi bi-instagram" />
                  </a>
                </div>
              </div>
            </div>)}
          </div>
          <nav className="navbar navbar-expand-md navbar-light py-0 px-0">
            <a className="navbar-brand ms-5" href="index.html">
              Travel Portal
            </a>
            <button
              className="navbar-toggler px-1 btn rounded-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href=""
                  style={{color:'black'}}>
                    <i className="fa-solid fa-hotel" /> Hotels
                  </a>
                </li>
                <li className="nav-item">
                  <a href=""
                  style={{color:'black'}}>
                    <i className="fa fa-plane-departure" /> Flights
                  </a>
                </li>
                <li className="nav-item">
                  <div className="dropdown-container">
                    <div className="dropdown-toggle click-dropdown" onClick={toggleDropdown}
                    style={{color: '#8b3eea'}}>
                      <i className="bi bi-person-circle" /> Account

                    </div>
                    {isOpen &&(<div className="dropdown-menu"
                    style={{ visibility: 'visible',display: 'block'}}>
                      <ul>
                        <li className="nav-item">
                          <a className="dropdown-item" href="signin.html">
                            Login
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="dropdown-item" href="signup.html">
                            Register
                          </a>
                        </li>
                      </ul>
                    </div>)}
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

    </>
)}
export default Header
