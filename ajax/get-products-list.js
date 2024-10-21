$(document).ready(function () {
  // Show loader
  $(".loading-spinner").show();
  $("#product-list").hide(); // Initially hide the product list
  $.ajax({
    url: "https://gulzarioptics.testspace.click/interface/index.php", // Path to the server-side handler
    method: "POST",
    data: JSON.stringify({
      // Send data as JSON
      jsonrpc: "2.0",
      method: "products.getAllProducts",
      params: {
        featured: "",
        SearchBy: "",
        FilterBy: "",
        latest: "",
        isActive: "active",
        catCode: "optics_frames",
        model: "",
        price_min: "",
        price_max: "",
        tryon: "",
        sale: "",
        page: 1,
        per_page: 20,
        tags_count: "yes",
        sub_shopCode: "gulzarioptics",
      },
      id: "LKlUvgLR",
    }),
    dataType: "json", // Expect JSON response
    success: function (response) {
      // Check if there's an error
      if (response.error) {
        $("#product-list").html("<p>Error loading products.</p>");
        return;
      }

      // Assuming response.result.list contains the product data
      let products = response.result.list;
      let productHTML = "";
      console.log("response==>", products);
      $.each(products, function (index, product) {
        productHTML += `
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
                    <img class="img glass-image" src="${
                      products[0].vtry_image
                    }" alt="${product.seo_title}" />
                  </div>

                  <!-- Product Info -->
                  <div class="img-info">
                    <div class="info-inner">
                      <span class="p-name">${product.title}</span><br />
                      <span class="p-company">${product.product_code}</span>
                    </div>
                  </div>
                </div>

                <!-- Rating Stars -->
                <ul class="stars pb-2 text-center">
                  ${generateStars(Math.random() * 5)}
                </ul>

                <!-- Price and Cart Button -->
                <div class="box-down">
                  <div class="h-bg">
                    <div class="h-bg-inner"></div>
                  </div>
                  <a class="cart" href="single.html">
                    <span class="price">Rs. ${product.price}</span>
                    <span class="add-to-cart">
                      <span class="txt">Quick View</span>
                    </span>
                    <span class="my-cart">
                      <div class="googles single-item hvr-outline-out">
                        <form action="#" method="post" class="add-to-cart-form">
                          <input type="hidden" name="cmd" value="_cart" />
                          <input type="hidden" name="add" value="1" />
                          <input type="hidden" name="googles_item" value="${
                            product.title
                          }" />
                          <input type="hidden" name="amount" value="${
                            product.price
                          }" />
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
      });
      // googles.render();
      // Append the products to the container
      $("#product-list").html(productHTML);
      // Hide loader and show product list
      $(".loading-spinner").hide();
     
      $("#product-list").fadeIn();
      
    },

    error: function () {
      $(".loading-spinner").hide();
      $("#product-list").html("<p>Failed to load products.</p>");
    },
  });

  // Function to generate stars
  function generateStars(rating) {
    let starsHTML = "";

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        // Black colored filled stars
        starsHTML += `<li><a href="#"><i class="fa fa-star" aria-hidden="true" style="color: #ffcc00;"></i></a></li>`;
      } else {
        // Default empty stars
        starsHTML += `<li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>`;
      }
    }
    return starsHTML;
  }
});

// $(document).ready(function() {
//     // AJAX request to fetch product data
//     $.ajax({
//         url: 'get_products.php', // Path to the server-side handler
//         method: 'POST',
//         dataType: 'json', // Expect JSON response
//         success: function(response) {
//             // debugger;
//             // Check if there's an error
//             if (response.error) {
//                 $('#product-list').html('<p>Error loading products.</p>');
//                 return;
//             }
//             console.log(response);
//             // Assuming response.result.products contains the product data
//             let products = response.result.list;

//             let productHTML = '';

//             $.each(products, function(index, product) {
//                 productHTML += `
//                     <div class="product-item">
//                         <h4>${product.title}</h4>
//                         <img src="${product.vtry_image}" alt="${product.seo_title}" width="150" height="150">
//                         <p>Price: ${product.price}</p>
//                     </div>
//                 `;
//             });

//             // Append the products to the container
//             $('#product-list').html(productHTML);
//         },
//         error: function() {
//             $('#product-list').html('<p>Failed to load products.</p>');
//         }
//     });
// });
