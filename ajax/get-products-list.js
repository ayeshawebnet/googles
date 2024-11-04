async function renderShopPage(products) {
  try {
    // if (!products || products.length === 0) {

    //     $("#product-list").html(`<p>No products available</p>`);
    //     return;
    //   }

    // Calculate total pages and render the first page
    currentPage = 1;
    totalPages = Math.ceil(products.length / itemsPerPage);
    showPage(products, currentPage);
    renderPaginationControls(products);

    // Render the products

    // const productHTML = generateProductHTML(products);
    // $("#product-list").html(productHTML);

    // Hide loader and display product list
    // $(".loading-spinner").hide();
    // $("#product-list").fadeIn();
  } catch (error) {
    // $(".loading-spinner").hide();
    $("#product-list").html(`<p>${error.message}</p>`);
    console.error("Error loading products:", error);
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
 <div class="item">
                  <div class="gd-box-info text-center">
                    <div class="product-men women_two bot-gd">
                      <div class="product-googles-info slide-img googles">
                        <div class="men-pro-item">
                          <div class="page-wrapper">
                            <div class="page-inner">
                              <div class="row">
                                <div class="el-wrapper">
                                  <div class="box-up">
                                    <img
                                      class="img"
                                      src="images/s5.jpg"
                                      alt=""
                                    />
                                    <div class="img-info">
                                      <div class="info-inner">
                                        <span class="p-name"
                                          >Fastrack Aviator</span
                                        >
                                        <span class="p-company">Grey</span>
                                      </div>
                                      <div class="a-size">
                                        <div>
                                          Available sizes :
                                          <span class="size"
                                            >S , M , L , XL</span
                                          >
                                        </div>
                                        <div
                                          class="d-flex justify-content-center"
                                        >
                                          Available color :
                                          <ul class="colors-container">
                                            <li class="color">
                                              <a
                                                role="button"
                                                class="color-btn"
                                                data-image="images/m1.jpg"
                                              ></a>
                                              <span class="color-name"
                                                >asdsa</span
                                              >
                                            </li>
                                            <li class="color">
                                              <a
                                                role="button"
                                                class="color-btn"
                                                data-image="images/m2.jpg"
                                              ></a
                                              ><span class="color-name"
                                                >Team Navy</span
                                              >
                                            </li>
                                            <li class="color">
                                              <a
                                                role="button"
                                                class="color-btn"
                                                data-image="images/m3.jpg"
                                              ></a
                                              ><span class="color-name"
                                                >Pulse Blue</span
                                              >
                                            </li>
                                            <li class="color active">
                                              <a
                                                role="button"
                                                class="color-btn"
                                                data-image="images/m4.jpg"
                                              ></a
                                              ><span class="color-name"
                                                >Pink Fusion</span
                                              >
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <ul class="stars pb-2">
                                        <li>
                                          <a href="#">
                                            <i
                                              class="fa fa-star"
                                              aria-hidden="true"
                                            ></i>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            <i
                                              class="fa fa-star"
                                              aria-hidden="true"
                                            ></i>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            <i
                                              class="fa fa-star"
                                              aria-hidden="true"
                                            ></i>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            <i
                                              class="fa fa-star"
                                              aria-hidden="true"
                                            ></i>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="#">
                                            <i
                                              class="fa fa-star-half-o"
                                              aria-hidden="true"
                                            ></i>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div class="box-down">
                                    <div class="h-bg">
                                      <div class="h-bg-inner"></div>
                                    </div>

                                    <a class="cart" href="single.html">
                                      <span class="price">$325.00</span>
                                      <span class="add-to-cart">
                                        <span class="txt">Quick View</span>
                                      </span>
                                      <span class="my-cart">
                                        <div
                                          class="googles single-item hvr-outline-out"
                                        >
                                          <form action="#" method="post">
                                            <input
                                              type="hidden"
                                              name="cmd"
                                              value="_cart"
                                            />
                                            <input
                                              type="hidden"
                                              name="add"
                                              value="1"
                                            />
                                            <input
                                              type="hidden"
                                              name="googles_item"
                                              value="Farenheit"
                                            />
                                            <input
                                              type="hidden"
                                              name="amount"
                                              value="575.00"
                                            />
                                            <button
                                              type="submit"
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
        vtry_image: products.vtry_image,
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
        vtry_image: products.vtry_image,
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
var currentPage = 1;
var itemsPerPage = 20;
var totalPages = 1;
// Shows the specific page of products
function showPage(products, page) {
  const offset = (page - 1) * itemsPerPage;
  const paginatedProducts = products.slice(offset, offset + itemsPerPage);

  // Render the current page of products
  $("#product-list").html(generateProductHTML(paginatedProducts));
  updatePageIndicator();
}

// Updates the page indicator to show the current page
function updatePageIndicator() {
  $("#pageIndicator").text(`Page ${currentPage} of ${totalPages}`);
}

// Render pagination controls dynamically
function renderPaginationControls(products) {
  const paginationDots = $("#pagination-dots");
  paginationDots.empty();

  for (let i = 1; i <= totalPages; i++) {
    const dot = $("<button>")
      .addClass("pagination-dot")
      .text(i)
      .attr("data-page", i)
      .toggleClass("active", i === currentPage);

    dot.on("click", function () {
      currentPage = parseInt($(this).attr("data-page"));
      showPage(products, currentPage);
      updatePaginationDots();
    });

    paginationDots.append(dot);
  }

  $("#btnPreviousP").on("click", () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(products, currentPage);
      updatePaginationDots();
    }
  });

  $("#btnNextP").on("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(products, currentPage);
      updatePaginationDots();
    }
  });
}

// Updates the active class for pagination dots
function updatePaginationDots() {
  $(".pagination-dot").removeClass("active");
  $(`.pagination-dot[data-page=${currentPage}]`).addClass("active");
}

getTrendingList();
getNewArrivalList();
getFeaturedList();

async function getTrendingList() {
  const filters = {
    catCode: "optics_frames",
    page: 1,
    per_page: 4,
    tags_count: "no",
    FilterBy: {
      optics_frames_style: {
        genders: "gender_men",
      },
    },
  };
  const products = await fetchProducts(filters);
  $("#trending-list").html(generateProductHTML(products.list));
}

async function getNewArrivalList() {
  const filters = {
    catCode: "optics_frames",
    page: 1,
    per_page: 4,
    sortby: "new-arrivals",
  };
  const products = await fetchProducts(filters);
  $("#newArrivals-list").html(generateProductHTML(products.list));
}

async function getFeaturedList() {
  const filters = {
    catCode: "optics_frames",
    page: 1,
    per_page: 4,
    featured: "yes",
  };
  const products = await fetchProducts(filters);
  $("#feature-list").html(generateProductSliderHTML(products.list));
}
