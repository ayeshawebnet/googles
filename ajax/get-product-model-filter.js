// Functions to fetch filter options
function fetchColorOptions(colorOptions, defaultColor,product_model) {
  return new Promise((resolve) => {
    // Start building color options HTML
    const colorOptionsHTML = `
      <div class="image-gallery-group" data-gallery-id="1">
        <div class="sub-heading">Select Colour :</div>
        <div class="color-options">
          ${colorOptions
            .map(
              (color) => `
              <div class="colr">
                <label class="radio">
                  <input type="radio" name="radio-gallery-1" value="${color}" ${
                color === defaultColor ? 'checked="checked"' : ""
              } />
                  <span class="color-box" style="background-color:${color}"></span>
                </label>
              </div>`
            )
            .join("")}
        </div>
      </div>`;

    // Append the color options to #product-color
    $("#product-color").html(colorOptionsHTML);

    // Attach event listener to radio buttons for color selection change
    $("input[name='radio-gallery-1']").on("change", function () {
      const selectedColor = $(this).val();
      console.log("Selected color: ", this.value);
      fetchProductCodeByTag(selectedColor,"optics_frames_colour", "front_color",product_model);
    });
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

function fetchFrontMaterialOptions(materialOptions,defaultMaterial,product_model) {
  return new Promise((resolve) => {
    let materialHtml = `
    <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="inputGroupSelectFrontMaterial">Front Material</label>
    </div>
    <select class="custom-select" id="inputGroupSelectFrontMaterial">
      ${materialOptions.map((material) => {
        return `<option value="${material}" ${material==defaultMaterial?"selected":""}>${material}</option>`;
      })}
    </select>
  </div>
    `;
    $("#product-filters").append(materialHtml);
    $("#inputGroupSelectFrontMaterial").on("change", function () {
      const selectedMaterial = $(this).val();
      console.log("Selected front material: ", selectedMaterial);
      fetchProductCodeByTag(selectedMaterial,"optics_frames_material","front_material",product_model);
    });
    resolve();
  });
}

function fetchSideMaterialOptions(materialOptions,defaultMaterial,product_model) {
  return new Promise((resolve) => {
    let materialHtml = `
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelectSideMaterial">Side Material</label>
  </div>
  <select class="custom-select" id="inputGroupSelectSideMaterial">
    ${materialOptions.map((material) => {
      return `<option value="${material}"  ${material==defaultMaterial?"selected":""}>${material}</option>`;
    })}
  </select>
  `;
    $("#product-filters").append(materialHtml);
    $("#inputGroupSelectSideMaterial").on("change", function () {
      const selectedMaterial = $(this).val();
      console.log("Selected side material: ", selectedMaterial);
      fetchProductCodeByTag(selectedMaterial,"optics_frames_material","side_material",product_model);
    })
    resolve();
  });
}

function fetchShapeOptions(shapeOptions,defaultShape,product_model) {
  return new Promise((resolve) => {
    let shapeHtml = `
    <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="inputGroupSelectShape">Shape</label>
    </div>
    <select class="custom-select" id="inputGroupSelectShape">
     ${shapeOptions.map((shape) => {
       return `<option value="${shape}"  ${shape==defaultShape?"selected":""}>${shape}</option>`;
     })}
    </select>
    `;
    $("#product-filters").append(shapeHtml);
    $("#inputGroupSelectShape").on("change", function () {
      const selectedShape = $(this).val();
      console.log("Selected shape: ", selectedShape);
      fetchProductCodeByTag(selectedShape,"optics_frames_style","shape",product_model);
    });
    resolve();
  });
}

function fetchFrameWidthOptions(widthOptions,defaultWidth,product_model) {
  return new Promise((resolve) => {
    let widthHtml = `
    <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="inputGroupSelectFrameWidth">Frame Width</label>
    </div>
    <select class="custom-select" id="inputGroupSelectFrameWidth">
      ${widthOptions.map((width) => {
        return `<option value="${width}"  ${width==defaultWidth?"selected":""}>${width}</option>`;
      })}
    </select>
    `;
    $("#product-filters").append(widthHtml);
    $("#inputGroupSelectFrameWidth").on("change", function () {
      const selectedWidth = $(this).val();
      console.log("Selected frame width: ", selectedWidth);
      fetchProductCodeByTag(selectedWidth,"optics_frames_frame_dimensions","frame_width",product_model);
    });
    resolve();
  });
}

function fetchLensWidthOptions(widthOptions,defaultWidth,product_model) {
  return new Promise((resolve) => {
    let widthHtml = `
    <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="inputGroupSelectLensWidth">Lens Width</label>
    </div>
    <select class="custom-select" id="inputGroupSelectLensWidth">
      ${widthOptions.map((width) => {
        return `<option value="${width}"  ${width==defaultWidth?"selected":""}>${width}</option>`;
      })}
    </select>
    `;
    $("#product-filters").append(widthHtml);
    $("#inputGroupSelectLensWidth").on("change", function () {
      const selectedWidth = $(this).val();
      console.log("Selected lens width: ", selectedWidth);
      fetchProductCodeByTag(selectedWidth,"optics_frames_frame_dimensions","lens_width",product_model);
    });
    resolve();
  });
}

function fetchLensHeightOptions(heightOptions,defaultHeight,product_model) {
  return new Promise((resolve) => {
    let heightHtml = `
    <div class="input-group mb-3">
    <div class="input-group-prepend">
      <label class="input-group-text" for="inputGroupSelectLensHeight">Lens Height</label>
    </div>
    <select class="custom-select" id="inputGroupSelectLensHeight">
      ${heightOptions.map((height) => {
        return `<option value="${height}"  ${height==defaultHeight?"selected":""}>${height}</option>`;
      })}
    </select>
    `;
    $("#product-filters").append(heightHtml);
    $("#inputGroupSelectLensHeight").on("change", function () {
      const selectedHeight = $(this).val();
      console.log("Selected lens height: ", selectedHeight);
      fetchProductCodeByTag(selectedHeight,"optics_frames_frame_dimensions","lens_height",product_model);
    });  
    resolve();
  });
}

function fetchBridgeWidthOptions(widthOptions, defaultWidth,product_model) {
  return new Promise((resolve) => {
    let bridgeWidthHtml = `
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelectBridgeWidth">Bridge Width</label>
        </div>
        <select class="custom-select" id="inputGroupSelectBridgeWidth">
          ${widthOptions.map((width) => `<option value="${width}" ${width==defaultWidth?"selected":""}>${width}</option>`).join("")}
        </select>
      </div>
    `;
    $("#product-filters").append(bridgeWidthHtml);
    $("#inputGroupSelectBridgeWidth").on("change", function () {
      const selectedWidth = $(this).val();
      console.log("Selected bridge width: ", selectedWidth);
      fetchProductCodeByTag(selectedWidth,"optics_frames_frame_dimensions","bridge",product_model);
    });
    resolve();
  });
}

function fetchTempleLengthOptions(length,default_length, product_model) {
  return new Promise((resolve) => {
    let lengthHtml = `
  <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelectTempleLength">Temple Length</label>
  </div>
  <select class="custom-select" id="inputGroupSelectTempleLength">
    ${length.map((length) => {
      return `<option ${length==default_length?"selected":""} value="${length}">${length}</option>`;
    })}
  </select>
  `;
    $("#product-filters").append(lengthHtml);
    $("#inputGroupSelectTempleLength").on("change", function () {
      const selectedLength = $(this).val();
      console.log("Selected temple length: ", selectedLength);
      fetchProductCodeByTag(selectedLength,"optics_frames_frame_dimensions","temple_length",product_model);
    });
    resolve();
  });
}

// Usage: Fetch product filters and fetch color options
async function fetchFilterOptions(productDetail) {
  try {
    
    const productModelFilters = await fetchProductModelFilters(
      productDetail.productInfo.product_code
    );
    const product_model = productDetail.productInfo.modal_number;
    if (productModelFilters) {
     
      //remove filter option if already exists
      $("#filter-option").remove();
      console.log("productModelFilters==>", document.getElementById("filter-option"));
      const {
        front_color: colors,
        front_material: frontMaterials,
        side_material: sideMaterials,
        shape: shapes,
        frame_width: frameWidth,
        lens_width: lensWidth,
        lens_height: lensHeight,
        bridge: bridgeWidth,
        temple_length: templeLength,
      } = productModelFilters;
      const filteredData = productDetail.sets;

      let filterOptionsHTML = `
      <div id="filter-option">
        <div id="product-color"></div>        
        <h3 class="mt-4">Product Filters</h3>
        <div id="product-filters"></div>
        </div>
      `;
      
      // Append all options after they have loaded
      $("#product-summary").append(filterOptionsHTML);

      await fetchColorOptions(colors, filteredData.optics_frames_colour.front_color,product_model);
      await fetchFrontMaterialOptions(frontMaterials, filteredData.optics_frames_material.front_material,product_model);
      await fetchSideMaterialOptions(sideMaterials, filteredData.optics_frames_material.side_material,product_model);
      await fetchShapeOptions(shapes, filteredData.optics_frames_style.shape,product_model);
      await fetchFrameWidthOptions(frameWidth, filteredData.optics_frames_frame_dimensions.frame_width,product_model);
      await fetchLensWidthOptions(lensWidth, filteredData.optics_frames_frame_dimensions.lens_width,product_model);
      await fetchLensHeightOptions(lensHeight, filteredData.optics_frames_frame_dimensions.lens_height,product_model);
      await fetchBridgeWidthOptions(bridgeWidth, filteredData.optics_frames_frame_dimensions.bridge,product_model);
      await fetchTempleLengthOptions(templeLength, filteredData.optics_frames_frame_dimensions.temple_length,product_model);
    } else {
      let loading = `<div class="loading-spinner">...loading</div>`;
      $("#product-summary").append(loading);
    }
  } catch (error) {
    console.error("Error fetching filter options:", error);
  }
}


