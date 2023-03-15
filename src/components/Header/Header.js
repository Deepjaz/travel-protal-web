import React, { useState } from 'react'
import { Link } from 'react-router-dom';

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
              Travel Portal
              onClick={toggleDiv}
            >
              <i className="bi bi-text-center" />
            </button>
            {showDiv && (<div
              className="offcanvas offcanvas-start theme-bg-secondary border-0 show"
              style={{ visibility: 'visible', backgroundColor: "#461f75" }}
              aria-modal="true" role="dialog"
            >
              <div className="p-0">
                <span className="p-0" id="offcanvasLabel"></span>
                <button type="button" onClick={closeDiv} className="btn-close custom-btn-close theme-text-white" data-bs-dismiss="offcanvas" aria-label="Close">
                  <i className="bi bi bi-x-lg"></i>
                </button>
              </div>
              {/* left side menu section */}
              <div className="offcanvas-body p-0 mt-5">
                <ul className="menuList nav flex-column w-100">
                  <li className="nav-item">
                    <Link to="/" className="position-relative card-effect">
                      <div className="card-box" />
                      <i className="bi bi-house-fill ps-4 pe-2" />
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="index-corporate.html"
                      className="position-relative card-effect"
                    >
                      <div className="card-box" />
                      <i className="bi bi-house-fill ps-4 pe-2" />
                      Home Corporate
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="deals-offers.html"
                      className="position-relative card-effect"
                    >
                      <div className="card-box" />
                      <i className="bi bi-chat-square-heart-fill ps-4 pe-2" />
                      Specials Deals
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#travelDeals" className="position-relative card-effect">
                      <div className="card-box" />
                      <i className="bi bi-bookmark-check-fill ps-4 pe-2" />
                      Travel Deals
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#featuredFlights"
                      className="position-relative card-effect"
                    >
                      <div className="card-box" />
                      <i className="bi bi-bell-fill ps-4 pe-2" />
                      Featured Flights
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#howWork" className="position-relative card-effect">
                      <div className="card-box" />
                      <i className="bi bi-shield-fill-exclamation ps-4 pe-2" />
                      How it Work
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="about.html" className="position-relative card-effect">
                      <div className="card-box" />
                      <i className="bi bi-balloon-fill ps-4 pe-2" />
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="contact.html" className="position-relative card-effect">
                      <div className="card-box" />
                      <i className="bi bi-arrows-move ps-4 pe-2" />
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="blog.html" className="position-relative card-effect">
                      <div className="card-box" />
                      <i className="bi bi-arrow-right-circle-fill ps-4 pe-2" />
                      Blogs
                    </Link>
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
                  <Link to="#" className="h4 pe-3">
                    <i className="bi bi-facebook" />
                  </Link>
                  <Link to="#" className="h4 px-3">
                    <i className="bi bi-twitter" />
                  </Link>
                  <Link to="#" className="h4 px-3">
                    <i className="bi bi-linkedin" />
                  </Link>
                  <Link to="#" className="h4 px-3">
                    <i className="bi bi-instagram" />
                  </Link>
                </div>
              </div>
            </div>)}
          </div>
          <nav className="navbar navbar-expand-md navbar-light py-0 px-0">
            <Link className="navbar-brand ms-5" to="/">
              Travel Portal
            </Link>
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
                  <Link to="/hotels"
                  style={{color:'black'}}>
                    <i className="fa-solid fa-hotel" /> Hotels
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/"
                  style={{color:'black'}}>
                    <i className="fa fa-plane-departure" /> Flights
                  </Link>
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
                          <Link className="dropdown-item" to="/sign-in">
                            Login
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="dropdown-item" to="sign-up">
                            Register
                          </Link>
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
