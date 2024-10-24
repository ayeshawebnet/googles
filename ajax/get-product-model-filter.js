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
 function  fetchColorOptions(colors) {
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

//fetch functino material options
function fetchFrontMaterialOptions(materials) {
  let materialHtml = `
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelectFrontMaterial">Front Material</label>
  </div>
  <select class="custom-select" id="inputGroupSelectFrontMaterial">
    <option selected>Choose...</option>
    ${materials.map((material) => {
      return `<option value="${material}">${material}</option>`;
    })}
  </select>
</div>
  `;
  $("#product-filters").append(materialHtml);
}

function fetchSideMaterialOptions(materials) {
  let materialHtml = `
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelectSideMaterial">Side Material</label>
  </div>
  <select class="custom-select" id="inputGroupSelectSideMaterial">
    <option selected>Choose...</option>
    ${materials.map((material) => {
      return `<option value="${material}">${material}</option>`;
    })}
  </select>
  `;
  $("#product-filters").append(materialHtml);
}

function fetchShapeOptions(shape) {
  let shapeHtml = `
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelectShape">Shape</label>
  </div>
  <select class="custom-select" id="inputGroupSelectShapeO">
    <option selected>Choose...</option>
   ${shape.map((shape) => {
     return `<option value="${shape}">${shape}</option>`;
   })}
  </select>
  `;
  $("#product-filters").append(shapeHtml);
}

function fetchFrameWidthOptions(width) {
  let widthHtml = `
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelectFrameWidth">Frame Width</label>
  </div>
  <select class="custom-select" id="inputGroupSelectFrameWidth">
    <option selected>Choose...</option>
    ${width.map((width) => {
      return `<option value="${width}">${width}</option>`;
    })}
  </select>
  `;
  $("#product-filters").append(widthHtml);
}

function fetchLensWidthOptions(width) {
  let widthHtml = `
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelectLensWidth">Lens Width</label>
  </div>
  <select class="custom-select" id="inputGroupSelectLensWidth">
    <option selected>Choose...</option>
    ${width.map((width) => {
      return `<option value="${width}">${width}</option>`;
    })}
  </select>
  `;
  $("#product-filters").append(widthHtml);
}

function fetchLensHeightOptions(height) {
  let heightHtml = `
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelectLensHeight">Lens Height</label>
  </div>
  <select class="custom-select" id="inputGroupSelectLensHeight">
    <option selected>Choose...</option>
    ${height.map((height) => {
      return `<option value="${height}">${height}</option>`;
    })}
  </select>
  `;
  $("#product-filters").append(heightHtml);
}

function fetchBridgeWidthOptions(width) {
  let widthHtml = `
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelectBridgeWidth">Bridge Width</label>
  </div>
  <select class="custom-select" id="inputGroupSelectBridgeWidth">
    <option selected>Choose...</option>
    ${width.map((width) => {
      return `<option value="${width}">${width}</option>`;
    })}
  </select>
  `;
  $("#product-filters").append(widthHtml);
}

async function fetchTempleLengthOptions(length) {
  let lengthHtml = `
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelectTempleLength">Temple Length</label>
  </div>
  <select class="custom-select" id="inputGroupSelectTempleLength">
    <option selected>Choose...</option>
    ${length.map((length) => {
      return `<option value="${length}">${length}</option>`;
    })}
  </select>
  `;
  $("#product-filters").append(lengthHtml);
}



// Usage: Fetch product filters and fetch color options
function fetchFilterOptions(productCode) {
  fetchProductModelFilters(productCode, function (productModelFilters) {
    const colors = productModelFilters.front_color;
    const front_materials = productModelFilters.front_material;
    const side_materials = productModelFilters.side_material;
    const shapes = productModelFilters.shape;
    const frame_width = productModelFilters.frame_width;
    const lens_width = productModelFilters.lens_width;
    const lens_height = productModelFilters.lens_height;
    const bridge_width = productModelFilters.bridge;
    const temple_length = productModelFilters.temple_length;
    
    let filterOptionsHTML = `
      <div id="product-filters">
        <h3>Product Filters</h3>
      </div>
      </div>
    `;

    fetchColorOptions(colors);
    fetchFrontMaterialOptions(front_materials);
    fetchSideMaterialOptions(side_materials);
    fetchShapeOptions(shapes);
    fetchFrameWidthOptions(frame_width);
    fetchLensWidthOptions(lens_width);
    fetchLensHeightOptions(lens_height);
    fetchBridgeWidthOptions(bridge_width);
    await fetchTempleLengthOptions(temple_length);
    $("#product-summary").append(filterOptionsHTML);
    console.log("filterOptionsHTML==>", filterOptionsHTML);
    // fetchSizeOptions();
   
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
    // success: function (response) {
    //   // Check if there's an error
    //   if (response.error) {
    //     $("#product-summary").append("<p>Error loading color options.</p>");
    //     return;
    //   }

    //   // Assuming response.result contains the product data
    //   let ProductModelFilters = response.result;
    //   let ProductModelFiltersFrontColor = ProductModelFilters.front_color;
    //   console.log("response ProductModelFilters==>", response);

    //   // Dynamically create color options
    //   const colors = ProductModelFiltersFrontColor; // Assume colors are in the API response

    //   let colorOptionsHTML = `
    //   <div class=" image-gallery-group" data-gallery-id="1">
    //     <div class="sub-heading">Select Colour :</div>
    //     <div class="color-options">
    //   `;

    //   colors.forEach((color, index) => {
    //     colorOptionsHTML += `
    //       <div class="colr">
    //         <label class="radio">
    //           <input type="radio" name="radio-gallery-1" value="${color}" ${
    //       index === 0 ? 'checked="checked"' : ""
    //     } onclick="getProductCode()"/>
    //           <span class="color-box" style="background-color:${color}"></span>
    //         </label>
    //       </div>
    //     `;
    //     console.log("color==>", colorOptionsHTML);
    //   });

    //   colorOptionsHTML += `
    //     </div>

    //   `;

    //   // Append color options to product summary below the details
    //   $("#product-summary").append(colorOptionsHTML);

    //   // After appending color options, fetch and append size options
    //   fetchSizeOptions();
    // },

    // error: function () {
    //   $("#product-summary").append("<p>Failed to load filter.</p>");
    // },
  });
}
