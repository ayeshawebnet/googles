// Initialize the filter HTML structure
function initializeFilterHtml() {
  const filterHTML = `
  <div id="filters">
    <div class="left-side">
      <h3 class="agileits-sear-head">Price Range</h3>
      <div id="priceRange" class="priceRange price-range-slider">
        <i>...loading</i>
      </div>
    </div>

    <div class="left-side">
      <h3 class="agileits-sear-head">Category</h3>
      <div class="mydict">
        <div id="categoryFilters" class="categoryFilters"></div>
      </div>
    </div>

    <div class="left-side">
      <h3 class="agileits-sear-head remove-content"></h3>
      <div class="gender-card">
        <form action="#">
          <div class="radio-wrapper remove-content genderFilters" id="genderFilters"></div>
        </form>
      </div>
    </div>

    <div class="left-side">
      <h3 class="agileits-sear-head remove-content"></h3>
      <div class="mydict">
        <div id="frontMaterialFilters" class="frontMaterialFilters remove-content"></div>
      </div>
    </div>

    <div class="left-side">
      <h3 class="agileits-sear-head remove-content"></h3>
      <div class="mydict">
        <div id="shapeFilters" class="shapeFilters remove-content"></div>
      </div>
    </div>

    <div class="left-side remove-content frontColorFilters" id="frontColorFilters"></div>
    <div class="left-side remove-content brandFilters" id="brandFilters"></div>
   
  </div>
  `;

  $("#filter-desktop, #filter-mobile").html(filterHTML);
}

// Collect selected filter data
async function collectSelectedFilters() {
  const filters = {
    catCode: $('input[name="category"]:checked').val() || "",
    genders: $('input[name="gender"]:checked').val() || "",
    shape: $('input[name="shape"]:checked').val() || "",
    front_color: $(".fcolor-select").val() || "",
    front_material: $('input[name="front_material"]:checked').val() || "",
    brand: $(".brand-select").val() || "",
    price_min: $(".min-price").val() || "",
    price_max: $(".max-price").val() || "",
    sub_shopCode: "gulzarioptics",
  };
  console.log("Selected Filters:", filters);
  $("#product-list").html("...loading");
  $(".pagination-controls").hide();


  try {
    const products = await fetchProducts(filters);
    if (products.list.length > 0) {
      await Promise.all([
        renderPriceRangeFilters(products.price_min, products.price_max),
        renderShopComponent(products.list),
      ]);
      $(".pagination-controls").show();
    } else {
      $("#product-list").html("No products found.");
    }
  } catch (error) {
    $("#product-list").html("Error loading products.");
    console.error("Error in collectSelectedFilters:", error);
  }
}

// Render category filters with radio buttons
async function renderCategoryFilters() {
  const categories = await fetchListProductsByCategory();
  const categoryHtml = categories.map(category => `
    <label>
      <input type="radio" ${category.code === "optics_frames" ? 'checked="checked"' : ""} value="${category.code}" name="category" />
      <span>${category.label}</span>
    </label>
  `).join("");

  $("#categoryFilters").html(categoryHtml);

  // Set initial category and add change event listener
  const initialCategory = $('input[name="category"]:checked').val();
  handleCategoryChange(initialCategory);
  $('input[name="category"]').change(function () {
    handleCategoryChange($(this).val());
  });
}

// Handle category change and update filters accordingly
async function handleCategoryChange(selectedCategory) {
  const categoryFilters = await fetchListCategoriesFilters(selectedCategory);
  renderSubCategoryFilters(selectedCategory, categoryFilters);
  console.log("Selected Category:", selectedCategory);
  // collectSelectedFilters();  // Called only once here
  debounceCollectFilters(); 
}

// Render sub-category filters dynamically
function renderSubCategoryFilters(selectedCategory, categoryFilters) {
  if (!categoryFilters || !categoryFilters.filters) return;

  // Clear previous filters
  $(".remove-content").empty();

  // Render filters based on 'code' attribute
  categoryFilters.filters.forEach(filter => {
    switch (filter.code) {
      case "genders":
        renderGenderFilters(filter.attributes);
        break;
      case "front_color":
        renderFrontColorFilters(filter.attributes);
        break;
      case "front_material":
        renderFrontMaterialFilters(filter.attributes);
        break;
      case "shape":
        renderShapeFilters(filter.attributes);
        break;
      case "brand":
        renderBrandFilters(filter.attributes);
        break;
      case "rim":
        renderRimFilters();
        break;
      case "is_trending":
        renderTrendingFilters();
        break;
      default:
        console.warn("Unknown filter type:", filter.code);
    }
  });
}

// Render price range filter
function renderPriceRangeFilters(min, max) {
  $("#priceRange").empty().html(`
    <input value="${min}" placeholder="min" step="500" type="number" class="min-price">
    <input value="${max}" placeholder="max" step="500" type="number" class="max-price">
  `);
}

// Render individual filter types
function renderGenderFilters(filter) {
  $("#genderFilters").html(filter.map(attr => `
    <input class="gender-radio-buttons gender_active" id="${attr.code}" value="${attr.code}" name="gender" type="radio" />
    <label class="genderlabel malebutton" for="${attr.code}">${attr.label}</label>
  `).join(""));
  $("#genderFilters").closest(".left-side").find(".agileits-sear-head").text("Gender");
  $('input[name="gender"]').change(debounceCollectFilters);
}

function renderFrontColorFilters(filter) {
  $("#frontColorFilters").html(`
    <h3 class="agileits-sear-head">Front Color</h3>
    <label class="filter-select-wrapper">
      <select class="filter-select fcolor-select" onfocus='this.size=8;' onblur='this.size=1;' 
onchange='this.size=1; this.blur();'>
        <option value="" disabled selected>Choose Color</option>
        ${filter.map(attr => `<option value="${attr.code}">${attr.label}</option>`).join("")}
      </select>
    </label>
  `);
  $(".fcolor-select").change(debounceCollectFilters);
}

function renderFrontMaterialFilters(filter) {
  $("#frontMaterialFilters").html(filter.map(attr => `
    <label>
      <input type="radio" value="${attr.code}" name="front_material" />
      <span>${attr.label}</span>
    </label>
  `).join(""));
  $("#frontMaterialFilters").closest(".left-side").find(".agileits-sear-head").text("Front Material");
  $('input[name="front_material"]').change(debounceCollectFilters);
}

function renderShapeFilters(filter) {
  $("#shapeFilters").html(filter.map(attr => `
    <label>
      <input type="radio" value="${attr.code}" name="shape" />
      <span>${attr.label}</span>
    </label>
  `).join(""));
  $("#shapeFilters").closest(".left-side").find(".agileits-sear-head").text("Shape");
  $('input[name="shape"]').change(debounceCollectFilters);
  console.log("Rendering Shape Filter");
}

function renderBrandFilters(filter) {
  $("#brandFilters").html(`
    <h3 class="agileits-sear-head">Brand</h3>
    <label class="filter-select-wrapper">
      <select class="filter-select brand-select" onfocus='this.size=8;' onblur='this.size=1;' 
onchange='this.size=1; this.blur();'>
        <option value="" disabled selected>Choose Brand</option>
        ${filter.map(attr => `<option value="${attr.code}">${attr.label}</option>`).join("")}
      </select>
    </label>
  `);
  $(".brand-select").change(debounceCollectFilters);
}

function renderRimFilters() {
  console.log("Rendering Rim Filter");
}

function renderTrendingFilters() {
  console.log("Rendering Trending Filter");
}

// Debounce function to limit frequent filter calls
function debounce(fn, delay = 500) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Initialize filters on page load
$(document).ready(function () {
  initializeFilterHtml();
  renderCategoryFilters();
  window.debounceCollectFilters = debounce(collectSelectedFilters);
console.log("debounceCollectFilters",debounceCollectFilters);
  // $(".min-price, .max-price").on("input", debounceCollectFilters);
  // $(".filter-select").change(debounceCollectFilters);
});
