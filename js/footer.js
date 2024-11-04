let footerHTML = `<footer class="footer-section">
      <div class="container">
          <div class="footer-cta pt-5 pb-5">
              <div class="row m-0">
                  <div class="col-xl-4 col-md-4">
                      <div class="single-cta my-3">
                          <i class="fas fa-map-marker-alt"></i>
                          <div class="cta-text">
                              <h4>Find us</h4>
                              <span>Shop#11, shalimar Plaza, G-9 Markaz, Islamabad, Federal 44000, Pakistan</span>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-4 col-md-4">
                      <div class="single-cta my-3">
                          <i class="fas fa-phone"></i>
                          <div class="cta-text">
                              <h4>Call us</h4>
                              <span>0512251712</span>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-4 col-md-4">
                      <div class="single-cta my-3">
                          <i class="far fa-envelope-open"></i>
                          <div class="cta-text">
                              <h4>Mail us</h4>
                              <span><a style="color: white;" href="mailto:gulzarioptic@gmail.com">gulzarioptic@gmail.com</a></span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="footer-content pt-5 pb-5">
              <div class="row">
                  <div class="col-xl-4 col-lg-4 mb-5">
                      <div class="footer-widget">
                          <div class="footer-logo">
                              <a href="index.html"><img src="https://gulzarioptics.testspace.click/shop_landing_page/shop_logo.png" class="img-fluid" alt="logo"></a>
                          </div>
                          <div class="footer-text">
                              <p>Gulzari Optics is a retailer specializing in stylish eyewear and personalized service to meet diverse vision needs.</p>
                          </div>
                          <div class="footer-social-icon">
                              <span>Follow us</span>
                              <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                              <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                              <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-6 mb-3">
                      <div class="footer-widget">
                          <div class="footer-widget-heading">
                              <h3>Useful Links</h3>
                          </div>
                          <div class="d-flex justify-content-between">
                          <ul class="useful-links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About us</a></li>
                            <li><a href="404.html">Error</a></li>
                            <li><a href="shop.php">Shop</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                          </ul>
                          <ul class="useful-links">
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Women</a></li>
                            <li><a href="#">Kids</a></li>
                            <li><a href="#">Sunglasses</a></li>
                            <li><a href="#">Sale</a></li>
                          </ul>
                          <ul class="useful-links">
                            <li><a href="#">All Glasses</a></li>
                            <li><a href="#">All women's glasses</a></li>
                            <li><a href="#">All men's glasses</a></li>
                            <li><a href="#">All kid's glasses</a></li>
                          </ul>
                         
                        </div>
                      </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 col-md-6 mb-5">
                      <div class="footer-widget">
                          <div class="footer-widget-heading">
                              <h3>Subscribe</h3>
                          </div>
                          <div class="footer-text mb-2">
                              <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                          </div>
                          <div class="subscribe-form">
                              <form action="#">
                                  <input type="text" placeholder="Email Address">
                                  <button><i class="fab fa-telegram-plane"></i></button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="copyright-area">
          <div class="container">
              <div class="row">
                  <div class="col-xl-8 col-lg-8 text-center text-lg-left">
                      <div class="copyright-text">
                          <p>Copyright &copy; Gulzari Optics. All Rights Reserved | Design by <a href="https://webnetpk.com/">Webnet Pakistan Pvt Ltd.</a></p>
                      </div>
                  </div>
                  <div class="col-xl-4 col-lg-4 d-none d-lg-block text-right">
                      <div class="footer-menu">
                          <ul>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">Terms</a></li>
                              <li><a href="#">Privacy</a></li>
                              <li><a href="#">Policy</a></li>
                              <li><a href="#">Contact</a></li>

                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </footer>`;

async function initializeFooter() {
    try {
    //   const footerHTML = await getFooterItem();
      const footerContainer = document.querySelector(".ecomm-footer");
      if (footerContainer) {
        footerContainer.innerHTML = footerHTML; // Append footer HTML to the footer container
      } else {
        console.error("Error: .ecomm-footer element not found in DOM.");
      }
        ;
   
    } catch (error) {
      console.error("Error loading footer:", error);
    }
  }
  
 
  initializeFooter();