
$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const productCode = urlParams.get("productCode");
  initializeProductSummary();
  getProductDetails(productCode);
  
  // getProductDetails("20112068");
  
});

function initializeProductSummary() {
  const productSummaryHTML = `
    <div id="product-summary-content">
      <h2 class="product-title" id="product-title"></h2>
      <div class="user-ratings d-flex align-items-center">
        <div id="p-stars" class="p-stars"></div>
        <a href="#reviews" rel="nofollow" class="total-review ml-2">
          (<span id="review-count" class="count"><i>...loading</i></span> customer reviews)
        </a>
      </div>
      <div class="price">
        <h3><span>Rs. </span><span id="product-price"></span></h3>
        <del>Rs. <span id="del-price"></span></del>
      </div>
      <div class="product-details mb-4">
        <h3>Product Details</h3>
        <p id="product-description" class="description"></p>
        <a href="javascript:void(0);" class="read-more">Read More</a>
        <a href="javascript:void(0);" class="show-less" style="display: none;">Show Less</a>
      </div>
    </div>
  `;
  $("#product-summary").html(productSummaryHTML);
}

async function getProductDetails(productCode) {
  try {
    // showLoading();

    const productDetail = await fetchProductDetails(productCode);
    if (!productDetail) {
      throw new Error("Product not found.");
    }
    console.log("productDetail==>", productDetail);
    displayProductInfo(productDetail);
    await Promise.all([
      fetchProductImages(productDetail.productImg),
      fetchFilterOptions(productDetail)
    ]);

    updateRatings(4, 25);
    showProductSummary();
  } catch (error) {
    handleError(error, "#product-summary", "Failed to load product details.");
  }
}

// Display product title, price, and description
function displayProductInfo({ productInfo }) {
  
  $("#product-title").text(productInfo.title);
  $("#product-price").text(productInfo.base_price);
  $("#del-price").text(productInfo.base_price + 500);
  $("#product-description").text(productInfo.product_desc);
}

// Update star ratings and review count
function updateRatings(rating, reviewCount) {
  const starHtml = Array.from({ length: 5 })
    .map((_, i) =>
      i < rating
        ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="p-star">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" class="p-star">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>`
    )
    .join("");

  $("#p-stars").html(starHtml);
  $("#review-count").text(reviewCount);
}

// Fetch and display images and thumbnails
async function fetchProductImages(productImages) {
  try {
    displaySlideImages(productImages);
    displayThumbnailImages(productImages);
    initializeSliders(productImages.length);
  } catch (error) {
    console.log("Failed to load product images:", error);
    $(".gallery-slider").append("<p class='text-center'>Could not load product images.</p>");
  }
}

// Display main slider images
function displaySlideImages(images) {
  const slideImagesHTML = `
    <div class="swiper-wrapper">
      ${images.map(data => `<div class="swiper-slide"><img src="${data.image}" alt="Product Image" /></div>`).join("")}
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>`;
  $(".gallery-slider").html(slideImagesHTML);
}

// Display thumbnail images
function displayThumbnailImages(images) {
  const thumbnailImagesHTML = `
    <div class="swiper-wrapper">
      ${images.map(data => `<div class="swiper-slide"><img src="${data.image}" alt="Product Thumbnail" /></div>`).join("")}
    </div>`;
  $(".gallery-thumbs").html(thumbnailImagesHTML);
}

// Initialize Swiper sliders and link them
function initializeSliders(totalSlides) {
  const slider = new Swiper(".gallery-slider", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: totalSlides,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const thumbs = new Swiper(".gallery-thumbs", {
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
  });

  slider.controller.control = thumbs;
  thumbs.controller.control = slider;
}

// Helper functions for UI and error handling
function showLoading() {
  $(".loading-spinner").show();
  $("#product-summary").hide();
}

function showProductSummary() {
  $(".loading-spinner").hide();
  $("#product-summary").fadeIn();
}

function handleError(error, selector, message) {
  $(".loading-spinner").hide();
  $(selector).html(`<p>${message}</p>`);
  console.error(error.message || error);
}


document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.product-details').forEach((productDetail) => {
      const description = productDetail.querySelector('.description');
      const readMoreLink = productDetail.querySelector('.read-more');
      const showLessLink = productDetail.querySelector('.show-less');

      if (description && readMoreLink && showLessLink) {
          readMoreLink.style.display = "inline-block"
          showLessLink.style.display = "none"

          readMoreLink.addEventListener('click', () => {
              description.style.webkitLineClamp = 'unset'; 
              description.style.overflow = 'visible';
              readMoreLink.style.display = 'none';
              showLessLink.style.display = 'inline-block'; 
          });

          showLessLink.addEventListener('click', () => {
            description.style.webkitLineClamp = '2'; 
            description.style.overflow = 'hidden';
            showLessLink.style.display = 'none';
            readMoreLink.style.display = 'inline-block'; 
        });
      }
  });
});