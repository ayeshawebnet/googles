// Function to fetch color options
function fetchColorOptions() {
    $.ajax({
      url: "https://gulzarioptics.testspace.click/interface/index.php", // Path to the server-side handler
      method: "POST",
      data: JSON.stringify({
        "jsonrpc": "2.0",
        "method": "products.getProductModelFilters",
        "params": {
          "productCode": "116F0107934-2"
        },
        "id": "3FaJOFUV"
      }),
      dataType: "json", // Expect JSON response
      success: function (response) {
        // Check if there's an error
        if (response.error) {
          $("#product-summary").append("<p>Error loading color options.</p>");
          return;
        }
  
        // Assuming response.result contains the product data
        let ProductModelFilters = response.result;
        let ProductModelFiltersFrontColor = ProductModelFilters.front_color;
        console.log("response ProductModelFilters==>", ProductModelFilters);
        
        // Dynamically create color options
        const colors = ProductModelFiltersFrontColor; // Assume colors are in the API response
  
        let colorOptionsHTML = `
        <div class=" image-gallery-group" data-gallery-id="1">
          <div class="sub-heading">Select Colour :</div>
          <div class="color-options">
        `;
  
        colors.forEach((color, index) => {
          colorOptionsHTML += `
            <div class="colr">
              <label class="radio">
                <input type="radio" name="radio-gallery-1" value="${color}" ${
                  index === 0 ? 'checked="checked"' : ""
                } />
                <span class="color-box ${color}"></span>
              </label>
            </div>
          `;
          console.log("color==>", color);
        });
  
        colorOptionsHTML += `
          </div>
         
        `;
        


        // Append color options to product summary below the details
        $("#product-summary").append(colorOptionsHTML);



        // After appending color options, fetch and append size options
      fetchSizeOptions();


      },
  
      error: function () {
        $("#product-summary").append("<p>Failed to load filter.</p>");
      },
    });
  }

/// Function to fetch and display size options
function fetchSizeOptions() {
    // Example of static size options; replace this with an API call if needed
    const sizes = ["M", "L", "XL"]; // You can fetch this from your API as well
  
    let sizeOptionsHTML = `
      <div>
        <div class="sub-heading">Select Size :</div>
        <ul id="size-box" class="size list-inline">
    `;
  
    sizes.forEach((size, index) => {
      sizeOptionsHTML += `
        <li class="size-box list-inline-item">
          <label class="radio">
            <input type="radio" name="radio-size" value="${size}" ${index === 0? 'checked="checked"' : ""} />
            <span class="size-label">${size}</span>
          </label>
        </li>
      `;
    });
  
    sizeOptionsHTML += `
        </ul>
      </div>
      </div>
    `;
  
    // Append size options below the color options
    $("#product-summary").append(sizeOptionsHTML);
  
    // Add an event listener for size selection
    $("#size-box input[type='radio']").on("change", function () {
      const selectedSize = $(this).val();
      console.log("Selected size: ", selectedSize);
      // You can perform actions here based on the selected size
    });
  }
  