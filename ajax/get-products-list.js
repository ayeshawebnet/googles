async function renderShopComponent(products) {
  try {
    console.log("Pagination==>", products);
    // Setup pagination
    currentPage = 1;
    setupPagination(products);
    // Show the first page of products
    showPage(products, currentPage);
    // Update page indicator
    updatePageIndicator();
  } catch (error) {
    $("#product-list").html(`<p>${error.message}</p>`);
  }
}

// Function to generate a single Product component
function ProductComponent({
  title,
  product_code,
  price,
  vtry_image,
  seo_title,
  rating,
}) {
  return `
      <div class="col-md-3 col-sm-6 product-men women_two mb-4">
          <div class="product-googles-info googles h-100">
              <div class="men-pro-item h-100">
                  <div class="page-wrapper w-100">
                      <div class="page-inner">
                          <div class="row h-100 w-100">
                              <div class="el-wrapper w-100">
                                  <div class="box-up h-100 w-100">
                                      <!-- Product Image with Hover Zoom -->
                                      <div class="image-container">
                                          <img class="img glass-image" src="${vtry_image}" alt="${seo_title}" />
                                      </div>

                                      <!-- Product Info -->
                                      <div class="img-info">
                                          <div class="info-inner">
                                              <span class="p-name">${title}</span><br />
                                              <span class="p-company">${product_code}</span>
                                          </div>
                                      </div>
                                  </div>

                                  <!-- Rating Stars -->
                                  <ul class="stars pb-2 text-center">
                                      ${generateStars(rating)}
                                  </ul>

                                  <!-- Price and Cart Button -->
                                  <div class="box-down">
                                      <div class="h-bg">
                                          <div class="h-bg-inner"></div>
                                      </div>
                                      <a class="cart" href="single.html">
                                          <span class="price">Rs. ${price}</span>
                                          <span class="add-to-cart">
                                              <span class="txt">Quick View</span>
                                          </span>
                                          <span class="my-cart">
                                              <div class="googles single-item hvr-outline-out">
                                                  <form action="#" method="post" class="add-to-cart-form">
                                                      <input type="hidden" name="cmd" value="_cart" />
                                                      <input type="hidden" name="add" value="1" />
                                                      <input type="hidden" name="googles_item" value="${title}" />
                                                      <input type="hidden" name="amount" value="${price}" />
                                                      <button type="submit" class="googles-cart pgoogles-cart">
                                                          <i class="fas fa-cart-plus"></i>
                                                      </button>
                                                  </form>
                                              </div>
                                          </span>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `;
}
function ProductSliderComponent({
  title,
  product_code,
  price,
  vtry_image,
  seo_title,
  rating,
}) {
  return `
   <div class="item h-100 ">
                  <div class="h-100 gd-box-info text-center ">
                    <div class="h-100 w-100 product-men women_two bot-gd">
                      <div class="h-100  slide-img googles h-100">
                        <div class="men-pro-item h-100">
                          <div class="page-wrapper w-100">
                            <div class="page-inner">
                              <div class="row h-100 w-100">
                                <div class="el-wrapper w-100">
                                  <div class="box-up h-100 w-100">

                                    <!-- Product Image with Hover Zoom -->
                                      <div class="image-container">
                                          <img class="img glass-image" src="${vtry_image}" alt="${seo_title}" />
                                      </div>

                                      <!-- Product Info -->
                                      <div class="img-info">
                                          <div class="info-inner">
                                              <span class="p-name">${title}</span><br />
                                              <span class="p-company">${product_code}</span>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <!-- Rating Stars -->
                                  <ul class="stars pb-2 text-center">
                                      ${generateStars(rating)}
                                  </ul>

                                  <div class="box-down">
                                    <div class="h-bg">
                                      <div class="h-bg-inner"></div>
                                    </div>

                                    <a class="cart" href="single.html">
                                       <span class="price">Rs. ${price}</span>
                                      <span class="add-to-cart">
                                        <span class="txt">Quick View</span>
                                      </span>
                                      <span class="my-cart">
                                        <div
                                          class="googles single-item hvr-outline-out"
                                        >
                                          <form action="#" method="post">
                                            <input type="hidden" name="cmd"  value="_cart"/>
                                            <input type="hidden" name="add" value="1" />
                                              <input type="hidden" name="googles_item" value="${title}" />
                                              <input type="hidden" name="amount" value="${price}" />
                                            <button
                                              
                                              class="googles-cart pgoogles-cart"
                                            >
                                              <i class="fas fa-cart-plus"></i>
                                            </button>
                                          </form>
                                        </div>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
 
                `;
}
// Generate product HTML for each product in the list
function generateProductHTML(products) {
  return products
    .map((product) =>
      ProductComponent({
        title: product.title,
        product_code: product.product_code,
        price: product.price,
        vtry_image: product.vtry_image,
        seo_title: product.seo_title,
        rating: Math.random() * 5, // For demonstration; replace with actual rating if available
      })
    )
    .join("");
}
function generateProductSliderHTML(products) {
  return products
    .map((product) =>
      ProductSliderComponent({
        title: product.title,
        product_code: product.product_code,
        price: product.price,
        vtry_image: product.vtry_image,
        seo_title: product.seo_title,
        rating: Math.random() * 5, // For demonstration; replace with actual rating if available
      })
    )
    .join("");
}
// Generate star ratings for a product based on rating
function generateStars(rating) {
  let starsHTML = "";
  for (let i = 1; i <= 5; i++) {
    starsHTML +=
      i <= rating
        ? `<li><a href="#"><i class="fa fa-star" aria-hidden="true" style="color: #ffcc00;"></i></a></li>`
        : `<li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>`;
  }
  return starsHTML;
}
// Initialize pagination parameters
let currentPage = 1;
let itemsPerPage = 20;
let totalPages = 1;
let visibleDots = 5; // Number of visible dots in pagination

// Set up pagination controls
function setupPagination(products) {
  totalPages = Math.ceil(products.length / itemsPerPage);
  renderPaginationControls(products);
}

// Show the specific page of products
function showPage(products, page) {
  currentPage = page;
  const offset = (page - 1) * itemsPerPage;
  const paginatedProducts = products.slice(offset, offset + itemsPerPage);
  
  // Render the current page of products
  $("#product-list").html(generateProductHTML(paginatedProducts));
  updatePageIndicator(); // Update page indicator whenever the page is shown
}

// Render pagination controls dynamically
function renderPaginationControls(products) {
  const paginationDots = $("#pagination-dots");
  paginationDots.empty();

  // Determine range of page numbers to display
  let start = Math.max(1, currentPage - Math.floor(visibleDots / 2));
  let end = Math.min(totalPages, currentPage + Math.floor(visibleDots / 2));

  // Adjust range to ensure we show enough dots near the beginning or end if needed
  if (currentPage <= Math.floor(visibleDots / 2)) {
    end = Math.min(totalPages, visibleDots);
  } else if (currentPage + Math.floor(visibleDots / 2) >= totalPages) {
    start = Math.max(1, totalPages - visibleDots + 1);
  }

  // Generate pagination dots
  for (let i = start; i <= end; i++) {
    const dot = createPaginationDot(i);
    paginationDots.append(dot);
  }

  // Add Previous and Next buttons
  $("#btnPreviousP").off("click").on("click", () => handlePageChange(-1, products));
  $("#btnNextP").off("click").on("click", () => handlePageChange(1, products));
}

// Handle page change for Previous/Next buttons
function handlePageChange(direction, products) {
  if ((direction === -1 && currentPage > 1) || (direction === 1 && currentPage < totalPages)) {
    currentPage += direction;
    showPage(products, currentPage);
  }
}

// Create a pagination dot for a given page
function createPaginationDot(page) {
  const dot = $("<button>")
    .addClass("pagination-dot")
    .text(page)
    .attr("data-page", page)
    .toggleClass("active", page === currentPage)
    .on("click", function () {
      currentPage = parseInt($(this).attr("data-page"));
      showPage(products, currentPage);
    });
  return dot;
}

// Updates the active class for pagination dots
function updatePaginationDots() {
  $(".pagination-dot").removeClass("active");
  $(`.pagination-dot[data-page=${currentPage}]`).addClass("active");
}

// Updates the page indicator to show the current page
function updatePageIndicator() {
  $("#pageIndicator").text(`Page ${currentPage} of ${totalPages}`);
}

$(".dropdown-menu .dropdown-item").on("click", function (event) {
  event.preventDefault();
  const selectedGender = $(this).data("value");
  const selectedGenderText = $(this).text();
  getTrendingList(selectedGender, selectedGenderText);
});


// New Arrival List Function
async function getNewArrivalList() {
  const filters = {
    catCode: "optics_frames",
    page: 1,
    per_page: 8,
    sortby: "new-arrivals",
  };

  await fetchAndRenderProductList({
    filters,
    skeletonId: "#newArrivals-list-skeleton",
    listId: "#newArrivals-list",
  });
}

// Trending List Function
async function getTrendingList(gender, label) {

  const filters = {
    catCode: "optics_frames",
    page: 1,
    per_page: 8,
    tags_count: "no",
    FilterBy: {
      optics_frames_style: { genders: gender },
    },
  };

  await fetchAndRenderProductList({
    filters,
    skeletonId: "#trending-list-skeleton",
    listId: "#trending-list",
    label,
  });
}

// Featured List Function
async function getFeaturedList() {
  const filters = {
    catCode: "optics_frames",
    page: 1,
    per_page: 8,
    featured: "yes",
  };

  await fetchAndRenderProductList({
    filters,
    skeletonId: "#feature-list-skeleton",
    listId: "#feature-list",
  });
}


