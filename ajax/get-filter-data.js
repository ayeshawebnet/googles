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
-->

 <!-- Category Filters -->
    <div class="left-side">
    <h3 class="agileits-sear-head">Price Range</h3>  
      <div id="priceRange" class="price-range-slider">
 <i> ...loading </i>
      </div>
    </div>





    <!-- Category Filters -->
    <div class="left-side">
    <h3 class="agileits-sear-head">Category</h3>
       <div class="mydict">
        <div id="categoryFilters"></div>
      </div>
    </div>


    <!-- Gender Filters -->
    <div class="left-side">
    <h3 class="agileits-sear-head remove-content"></h3>
    <div class="gender-card">
        <form action="#">
            <div class="radio-wrapper remove-content" id="genderFilters"></div>
        </form>
    </div>
    </div>

    <!-- Front Material Filters -->
     <div class="left-side">
     <h3 class="agileits-sear-head remove-content"></h3>
       <div class="mydict">
        <div id="frontMaterialFilters" class="remove-content"></div>
      </div>
     </div>

      <!-- Shape Filters -->
<div class="left-side">
<h3 class="agileits-sear-head remove-content"></h3>
       <div class="mydict">
        <div id="shapeFilters" class="remove-content"></div>
      </div>
</div>

     <!-- Front Color Filters -->
    <div class="left-side remove-content" id="frontColorFilters"></div>

    <div class="left-side" id="sizeFilters"></div>
    
   
    <div class="left-side" id="lensTypeFilters"></div>
    <div class="customer-rev left-side" id="reviewFilters"></div>
    <div class="deal-leftmk left-side" id="specialDeals"></div>
</div>
    `;
  $("#filter-desktop").html(filterHTML)
  $("#filter-mobile").html(filterHTML)
}

// Function to gather selected filter data
async function collectSelectedFilters() {
  const filters = {
    catCode: $('input[name="category"]:checked').val() || "",
    
    FilterBy: {
      optics_frames_style:{ 
        genders: $('input[name="gender"]:checked').val() || "",
        shape: $('input[name="shape"]:checked').val() || "",
       },
      optics_frames_colour: { front_color: $(".filter-select").val() || "" },
      optics_frames_material: {
        front_material: $('input[name="front_material"]:checked').val() || "",
      },
    },
    price_max: $(".max-price").val() || "",
    price_min: $(".min-price").val() || "",
    // brand: $('input[name="brand"]:checked').val() || "",
    // size: $('input[name="size"]:checked').val() || "",
    // frameShape: $('input[name="frameShape"]:checked').val() || "",
    // frameMaterial: $('input[name="frameMaterial"]:checked').val() || "",
    sub_shopCode: "gulzarioptics",
  };


  $("#product-list").html("...loading");
  $(".pagination-controls").hide();
  console.log("Selected Filters:", filters);
  const products = await fetchProducts(filters);
  //show loading text
  if (products.list.length > 0) {
    console.log("Products==>", products);
    // Render the price range filters and products list if products are available
    renderPriceRangeFilters(products.price_min, products.price_max);
    await renderShopPage(products.list);

    // Show pagination controls again after loading is complete
    $(".pagination-controls").show();
  } else {
    // Display a message if no products were found
    $("#product-list").html("No products found.");
  }

 
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
  //remove filer-container content
  $(".remove-content").empty();
  // debugger;
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
        renderFrontMaterialFilters(filter.attributes);
        break;
      case "shape":
        renderShapeFilters(filter.attributes);
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

function removeFilterContainerContent() {}

// Render price range filter dynamically
function renderPriceRangeFilters(min, max) {
  // debugger;
  const minPrice = min;
  const maxPrice = max;
  $("#priceRange").empty();
  console.log("Rendering Price Range Filter", min, max);
  const priceRangeHtml = `

  <input value="${minPrice}" placeholder="min" step="500" type="number" class="min-price">
  <input value="${maxPrice}" placeholder="max" step="500" type="number" class="max-price">
`;
  $("#priceRange").html(priceRangeHtml);
}

// Placeholder functions for rendering specific filters
function renderGenderFilters(filter) {
  console.log("Rendering Gender Filter");
  const genderFilterHTML = filter
    .map((attr) => {
      // const icon = genderIcons[attr.code] || genderIcons.default; // Use the matched icon or default
      // ${icon.svg}
      return `
        <input class="gender-radio-buttons gender_active" id="${attr.code}" value="${attr.code}" name="gender" type="radio" />
        <label class="genderlabel malebutton" for="${attr.code}">
          ${attr.label}
        </label>
      `;
    })
    .join("");
  $("#genderFilters")
    .closest(".left-side")
    .find(".agileits-sear-head")
    .text("Gender");
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
      <select class="filter-select" onfocus='this.size=8;' onblur='this.size=1;' 
onchange='this.size=1; this.blur();'>
       <option value="" disabled selected>Choose Color</option>
        ${filter
          .map((attr) => {
            return `<option value="${attr.code}">${attr.label}</option>`;
          })
          .join("")}     
      </select>
    </label>`;
  $("#frontColorFilters").html(frontColorFilterHTML);
  $(".filter-select").change(collectSelectedFilters);
  console.log("Rendering Front Color Filter");
}

function renderFrontMaterialFilters(filter) {
  // Implement front material filter HTML generation here
  const frontMaterialFilterHTML = `
  ${filter
    .map(
      (attr) => `
      <label>
        <input type="radio" 
              
               value="${attr.code}" name="front_material" />
        <span>${attr.label}</span>
      </label>`
    )
    .join("")}
  `;
  $("#frontMaterialFilters")
    .closest(".left-side")
    .find(".agileits-sear-head")
    .text("Front Material");
  $("#frontMaterialFilters").html(frontMaterialFilterHTML);
  $('input[name="front_material"]').change(collectSelectedFilters);
}

function renderShapeFilters(filter) {
  // Implement shape filter HTML generation here
  const shapeFilterHTML = `
  ${filter.map((attr)=> `
     <label>
        <input type="radio" 
              
               value="${attr.code}" name="shape" />
        <span>${attr.label}</span>
      </label>`
    ).join("")}
  `;
  $("#shapeFilters").closest(".left-side").find(".agileits-sear-head").text("Shape");
  $("#shapeFilters").html(shapeFilterHTML);
  $('input[name="shape"]').change(collectSelectedFilters);
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
  renderCategoryFilters();
  initializeFilterHtml();
  
});

// range slider

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
