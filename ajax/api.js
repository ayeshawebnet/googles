// Fetch products using AJAX
async function fetchProducts() {
  const response = await $.ajax({
    url: "https://gulzarioptics.testspace.click/interface/index.php",
    method: "POST",
    data: JSON.stringify({
      jsonrpc: "2.0",
      method: "products.getAllProducts",
      params: {
        featured: "",
        SearchBy: "",
        FilterBy: {
          optics_frames_style: {
            genders: "gender_men|gender_unisex|gender_women",
            shape: "pilot",
            brand: "Marshall",
            rim: "full_rim",
          },
          optics_frames_colour: { front_color: "gold" },
          optics_frames_material: { front_material: "metal" },
        },
        latest: "",
        isActive: "active",
        catCode: "optics_frames",
        model: "",
        price_min: 0,
        price_max: 15700,
        tryon: true,
        sale: "",
        page: 1,
        per_page: 20,
        tags_count: "yes",
        sub_shopCode: "gulzarioptics",
      },
      id: "siiCYawo",
    }),
    dataType: "json",
  });

  if (response.error) throw new Error("Error loading products");
  return response.result.list;
}

// Fetch product details from API
async function fetchProductDetails(productCode) {
  const response = await $.ajax({
    url: "https://gulzarioptics.testspace.click/interface/index.php",
    method: "POST",
    data: JSON.stringify({
      jsonrpc: "2.0",
      method: "products.getProductDetails",
      params: { code: productCode, sub_shopCode: "gulzarioptics" },
      id: "k1PQf2Rp",
    }),
    dataType: "json",
  });

  if (response?.error)
    throw new Error(response.error.message || "Error loading product details");
  return response?.result || {};
}

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
          console.log("productModelFilters==>", productModelFilters);
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

//API call to fetch product code by tag
function getProductCode(tag_value, setCode, tag_key, product_model) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://gulzarioptics.testspace.click/interface/index.php",
      method: "POST",
      data: JSON.stringify({
        jsonrpc: "2.0",
        method: "products.getProductCodeByTag",
        params: {
          product_model: product_model,
          setCode: setCode,
          tag_key: tag_key,
          tag_value: tag_value,
          sub_shopCode: "gulzarioptics",
        },
        id: "eZMq1h53",
      }),
      dataType: "json",
      success: function (response) {
        if (response.error) {
          $("#product-summary").append("<p>Error loading product code.</p>");
          reject(response.error);
        }
        console.log("response==>", response);
        const productCode = response.result;
        getProductDetails(productCode);
        resolve(response.result);
      },
    });
  });
}

function listCatergoriesFilter() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://gulzarioptics.testspace.click/interface/index.php",
      method: "POST",
      data: JSON.stringify({
        jsonrpc: "2.0",
        method: "products.ListCategoryFilters",
        params: {
          catCode: "optics_sunglasses",
          sub_shopCode: "gulzarioptics",
        },
        id: "3CZRL6Mp",
      }),
      dataType: "json",
      success: function (response) {
        if (response.error) {
          $("#product-summary").append("<p>Error loading product code.</p>");
          reject(response.error);
        }
        console.log("response==>", response);
        const productCode = response.result;
        console.log("productCode==>", productCode);
        // getProductDetails(productCode);
        resolve(response.result);
      },
    });
  });
}
// listCatergoriesFilter();

function listProductCategories() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://gulzarioptics.testspace.click/interface/index.php",
      method: "POST",
      data: JSON.stringify({
        jsonrpc: "2.0",
        method: "home.listProductCategories",
        params: { sub_shopCode: "gulzarioptics" },
        id: "BYTNgXCk",
      }),
      dataType: "json",
      success: function (response) {
        if (response.error) {
          $("#product-summary").append("<p>Error loading product code.</p>");
          reject(response.error);
        }
        console.log("response==>", response);
        const productCode = response.result;
        console.log("productCode==>", productCode);
        // getProductDetails(productCode);
        resolve(response.result);
      },
    });
  });
}