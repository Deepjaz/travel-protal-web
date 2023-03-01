import React from 'react'
// import $ from 'jQuery';
// import '../../assets/js/aos';
// import '../../assets/bootstrap.bundle.min';
// import '../../assets/js/jquery-ui';
// import '../../assets/js/main';
const Footer = () => {
  return (
   <>
        <footer className="footer" id="footerSec">
  <div className="container aos-init aos-animate" data-aos="fade-up">
    <div className="row">
      <div className="col-12 col-lg-7 pt-5">
        <div className="row">
          <div className="col-md-4 mt-5">
            <p className="text-uppercase fw-bold mb-4">About Us</p>
            <ul className="fl-menu">
              <li className="nav-item">
                <a href="about.html">About</a>
              </li>
              <li className="nav-item">
                <a href="contact.html">Contact us</a>
              </li>
              <li className="nav-item">
                <a href="#">Bank Details</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mt-5">
            <p className="text-uppercase fw-bold">Legal</p>
            <ul className="fl-menu">
              <li className="nav-item">
                <a href="privacy.html">Privacy</a>
              </li>
              <li className="nav-item">
                <a href="#">T&amp;C</a>
              </li>
              <li className="nav-item">
                <a href="#">Disclaimer</a>
              </li>
              <li className="nav-item">
                <a href="#">Privacy and Cookies</a>
              </li>
              <li className="nav-item">
                <a href="#">Legal</a>
              </li>
              <li className="nav-item">
                <a href="#">Help</a>
              </li>
              <li className="nav-item">
                <a href="#">Feedback</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mt-5">
            <p className="text-uppercase fw-bold">Company</p>
            <ul className="fl-menu">
              <li className="nav-item">
                <a href="#">Partner With Us</a>
              </li>
              <li className="nav-item">
                <a href="#">Services</a>
              </li>
              <li className="nav-item">
                <a href="#">Careers</a>
              </li>
              <li className="nav-item">
                <a href="#">Products</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-5 pt-5">
        <p className="pt-lg-5">
          Get Latest Deals, Upcoming Flight Offers and Cheap Fare
        </p>
        <form className="form">
          <div className="row">
            <div className="col-12">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-3 rounded-0"
                  id="inputPassword2"
                  placeholder="Enter your email address"
                />
                <button
                  type="button"
                  className="btn btn-outline-light rounded-0 custom-btn-subscribe btn-effect"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="row g-0 pt-5">
      <div className="col-12 border-top border-bottom">
        <div className="row">
          <div className="col-12 col-lg-4 text-start py-3">
            <p className="d-inline-flex text-uppercase mb-0">Follow Us</p>
            <div className="d-inline-flex social">
              <a href="#" className="ps-3">
                <i className="bi bi-facebook" />
              </a>
              <a href="#" className="ps-3">
                <i className="bi bi-twitter" />
              </a>
              <a href="#" className="ps-3">
                <i className="bi bi-linkedin" />
              </a>
              <a href="#" className="ps-3">
                <i className="bi bi-instagram" />
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-4 text-lg-center social py-3">
            <p className="d-inline-flex text-uppercase mb-0">Support Center:</p>
            <a href="#" className="botom-link">
              (769) 25698745
            </a>
          </div>
          <div className="col-12 col-lg-4 text-lg-end social py-3">
            <a href="mailto:support@example.com" className="botom-link">
              support@example.com
            </a>
          </div>
        </div>
      </div>
      <div className="col-12">
        <p className="text-center py-5 mb-0 font-small">
          ©2023 Travel Portal. All Rights Reserved.
        </p>
      </div>
    </div>
  </div>
  <p id="back-top" className="back-to-top bg-dark" style={{ display: "block" }}>
    <a href="#top">
      <i className="bi bi-chevron-up" />
    </a>
  </p>
</footer>

    </>
  )
}

export default Footer;