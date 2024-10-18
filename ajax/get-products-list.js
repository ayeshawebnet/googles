
$(document).ready(function() {
    $.ajax({
        url: 'https://gulzarioptics.testspace.click/interface/index.php', // Path to the server-side handler
        method: 'POST',
        data: JSON.stringify({  // Send data as JSON
            "jsonrpc": "2.0",
            "method": "products.getAllProducts",
            "params": {
                "featured": "",
                "SearchBy": "",
                "FilterBy": "",
                "latest": "",
                "isActive": "active",
                "catCode": "optics_frames",
                "model": "",
                "price_min": "",
                "price_max": "",
                "tryon": "",
                "sale": "",
                "page": 1,
                "per_page": 20,
                "tags_count": "yes",
                "sub_shopCode": "gulzarioptics"
            },
            "id": "LKlUvgLR"
        }),  
        dataType: 'json', // Expect JSON response
        success: function(response) {
            // Check if there's an error
            if (response.error) {
                $('#product-list').html('<p>Error loading products.</p>');
                return;
            }

            // Assuming response.result.list contains the product data
            let products = response.result.list;
            let productHTML = '';

            $.each(products, function(index, product) {
                productHTML += `
                <div class="col-md-3 product-men women_two">
                  <div class="product-googles-info googles">
                    <div class="men-pro-item">
                      <div class="page-wrapper">
                        <div class="page-inner">
                          <div class="row">
                            <div class="el-wrapper">
                              <div class="box-up">
                                <img class="img glass-image" src="${product.vtry_image}" alt="${product.seo_title}" />
                                <div class="img-info">
                                  <div class="info-inner">
                                    <span class="p-name">${product.title}</span>
                                    <span class="p-company">${product.company}</span>
                                  </div>
                                  <div class="a-size">
                                    <div>Available sizes: <span class="size">S , M , L , XL</span></div>
                                    <div class="d-flex justify-content-center">
                                      Available color :
                                      <ul class="colors-container">
                                        ${product.colors.map(color => `
                                          <li class="color">
                                            <a role="button" class="color-btn" data-image="${color.image}"></a>
                                            <span class="color-name">${color.name}</span>
                                          </li>
                                        `).join('')}
                                      </ul>
                                    </div>
                                  </div>
                                  <ul class="stars pb-2">
                                    ${generateStars(product.rating)}
                                  </ul>
                                </div>
                              </div>
                              <div class="box-down">
                                <div class="h-bg">
                                  <div class="h-bg-inner"></div>
                                </div>
                                <a class="cart" href="single.html">
                                  <span class="price">${product.price}</span>
                                  <span class="add-to-cart">
                                    <span class="txt">Quick View</span>
                                  </span>
                                  <span class="my-cart">
                                    <div class="googles single-item hvr-outline-out">
                                      <form action="#" method="post">
                                        <input type="hidden" name="cmd" value="_cart" />
                                        <input type="hidden" name="add" value="1" />
                                        <input type="hidden" name="googles_item" value="${product.title}" />
                                        <input type="hidden" name="amount" value="${product.price}" />
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

            // Append the products to the container
            $('#product-list').html(productHTML);
        },
        error: function() {
            $('#product-list').html('<p>Failed to load products.</p>');
        }
    });

    // Function to generate stars
    function generateStars(rating) {
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                starsHTML += `<li><a href="#"><i class="fa fa-star" aria-hidden="true"></i></a></li>`;
            } else if (i === Math.ceil(rating)) {
                starsHTML += `<li><a href="#"><i class="fa fa-star-half-o" aria-hidden="true"></i></a></li>`;
            } else {
                starsHTML += `<li><a href="#"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>`;
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
