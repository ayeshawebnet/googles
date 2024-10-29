
async function renderShopPage(products) {
  try {
      // Show loader and hide product list initially
      // $(".loading-spinner").show();
      // $("#product-list").hide();
      
    //   const products = await fetchProducts();
      
      if (!products || products.length === 0) throw new Error("No products available");

      // Initialize cart after products are rendered
      initializeCartModel();
      
      
      // Render the products
      
      const productHTML = generateProductHTML(products);
      $("#product-list").html(productHTML);

      

      // Hide loader and display product list
      // $(".loading-spinner").hide();
      // $("#product-list").fadeIn();
  } catch (error) {
      // $(".loading-spinner").hide();
      $("#product-list").html(`<p>${error.message}</p>`);
      console.error("Error loading products:", error);
  }
}

// Initialize the cart model and setup checkout event listener
function initializeCartModel() {
  // Render cart model

}

// Function to generate a single Product component
function ProductComponent({ title, product_code, price, vtry_image, seo_title, rating }) {
  return `
      <div class="col-md-3 product-men women_two mb-4">
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

// Generate product HTML for each product in the list
function generateProductHTML(products) {
  return products.map(product => ProductComponent({
      title: product.title,
      product_code: product.product_code,
      price: product.price,
      vtry_image: products[0].vtry_image,
      seo_title: product.seo_title,
      rating: Math.random() * 5 // For demonstration; replace with actual rating if available
  })).join("");
}

// Generate star ratings for a product based on rating
function generateStars(rating) {
  let starsHTML = "";
  for (let i = 1; i <= 5; i++) {
      starsHTML += i <= rating
          ? `<li><a href="#"><i class="fa fa-star" aria-hidden="true" style="color: #ffcc00;"></i></a></li>`
          : `<li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>`;
  }
  return starsHTML;
}

