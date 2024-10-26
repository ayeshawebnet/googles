async function getProductDetails(productCode) {
  try {
    // showLoading(); // Show loader

    // Fetch product details
    const productDetail = await fetchProductDetails(productCode);

    if(productDetail){
    // Display product information and other details
    displayProductInfo(productDetail);
    displayProductPrice(productDetail.productInfo.base_price);
    displayProductDescription(productDetail.productInfo.product_desc);
  
    // Fetch additional options and update ratings & images
    await fetchFilterOptions(productDetail);
    updateRatings(4, 25); // Example rating, replace with actual 
    await fetchProductImages(productDetail.productImg);
  }
  else{
    $("#product-summary").html(`<p>Product not found</p>`);
  }
    // showProductSummary(); // Hide loader, show product details
  } catch (error) {
    handleError(error, "#product-summary", "Failed to load product details.");
  }
}

// Fetch product details from API
async function fetchProductDetails(productCode) {
  const response = await $.ajax({
    url: "https://gulzarioptics.testspace.click/interface/index.php",
    method: "POST",
    data: JSON.stringify({
      jsonrpc: "2.0",
      method: "products.getProductDetails",
      params: { code: productCode, sub_shopCode: "gulzarioptics" },
      id: "k1PQf2Rp",
    }),
    dataType: "json",
  });

if (response?.error) throw new Error(response.error.message || "Error loading product details");
return response?.result || {};
}

// Display product title, price, and description
function displayProductInfo({ productInfo }) {
  const titleHTML = `<h2 class="product-title">${productInfo.title}</h2>`;
  $("#product-summary").prepend(titleHTML);
}

function displayProductPrice(price) {
  const priceHTML = `
    <div class="price">
      <h3><span>Rs. </span>${price}</h3>
      <del>Rs. ${price + 200}</del>
    </div>`;
  $("#product-summary").append(priceHTML);
}

function displayProductDescription(description) {
  const descriptionHTML = `
    <div class="product-details mb-4">
      <h3>Product Details</h3>
      <p>${description}</p>
    </div>`;
  $("#product-summary").append(descriptionHTML);
}


// Display star ratings and review count
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
  displaySlideImages(productImages);
  displayThumbnailImages(productImages);
  initializeSliders(productImages.length);
}

// Display main slider images
function displaySlideImages(images) {
  
  const slideImagesHTML = `
    <div class="swiper-wrapper">
      ${images.map(
          (data) =>
            `<div class="swiper-slide"><img src="${data.image}" alt="Product Image" /></div>`
          )
        .join("")}
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>`;
    
  $(".gallery-slider").html(slideImagesHTML);
  
}

// Display thumbnail images
function displayThumbnailImages(images) {
  console.log("myimages",images);
  const thumbnailImagesHTML = `
    <div class="swiper-wrapper">
      ${images
        .map(
          (data) =>
            `<div class="swiper-slide"><img src="${data.image}" alt="Product Image" /></div>`
        )
        .join("")}
    </div>`;
  $(".gallery-thumbs").html(thumbnailImagesHTML);
  
}

// Initialize Swiper sliders
function initializeSliders(totalSlides) {
  var slider = new Swiper(".gallery-slider", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: totalSlides,
    navigation: { 
      nextEl: ".swiper-button-next", 
      prevEl: ".swiper-button-prev" 
    },
  });

  var thumbs = new Swiper(".gallery-thumbs", {
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
  });

  slider.controller.control = thumbs;
  thumbs.controller.control = slider;
}

// Helper functions
function showLoading() {
  $(".loading-spinner").show();
  $("#product-list").hide();
}

function showProductSummary() {
  $(".loading-spinner").hide();
  $("#product-summary").fadeIn();
}

function handleError(error, selector, message) {
  $(".loading-spinner").hide();
  $(selector).html(`<p>${message}</p>`);
  console.error(error);
}

// Start fetching product details
getProductDetails("20112068");
