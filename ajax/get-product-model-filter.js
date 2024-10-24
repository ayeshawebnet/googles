// Function to fetch color options
// API call to fetch product model filters
function fetchProductModelFilters(productCode, callback) {
  $.ajax({
    url: "https://gulzarioptics.testspace.click/interface/index.php", // Path to the server-side handler
    method: "POST",
    data: JSON.stringify({
      jsonrpc: "2.0",
      method: "products.getProductModelFilters",
      params: {
        productCode: productCode,
      },
      id: "R7c1DXiJ",
    }),
    dataType: "json", // Expect JSON response
    success: function (response) {
      // Check if there's an error
      if (response.error) {
        $("#product-summary").append("<p>Error loading product filters.</p>");
        return;
      }

      // Pass the filters to the callback function
      const productModelFilters = response.result;
      callback(productModelFilters);
    },
    error: function () {
      $("#product-summary").append("<p>Failed to load product filters.</p>");
    },
  });
}

// Function to fetch color options
function fetchColorOptions(colors) {
  let colorOptionsHTML = `
    <div class="image-gallery-group" data-gallery-id="1">
      <div class="sub-heading">Select Colour :</div>
      <div class="color-options">
  `;

  colors.forEach((color, index) => {
    colorOptionsHTML += `
      <div class="colr">
        <label class="radio">
          <input type="radio" name="radio-gallery-1" value="${color}" ${
      index === 1 ? 'checked="checked"' : ""
    } 
          onclick="getProductCode('${color}')"/>
          <span class="color-box" style="background-color:${color}"></span>
        </label>
      </div>
    `;
  });

  colorOptionsHTML += `
      </div>
    </div>
  `;

  // Append the generated color options to the product summary
  $("#product-summary").append(colorOptionsHTML);
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
            <input type="radio" name="radio-size" value="${size}" ${
      index === 0 ? 'checked="checked"' : ""
    } />
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

// Usage: Fetch product filters and fetch color options
function fetchFilterOptions(productCode) {
  fetchProductModelFilters(productCode, function (productModelFilters) {
    const colors = productModelFilters.front_color;
    fetchColorOptions(colors);

    // After appending color options, fetch and append size options
    fetchSizeOptions();
  });
}



function getProductCode(color) {
  console.log("calltest", c);
  $.ajax({
    url: "https://gulzarioptics.testspace.click/interface/index.php", // Path to the server-side handler
    method: "POST",
    data: JSON.stringify({
      jsonrpc: "2.0",
      method: "products.getProductCodeByTag",
      params: {
        product_model: "1509",
        setCode: "optics_frames_colour",
        tag_key: "front_color",
        tag_value: color,
        sub_shopCode: "gulzarioptics",
      },
      id: "eZMq1h53",
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
      console.log("response ProductModelFilters==>", response);

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
        } onclick="getProductCode()"/>
              <span class="color-box" style="background-color:${color}"></span>
            </label>
          </div>
        `;
        console.log("color==>", colorOptionsHTML);
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
