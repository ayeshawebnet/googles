<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="css/fontawesome-all.css" rel="stylesheet" />
    <style>
        /* Googlefont Poppins CDN Link */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'Georgia', serif;
}
.page-body{
  min-height: 100vh;
}
.ecomm-nav{ 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: 70px;
  /* background: #3E8DA8; */
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); */
  z-index: 99;
  box-shadow: rgb(111, 111, 111) 0px 0px 10px;
  ;
}
.ecomm-nav .ecomm-navbar{
  height: 100%;
  max-width: 1250px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  /* background: red; */
  padding: 0 50px;
}
.ecomm-navbar .ecomm-logo a{
  font-size: 30px;
  color: #000;
  text-decoration: none;
  font-weight: 600;
}
.ecomm-nav .ecomm-navbar .ecomm-nav-links {
    overflow-y: auto; 
  scrollbar-width: thin; 
  scrollbar-color: black transparent; 

  line-height: 70px;
  height: 100%;
}

.ecomm-nav-links::-webkit-scrollbar {
  width: 6px;
}

.ecomm-nav-links::-webkit-scrollbar-thumb {
  background-color: black; 
  border-radius: 3px;
}

.ecomm-nav-links::-webkit-scrollbar-track {
  background: transparent; /* Transparent track */
}


.ecomm-nav .ecomm-navbar .ecomm-links{
  display: flex;
}
.ecomm-nav .ecomm-navbar .ecomm-links li{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0 14px;
}
.ecomm-nav .ecomm-navbar .ecomm-links li a{
  height: 100%;
  text-decoration: none;
  white-space: nowrap;
  color: #000;
  font-size: 15px;
  font-weight: 500;
}
.ecomm-links li:hover .htmlcss-arrow,
.ecomm-links li:hover .js-arrow{
  transform: rotate(180deg);
}

.ecomm-nav .ecomm-navbar .ecomm-links li .arrow{
  /* background: red; */
  height: 100%;
  width: 22px;
  line-height: 70px;
  text-align: center;
  display: inline-block;
  color: #000;
  transition: all 0.3s ease;
}
.ecomm-nav .ecomm-navbar .ecomm-links li .sub-menu{
  position: absolute;
  top: 70px;
  left: 0;
  line-height: 40px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 4px 4px;
  display: none;
  z-index: 2;
}
.ecomm-nav .ecomm-navbar .ecomm-links li:hover .htmlCss-sub-menu,
.ecomm-nav .ecomm-navbar .ecomm-links li:hover .js-sub-menu{
  display: block;
}
.ecomm-navbar .ecomm-links li .sub-menu li{
  padding: 0 22px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.ecomm-navbar .ecomm-links li .sub-menu a{
  color: #000;
  font-size: 15px;
  font-weight: 500;
}
.ecomm-navbar .ecomm-links li .sub-menu .more-arrow{
  line-height: 40px;
}
.ecomm-navbar .ecomm-links li .htmlCss-more-sub-menu{
  /* line-height: 40px; */
}
.ecomm-navbar .ecomm-links li .sub-menu .more-sub-menu{
  position: absolute;
  top: 0;
  left: 100%;
  border-radius: 0 4px 4px 4px;
  z-index: 1;
  display: none;
}
.ecomm-links li .sub-menu .more:hover .more-sub-menu{
  display: block;
}
.ecomm-navbar .search-box{
  position: relative;
   height: 40px;
  width: 40px;
}
.ecomm-navbar .search-box i{
  position: absolute;
  height: 100%;
  width: 100%;
  line-height: 40px;
  text-align: center;
  font-size: 22px;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
.ecomm-navbar .search-box .input-box{
  position: absolute;
  right: calc(100% - 40px);
  top: 80px;
  height: 60px;
  width: 300px;
  background: #d9d9d9;
  border-radius: 6px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s ease;
}
.ecomm-navbar.showInput .search-box .input-box{
  top: 65px;
  opacity: 1;
  pointer-events: auto;
  background: #d9d9d9;
}
.search-box .input-box::before{
  content: '';
  position: absolute;
  height: 20px;
  width: 20px;
  background:#d9d9d9;
  right: 10px;
  top: -6px;
  transform: rotate(45deg);
}
.search-box .input-box input{
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  height: 35px;
  width: 280px;
  outline: none;
  padding: 0 15px;
  font-size: 16px;
  border: none;
}
.ecomm-navbar .ecomm-nav-links .ecomm-sidebar-logo{
  display: none;
}
.ecomm-navbar .fa-bars{
  display: none;
}
@media (max-width:920px) {
  .ecomm-nav .ecomm-navbar{
    max-width: 100%;
    padding: 0 25px;
  }

  .ecomm-nav .ecomm-navbar .ecomm-logo a{
    font-size: 27px;
  }
  .ecomm-nav .ecomm-navbar .ecomm-links li{
    padding: 0 10px;
    white-space: nowrap;
  }
  .ecomm-nav .ecomm-navbar .ecomm-links li a{
    font-size: 15px;
  }
}
@media (max-width:800px){
  .ecomm-nav{ 
    /* position: relative; */
  }
  .ecomm-navbar .fa-bars{
    display: block;
  }
  .ecomm-nav .ecomm-navbar .ecomm-nav-links {
    position: fixed;
    top: 0;
    left: -100%;
    display: block;
    max-width: 270px;
    width: 100%;
    background:  #fff;
    line-height: 40px;
    padding: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease;
    z-index: 1000;
  }
  .ecomm-navbar .ecomm-nav-links .ecomm-sidebar-logo{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ecomm-sidebar-logo .logo-name{
    font-size: 25px;
    color: rgba(0, 0, 0, 0.9);
    ;
  }
    .ecomm-sidebar-logo  i,
    .ecomm-navbar .fa-bars{
      font-size: 25px;
      color: #000;
    }
  .ecomm-nav .ecomm-navbar .ecomm-links{
    display: block;
    margin-top: 20px;
  }
  .ecomm-nav .ecomm-navbar .ecomm-links li .arrow{
    line-height: 40px;
  }
.ecomm-nav .ecomm-navbar .ecomm-links li{
    display: block;
  }
.ecomm-nav .ecomm-navbar .ecomm-links li .sub-menu{
  position: relative;
  top: 0;
  box-shadow: none;
  display: none;
}
.ecomm-nav .ecomm-navbar .ecomm-links li .sub-menu li{
  border-bottom: none;

}
.ecomm-navbar .ecomm-links li .sub-menu .more-sub-menu{
  display: none;
  position: relative;
  left: 0;
}
.ecomm-navbar .ecomm-links li .sub-menu .more-sub-menu li{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ecomm-links li:hover .htmlcss-arrow,
.ecomm-links li:hover .js-arrow{
  transform: rotate(0deg);
  }
  .ecomm-navbar .ecomm-links li .sub-menu .more-sub-menu{
    display: none;
  }
  .ecomm-navbar .ecomm-links li .sub-menu .more span{
    /* background: red; */
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
  }

  .ecomm-links li .sub-menu .more:hover .more-sub-menu{
    display: none;
  }
  /* .sub-menu {
  display: none; 
} */

.show-submenu {
  display: block !important; 
}

.rotate {
  transform: rotate(180deg); 
}
   .ecomm-nav .ecomm-navbar .ecomm-links li:hover .htmlCss-sub-menu,
  .ecomm-nav .ecomm-navbar .ecomm-links li:hover .js-sub-menu{
    display: none;
  }
/*.ecomm-navbar .ecomm-nav-links .show1 .ecomm-links .htmlCss-sub-menu,
  .ecomm-navbar .ecomm-nav-links .show3 .ecomm-links .js-sub-menu,
  .ecomm-navbar .ecomm-nav-links .show2 .ecomm-links .more .more-sub-menu{
      display: block;
    }
    .ecomm-navbar .ecomm-nav-links .show1 .ecomm-links .htmlcss-arrow,
    .ecomm-navbar .ecomm-nav-links .show3 .ecomm-links .js-arrow{
        transform: rotate(180deg);
}
    .ecomm-navbar .ecomm-nav-links .show2 .ecomm-links .more-arrow{
      transform: rotate(90deg);
    } */
}
@media (max-width:370px){
  .ecomm-nav .ecomm-navbar .ecomm-nav-links {
  max-width: 100%;
} 
}

    </style>
</head>
<body>
    <div id="page-body">
<div class="ecomm-nav">
  <div class="ecomm-navbar">
    <i class='fa fa-bars'></i>
    <!-- <div class="ecomm-logo"><a href="#">Glasses Hub</a></div> -->
    <div class="ecomm-nav-links">
      <div class="ecomm-sidebar-logo">
        <span class="logo-name">Glasses Hub</span>
        <i class='fa fa-window-close' ></i>
      </div>
      <ul class="ecomm-links">
      </ul>
    </div>
    <div class="search-box">
      <!-- <i class='bx bx-search'></i> -->
      <i class='fa fa-search'></i>
       
      <div class="input-box">
        <input type="text" placeholder="Search...">
      </div>
    </div>
  </div>
</div>
</div>
<script src="js/header.js"></script>
<script >
// search-box open close js code
let navbar = document.querySelector(".ecomm-navbar");
let searchBox = document.querySelector(".search-box .fa-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("fa-search" ,"fa-window-close");
  }else {
    searchBox.classList.replace("fa-window-close" ,"fa-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".ecomm-nav-links ");
let menuOpenBtn = document.querySelector(".ecomm-navbar .fa-bars");
let menuCloseBtn = document.querySelector(".ecomm-nav-links .fa-window-close");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";

}

</script>

</body>
</html>