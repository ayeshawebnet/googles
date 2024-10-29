// Call initializePage to load everything when the script runs

function initializeFilterHtml() {
  const filterHTML = `
<div id="filters">
   <!-- 
    <div class="search-hotel">
        <form id="searchForm" action="#" method="post">
            <input class="form-control" type="search" id="searchInput" placeholder="Search here..." required="" />
            <button type="submit" class="btn1">
                <i class="fas fa-search"></i>
            </button>
        </form>
    </div>

    <div class="range" id="priceRange"></div>
    -->


    <!-- Category Filters -->
    <div class="left-side">
    <h3 class="agileits-sear-head">Category</h3>
       <div class="mydict">
        <div id="categoryFilters"></div>
      </div>
    </div>

    <!-- Gender Filters -->
    <div class="left-side">
    <h3 class="agileits-sear-head">Gender</h3>
    <div class="gender-card">
        <form action="#">
            <div class="radio-wrapper" id="genderFilters"></div>
        </form>
    </div>
    </div>
    
    <!-- Front Color Filters -->
    <div class="left-side" id="frontColorFilters">
     
    </div>


    <div class="left-side" id="sizeFilters"></div>
    <div class="left-side" id="frameShapeFilters"></div>
    <div class="left-side" id="frameMaterialFilters"></div>
    <div class="left-side" id="lensTypeFilters"></div>
    <div class="customer-rev left-side" id="reviewFilters"></div>
    <div class="deal-leftmk left-side" id="specialDeals"></div>
</div>
    `;
  $("#filter-desktop").html(filterHTML);
}

// Function to gather selected filter data
async function collectSelectedFilters() {
  const filters = {
    catCode: $('input[name="category"]:checked').val() || "",
    genders: $('input[name="gender"]:checked').val() || "",
    FilterBy:{
      optics_frames_colour: $(".filter-select").val() || "",
    },
    // brand: $('input[name="brand"]:checked').val() || "",
    // size: $('input[name="size"]:checked').val() || "",
    // frameShape: $('input[name="frameShape"]:checked').val() || "",
    // frameMaterial: $('input[name="frameMaterial"]:checked').val() || "",
    sub_shopCode: "gulzarioptics",
  };
  console.log("Selected Filters:", filters);
  const products = await fetchProducts(filters);
  await renderShopPage(products);
}

// Function to fetch and display product categories with radio buttons
async function renderCategoryFilters() {
  const categories = await listProductCategories();
  const categoryHtml = categories
    .map(
      (category) => `
        <label>
          <input type="radio" 
                 ${category.code === "optics_frames" ? 'checked="checked"' : ""}
                 value="${category.code}" name="category" />
          <span>${category.label}</span>
        </label>`
    )
    .join("");
  $("#categoryFilters").html(categoryHtml);

  // Initial filter application based on the default checked category
  const initialCategory = $('input[name="category"]:checked').val();
  handleCategoryChange(initialCategory);

  // Event listener for category changes
  $('input[name="category"]').change(function () {
    handleCategoryChange($(this).val());
  });
}

// Function to update and render filters based on the selected category
async function handleCategoryChange(selectedCategory) {
  const categoryFilters = await listCategoryFilters(selectedCategory);
  renderSubCategoryFilters(selectedCategory, categoryFilters);
  collectSelectedFilters();
}


// Function to render sub-category filters based on selected category
function renderSubCategoryFilters(selectedCategory, categoryFilters) {
  if (!categoryFilters || !categoryFilters.filters) return;

  // Iterate over each filter in categoryFilters.filters and render based on 'code'
  categoryFilters.filters.forEach((filter) => {
    switch (filter.code) {
      case "genders":
        renderGenderFilters(filter.attributes);
        break;
      case "front_color":
        renderFrontColorFilters(filter.attributes);
        break;
      case "front_material":
        renderFrontMaterialFilters();
        break;
      case "shape":
        renderShapeFilters();
        break;
      case "brand":
        renderBrandFilters();
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

// Placeholder functions for rendering specific filters
function renderGenderFilters(filter) {
  console.log("Rendering Gender Filter");
    const genderFilterHTML = filter
    .map((attr) => {
      // const icon = genderIcons[attr.code] || genderIcons.default; // Use the matched icon or default
       // ${icon.svg}
      return `
        <input class="gender-radio-buttons" id="${attr.code}" value="${attr.code}" name="gender" type="radio" />
        <label class="genderlabel otherbutton" for="${attr.code}">
          ${attr.label}
        </label>
      `;
    })
    .join("");
  $("#genderFilters").html(genderFilterHTML);
  //whenever it is change get value and it should call the collectSelectedFilters
  $('input[name="gender"]').change(() => {
    collectSelectedFilters();
  });
 }

function renderFrontColorFilters(filter) {

  const frontColorFilterHTML = `
  <h3 class="agileits-sear-head">Front Color</h3>
      <label class="filter-select-wrapper">
      <select class="filter-select">
        ${filter.map((attr) => {
          return `<option value="${attr.code}">${attr.label}</option>`;
        }).join("")}     
      </select>
    </label>`;
  $("#frontColorFilters").html(frontColorFilterHTML);

  //whenever it is change get value and it should call the collectSelectedFilters
  $(".filter-select").change(collectSelectedFilters);

  

  console.log("Rendering Front Color Filter");
}

function renderFrontMaterialFilters() {
  // Implement front material filter HTML generation here
  console.log("Rendering Front Material Filter");
}

function renderShapeFilters() {
  // Implement shape filter HTML generation here
  console.log("Rendering Shape Filter");
}

function renderBrandFilters() {
  // Implement brand filter HTML generation here
  console.log("Rendering Brand Filter");
}

function renderRimFilters() {
  // Implement rim filter HTML generation here
  console.log("Rendering Rim Filter");
}

function renderTrendingFilters() {
  // Implement trending filter HTML generation here
  console.log("Rendering Trending Filter");
}


// Initialization on page load
$(document).ready(function () {
  initializeFilterHtml();
  renderCategoryFilters();
});


// function createPriceRange() {
//     const priceRangeHtml = `
//         <h3 class="agileits-sear-head">Price range</h3>
//         <ul class="dropdown-menu6">
//             <li>
//                 <div class="slider-range"></div>
//                 <input type="text" id="amount" style="border: 0; color: #ffffff; font-weight: normal" />
//             </li>
//         </ul>
//     `;
//     $('#priceRange').html(priceRangeHtml);
// }



// Handle search form submission
// document.getElementById('searchForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const searchTerm = document.getElementById('searchInput').value;
//     console.log('Searching for:', searchTerm);
//     // Add search handling logic here
// });

// function setProductFilters(filters) {

// }
