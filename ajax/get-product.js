$(document).ready(function () {
  // Show loader
  $(".loading-spinner").show();
  $("#product-list").hide(); // Initially hide the product list
  $.ajax({
    url: "https://gulzarioptics.testspace.click/interface/index.php", // Path to the server-side handler
    method: "POST",
    data: JSON.stringify({
      jsonrpc: "2.0",
      method: "products.getProductDetails",
      params: {
        code: "116F0107934-2",
        sub_shopCode: "gulzarioptics",
      },
      id: "k1PQf2Rp",
    }),
    dataType: "json", // Expect JSON response
    success: function (response) {
      // Check if there's an error
      if (response.error) {
        $("#product-summary").html("<p>Error loading products.</p>");
        return;
      }
      console.log("response==>", response);
      // Assuming response.result contains the product data
      let productDetail = response.result;

      // Update the product title
      $("#product-summary .product-title").remove(); // Remove any existing title if needed
      $("#product-summary").prepend(
        `<h2 class="product-title">${productDetail.productInfo.title}</h2>`
      ); // Append title

      // Update the price
      const priceHTML = `
        <div class="price">
          <h3><span>Rs. </span>${productDetail.productInfo.base_price}</h3>
          <del>Rs. ${productDetail.productInfo.base_price + 200}</del>
        </div>
      `;
      $("#product-summary").append(priceHTML); // Append price details

      // Update the product details
      const detailsHTML = `
        <div class="product-details mb-4">
          <h3>Product Details</h3>
          <p>${productDetail.productInfo.product_desc}</p>
        </div>
      `;
      $("#product-summary").append(detailsHTML); // Append product details

      // Fetch color options after details
      fetchColorOptions(); 

      // Hide loader and show product list
      $(".loading-spinner").hide();
      $("#product-summary").fadeIn();

      // Update ratings and reviews
      const productRating = 4; // Example rating
      const productReviewCount = 25; // Example review count
      updateRatings(productRating, productReviewCount);
    },

    error: function () {
      $(".loading-spinner").hide();
      $("#product-summary").html("<p>Failed to load products.</p>");
    },
  });

  // Function to generate stars
  function updateRatings(rating, reviewCount) {
    let starHtml = "";
    // Loop to create filled stars based on rating
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        starHtml += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="p-star">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>`;
      } else {
        starHtml += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" class="p-star">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>`;
      }
    }

    // Inject the star HTML into the p-stars div
    $("#p-stars").html(starHtml);

    // Update the review count
    $("#review-count").text(reviewCount);
    console.log("starHtml==>", reviewCount);
  }
});

