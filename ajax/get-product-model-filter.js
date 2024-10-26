// API call to fetch product model filters
function fetchProductModelFilters(productCode) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://gulzarioptics.testspace.click/interface/index.php",
      method: "POST",
      data: JSON.stringify({
        jsonrpc: "2.0",
        method: "products.getProductModelFilters",
        params: {
          productCode: productCode,
        },
        id: "R7c1DXiJ",
      }),
      dataType: "json",
      success: function (response) {
        if (response.error) {
          $("#product-summary").append("<p>Error loading product filters.</p>");
          reject(response.error); // Reject if there’s an error
        } else {
          const productModelFilters = response.result;
          resolve(productModelFilters); // Resolve with the filters data
        }
      },
      error: function () {
        $("#product-summary").append("<p>Failed to load product filters.</p>");
        reject(new Error("Failed to load product filters"));
      },
    });
  });
}
// Functions to fetch filter options
function fetchColorOptions(colors,getColor) {
  return new Promise((resolve) => {
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
      } onclick="getProductCode('${color}')"/>
            <span class="color-box" style="background-color:${color}"></span>
          </label>
        </div>
      `;
    });

    colorOptionsHTML += `</div></div>`;

    $("#product-color").append(colorOptionsHTML);
    resolve(); // Resolve the promise once done
  });
}

function fetchSizeOptions() {
  return new Promise((resolve) => {
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
    // Add an event listener for size selection
    $("#size-box input[type='radio']").on("change", function () {
      const selectedSize = $(this).val();
      console.log("Selected size: ", selectedSize);
      // You can perform actions here based on the selected size
    });
    // Append size options below the color options
    $("#product-filters").append(sizeOptionsHTML);
    resolve();
  });
}

function fetchFrontMaterialOptions(materials,default_material) {
  return new Promise((resolve) => {
    let materialHtml = `
    <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="inputGroupSelectFrontMaterial">Front Material</label>
    </div>
    <select class="custom-select" id="inputGroupSelectFrontMaterial">
      <option selected>${default_material}</option>
      ${materials.map((material) => {
        return `<option value="${material}">${material}</option>`;
      })}
    </select>
  </div>
    `;
    $("#product-filters").append(materialHtml);
    resolve();
  });
}

function fetchSideMaterialOptions(materials,default_material) {
  return new Promise((resolve) => {
    let materialHtml = `
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelectSideMaterial">Side Material</label>
  </div>
  <select class="custom-select" id="inputGroupSelectSideMaterial">
    <option selected>${default_material}</option>
    ${materials.map((material) => {
      return `<option value="${material}">${material}</option>`;
    })}
  </select>
  `;
    $("#product-filters").append(materialHtml);
    resolve();
  });
}

function fetchShapeOptions(shape,default_shape) {
  return new Promise((resolve) => {
    let shapeHtml = `
    <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="inputGroupSelectShape">Shape</label>
    </div>
    <select class="custom-select" id="inputGroupSelectShapeO">
      <option selected>${default_shape}</option>
     ${shape.map((shape) => {
       return `<option value="${shape}">${shape}</option>`;
     })}
    </select>
    `;
    $("#product-filters").append(shapeHtml);
    resolve();
  });
}

function fetchFrameWidthOptions(width,default_width) {
  return new Promise((resolve) => {
    let widthHtml = `
    <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="inputGroupSelectFrameWidth">Frame Width</label>
    </div>
    <select class="custom-select" id="inputGroupSelectFrameWidth">
      <option selected>${default_width}</option>
      ${width.map((width) => {
        return `<option value="${width}">${width}</option>`;
      })}
    </select>
    `;
    $("#product-filters").append(widthHtml);
    resolve();
  });
}

function fetchLensWidthOptions(width,default_width) {
  return new Promise((resolve) => {
    let widthHtml = `
    <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="inputGroupSelectLensWidth">Lens Width</label>
    </div>
    <select class="custom-select" id="inputGroupSelectLensWidth">
      <option selected>${default_width}</option>
      ${width.map((width) => {
        return `<option value="${width}">${width}</option>`;
      })}
    </select>
    `;
    $("#product-filters").append(widthHtml);
    resolve();
  });
}

function fetchLensHeightOptions(height,default_height) {
  return new Promise((resolve) => {
    let heightHtml = `
    <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="inputGroupSelectLensHeight">Lens Height</label>
    </div>
    <select class="custom-select" id="inputGroupSelectLensHeight">
      <option selected>${default_height}</option>
      ${height.map((height) => {
        return `<option value="${height}">${height}</option>`;
      })}
    </select>
    `;
    $("#product-filters").append(heightHtml);
    resolve();
  });
}

function fetchBridgeWidthOptions(width,default_width) {
  return new Promise((resolve) => {
    let widthHtml = `
    <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="inputGroupSelectBridgeWidth">Bridge Width</label>
    </div>
    <select class="custom-select" id="inputGroupSelectBridgeWidth">
      <option selected>${default_width}</option>
      ${width.map((width) => {
        return `<option value="${width}">${width}</option>`;
      })}
    </select>
    `;
    $("#product-filters").append(widthHtml);
    resolve();
  });
}

function fetchTempleLengthOptions(length,default_length) {
  return new Promise((resolve) => {
    let lengthHtml = `
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelectTempleLength">Temple Length</label>
  </div>
  <select class="custom-select" id="inputGroupSelectTempleLength">
    <option selected>${default_length}</option>
    ${length.map((length) => {
      return `<option value="${length}">${length}</option>`;
    })}
  </select>
  `;
    $("#product-filters").append(lengthHtml);
    resolve();
  });
}

// Usage: Fetch product filters and fetch color options
async function fetchFilterOptions(productDetail) {
  try {
    const productModelFilters = await fetchProductModelFilters(
      productDetail.productInfo.product_code
    );
    if (productModelFilters) {
      const colors = productModelFilters.front_color;
      const front_materials = productModelFilters.front_material;
      const side_materials = productModelFilters.side_material;
      const shapes = productModelFilters.shape;
      const frame_width = productModelFilters.frame_width;
      const lens_width = productModelFilters.lens_width;
      const lens_height = productModelFilters.lens_height;
      const bridge_width = productModelFilters.bridge;
      const temple_length = productModelFilters.temple_length;
      const getFilteredData = productDetail.sets;
      let filterOptionsHTML = `
    <div id="product-color"></div>
    <h3 class="mt-4">Product Filters</h3>
    <div id="product-filters">
    </div>
    `;
      // Append all options after they have loaded
      $("#product-summary").append(filterOptionsHTML);

      await fetchColorOptions(colors,getFilteredData.optics_frames_colour.front_color);
      await fetchFrontMaterialOptions(front_materials,getFilteredData.optics_frames_material.front_material);
      await fetchSideMaterialOptions(side_materials,getFilteredData.optics_frames_material.side_material);
      await fetchShapeOptions(shapes,getFilteredData.optics_frames_style.shape);
      await fetchFrameWidthOptions(frame_width,getFilteredData.optics_frames_frame_dimensions.frame_width);
      await fetchLensWidthOptions(lens_width,getFilteredData.optics_frames_frame_dimensions.lens_height);
      await fetchLensHeightOptions(lens_height,getFilteredData.optics_frames_frame_dimensions.lens_width);
      await fetchBridgeWidthOptions(bridge_width,getFilteredData.optics_frames_frame_dimensions.bridge);
      await fetchTempleLengthOptions(temple_length,getFilteredData.optics_frames_frame_dimensions.temple_length);
    } else {
      //show loader
      let loading = `<div class="loading-spinner">...loading</div>`;
      $("#product-summary").append(loading);
      console.log(loading);
    }
  } catch (error) {
    console.error("Error fetching filter options:", error);
  }
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
