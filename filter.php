<div class="search-hotel">
    <!-- <h3 class="agileits-sear-head">Search Here..</h3> -->
    <form action="#" method="post">
        <input class="form-control" type="search" name="search" placeholder="Search here..." required="" />
        <button class="btn1">
            <i class="fas fa-search"></i>
        </button>
        <div class="clearfix"></div>
    </form>
</div>
<!-- price range -->
<div class="range">
    <h3 class="agileits-sear-head">Price range</h3>
    <ul class="dropdown-menu6">
        <li>
            <div class="slider-range"></div>
            <input type="text" id="amount" style="border: 0; color: #ffffff; font-weight: normal" />
        </li>
    </ul>
</div>
<!-- //price range -->
<!--preference -->
<div class="left-side">
    <h3 class="agileits-sear-head">Style</h3>
    <ul>
        <li>
            <div class="checkbox-wrapper">
                <input type="checkbox" class="check" id="check1" />
                <label for="check1" class="label">
                    <svg width="35" height="35" viewBox="0 0 95 95">
                        <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                        <g transform="translate(0,-952.36222)">
                            <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" stroke-width="3" fill="none" class="path1"></path>
                        </g>
                    </svg>
                    <span>Classic</span>
                </label>
            </div>
        </li>
        <li>
            <div class="checkbox-wrapper">
                <input type="checkbox" class="check" id="check2" />
                <label for="check2" class="label">
                    <svg width="35" height="35" viewBox="0 0 95 95">
                        <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                        <g transform="translate(0,-952.36222)">
                            <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" stroke-width="3" fill="none" class="path1"></path>
                        </g>
                    </svg>
                    <span>Modern</span>
                </label>
            </div>
        </li>
        <li>
            <div class="checkbox-wrapper">
                <input type="checkbox" class="check" id="check3" />
                <label for="check3" class="label">
                    <svg width="35" height="35" viewBox="0 0 95 95">
                        <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                        <g transform="translate(0,-952.36222)">
                            <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" stroke-width="3" fill="none" class="path1"></path>
                        </g>
                    </svg>
                    <span>Retro/Vintage</span>
                </label>
            </div>
        </li>
        <li>
            <div class="checkbox-wrapper">
                <input type="checkbox" class="check" id="check4" />
                <label for="check4" class="label">
                    <svg width="35" height="35" viewBox="0 0 95 95">
                        <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
                        <g transform="translate(0,-952.36222)">
                            <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" stroke-width="3" fill="none" class="path1"></path>
                        </g>
                    </svg>
                    <span>Sports</span>
                </label>
            </div>
        </li>
    </ul>
</div>
<!-- // preference -->
<!-- Gender -->
<div class="left-side">
    <h3 class="agileits-sear-head">Gender</h3>
    <div class="gender-card">
        <form action="#">
            <div class="radio-wrapper">
                <input class="gender-radio-buttons" id="male" value="male" name="gender" type="radio" />
                <label class="genderlabel malebutton" for="male">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 90" class="smallsvg malesmallsvg">
                        <circle stroke-width="6" stroke="#76E3FE" r="22" cy="25" cx="25"></circle>
                        <path stroke-linecap="round" stroke-width="6" stroke="#76E3FE" d="M25 47L25 87"></path>
                        <path stroke-linecap="round" stroke-width="6" stroke="#76E3FE" d="M25 86.6958L38.6958 73"></path>
                        <path stroke-linecap="round" stroke-width="6" stroke="#76E3FE" d="M11 73L24.6958 86.6958"></path>
                    </svg>
                    Male
                </label>
                <input class="gender-radio-buttons" id="female" value="female" name="gender" type="radio" />
                <label class="genderlabel femalebutton" for="female">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 90" class="smallsvg">
                        <circle stroke-width="6" stroke="#F57CB3" r="22" cy="25" cx="25"></circle>
                        <path stroke-linecap="round" stroke-width="6" stroke="#F57CB3" d="M25 47L25 87"></path>
                        <path stroke-linecap="round" stroke-width="6" stroke="#F57CB3" d="M12 73H38"></path>
                    </svg>
                    Female
                </label>
                <input class="gender-radio-buttons" id="other" value="other" name="gender" type="radio" />
                <label class="genderlabel otherbutton" for="other">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 78 75" class="smallsvg other-gender">
                        <path stroke-linecap="round" stroke-width="6" stroke="#9B4AED" d="M73.4657 16.6983L48.2159 16.6984L19.9816 58.0001L2.99911 58"></path>
                        <path stroke-linecap="round" stroke-width="6" stroke="#9B4AED" d="M73.1641 16.698L59.4705 2.99992"></path>
                        <path stroke-linecap="round" stroke-width="6" stroke="#9B4AED" d="M59.4648 30.696L73.1629 17.0024"></path>
                        <path stroke-linecap="round" stroke-width="6" stroke="#9B4AED" d="M74.022 57.8121L51.1697 57.8121L19.9997 16.9999L3 17"></path>
                        <path stroke-linecap="round" stroke-width="6" stroke="#9B4AED" d="M73.748 57.8123L61.3547 71.51"></path>
                        <path stroke-linecap="round" stroke-width="6" stroke="#9B4AED" d="M61.3496 43.8147L73.747 57.5079"></path>
                    </svg>
                    Kids
                </label>
            </div>
        </form>
    </div>
</div>
<!-- //Gender -->
<!-- brand -->
<div class="left-side">
    <h3 class="agileits-sear-head">Brand</h3>
    <div class="mydict">
        <div>
            <label>
                <input type="radio" name="radio" checked="" />
                <span>Ray-Ban</span>
            </label>
            <label>
                <input type="radio" name="radio" />
                <span>Oakley</span>
            </label>
            <label>
                <input type="radio" name="radio" />
                <span>Gucci</span>
            </label>
            <label>
                <input type="radio" name="radio" />
                <span>Prada</span>
            </label>
            <label>
                <input type="radio" name="radio" />
                <span>Warby Parker</span>
            </label>
        </div>
    </div>
    <!-- //brand -->
</div>
<!-- //brand -->
<!-- size -->
<div class="left-side">
    <h3 class="agileits-sear-head">Size</h3>
    <div class="mydict">
        <div>
            <label>
                <input type="radio" name="radio0" checked="" />
                <span>Small</span>
            </label>
            <label>
                <input type="radio" name="radio0" />
                <span>Medium</span>
            </label>
            <label>
                <input type="radio" name="radio0" />
                <span>Large</span>
            </label>
        </div>
    </div>
</div>
<!-- //size -->
<!-- Frame Shape -->
<div class="left-side">
    <h3 class="agileits-sear-head">Frame Shape</h3>
    <div class="mydict">
        <div>
            <label>
                <input type="radio" name="radio1" checked="" />
                <span>Round</span>
            </label>
            <label>
                <input type="radio" name="radio1" />
                <span>Square</span>
            </label>
            <label>
                <input type="radio" name="radio1" />
                <span>Rectangle</span>
            </label>
            <label>
                <input type="radio" name="radio1" />
                <span>Cat-eye</span>
            </label>
            <label>
                <input type="radio" name="radio1" />
                <span>Oval</span>
            </label>
        </div>
    </div>
</div>
<!-- //Frame Shape -->
<!-- Frame Material -->
<div class="left-side">
    <h3 class="agileits-sear-head">Frame Material</h3>
    <div class="mydict">
        <div>
            <label>
                <input type="radio" name="radio2" checked="" />
                <span>Metal</span>
            </label>
            <label>
                <input type="radio" name="radio2" />
                <span>Plastic</span>
            </label>
            <label>
                <input type="radio" name="radio2" />
                <span>Titanium</span>
            </label>
            <label>
                <input type="radio" name="radio2" />
                <span>Acetate</span>
            </label>
            <label>
                <input type="radio" name="radio2" />
                <span>Wood</span>
            </label>
        </div>
    </div>
</div>
<!-- //Frame Material-->
<!-- Lens Type -->
<div class="left-side">
    <h3 class="agileits-sear-head">Lens Type</h3>
    <div class="mydict">
        <div>
            <label>
                <input type="radio" name="radio3" checked="" />
                <span>Prescription</span>
            </label>
            <label>
                <input type="radio" name="radio3" />
                <span>Non-prescription</span>
            </label>
            <label>
                <input type="radio" name="radio3" />
                <span>Blue Light</span>
            </label>
            <!-- <label>
                                 <input type="radio" name="radio3">
                                 <span>Polarized</span>
                                 </label> -->
        </div>
    </div>
</div>
<!-- //Lens Type -->
<!-- reviews -->
<div class="customer-rev left-side">
    <h3 class="agileits-sear-head">Customer Review</h3>
    <ul>
        <li>
            <a href="#">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <span>5.0</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <span>4.0</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-half-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <span>3.5</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <span>3.0</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star-half-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <span>2.5</span>
            </a>
        </li>
    </ul>
</div>
<!-- //reviews -->
<!-- deals -->
<div class="deal-leftmk left-side">
    <h3 class="agileits-sear-head">Special Deals</h3>
    <div class="special-sec1">
        <div class="img-deals">
            <img src="images/s1.jpg" alt="" />
        </div>
        <div class="img-deal1">
            <h3>Farenheit (Grey)</h3>
            <a href="single.html">$575.00</a>
        </div>
        <div class="clearfix"></div>
    </div>
    <div class="special-sec1">
        <div class="col-xs-4 img-deals">
            <img src="images/s2.jpg" alt="" />
        </div>
        <div class="col-xs-8 img-deal1">
            <h3>Opium (Grey)</h3>
            <a href="single.html">$325.00</a>
        </div>
        <div class="clearfix"></div>
    </div>
    <div class="special-sec1">
        <div class="col-xs-4 img-deals">
            <img src="images/m2.jpg" alt="" />
        </div>
        <div class="col-xs-8 img-deal1">
            <h3>Azmani Round</h3>
            <a href="single.html">$725.00</a>
        </div>
        <div class="clearfix"></div>
    </div>
    <div class="special-sec1">
        <div class="col-xs-4 img-deals">
            <img src="images/m4.jpg" alt="" />
        </div>
        <div class="col-xs-8 img-deal1">
            <h3>Farenheit Oval</h3>
            <a href="single.html">$325.00</a>
        </div>
        <div class="clearfix"></div>
    </div>
</div>
<!-- //deals -->