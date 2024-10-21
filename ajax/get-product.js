
$(document).ready(function() {
    $.ajax({
        url: 'get_products.php', // Path to the server-side handler
        method: 'POST',
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


$(document).ready(function() {
    // AJAX request to fetch product data
    $.ajax({
        url: 'get_products.php', // Path to the server-side handler
        method: 'POST',
        dataType: 'json', // Expect JSON response
        success: function(response) {
            // debugger;
            // Check if there's an error
            if (response.error) {
                $('#product-list').html('<p>Error loading products.</p>');
                return;
            }
            console.log(response);
            // Assuming response.result.products contains the product data
            let products = response.result.list;
            
            let productHTML = '';

            $.each(products, function(index, product) {
                productHTML += `
                    <div class="product-item">
                        <h4>${product.title}</h4>
                        <img src="${product.vtry_image}" alt="${product.seo_title}" width="150" height="150">
                        <p>Price: ${product.price}</p>
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
});
