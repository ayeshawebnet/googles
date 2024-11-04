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


