$(".next").click(function(){
    if($(".step-wrapper li:last-child").hasClass('completed')){
      alert("completed");
       return
    }
      $(".step-wrapper li.active").addClass("completed").removeClass("active").next('li').addClass("active");  
  });
  
  $(".previous").click(function(){
    if($(".step-wrapper li:first-child").hasClass('active')){
      alert("Already on first step");
       return
    }
      $(".step-wrapper li.active").removeClass("active completed").prev('li').addClass("active").removeClass('completed');
    if($(".step-wrapper li:last-child").hasClass('completed')){
      $(".step-wrapper li:last-child").removeClass('completed').addClass('active')
    }
  });
  
// header
// search-box open close js code
var ecomm_navbar = document.querySelector(".ecomm-navbar");
var  searchBox = document.querySelector(".search-box .fa-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  ecomm_navbar.classList.toggle("showInput");
  if(ecomm_navbar.classList.contains("showInput")){
    searchBox.classList.replace("fa-search" ,"fa-window-close");
  }else {
    searchBox.classList.replace("fa-window-close" ,"fa-search");
  }
});

// sidebar open close js code
var navLinks = document.querySelector(".ecomm-nav-links ");
var menuOpenBtn = document.querySelector(".ecomm-navbar .fa-bars");
var menuCloseBtn = document.querySelector(".ecomm-nav-links .fa-window-close");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";

}

//skeleton loader
function showSkeletonLoader(containerSelector) {
  const skeletonHTML = `
      <div class="skeleton-loader">
          <div class="skeleton-image"></div>
          <div class="skeleton-text"></div>
          <div class="skeleton-text short"></div>
      </div>`;
  $(containerSelector).html(skeletonHTML);
}

function hideSkeletonLoader(containerSelector) {
  $(containerSelector).empty(); // Remove the skeleton loader once data is available
}

// Function to initialize carousel for a specific selector
function initializeCarousel(selector) {
  $(selector).owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    responsiveClass: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      900: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
        margin: 20,
      },
    },
  });
}
