// Call initializePage to load everything when the script runs

function initialFilterHtml() {
  const filterHTML = `
<div id="filters">
    <div class="search-hotel">
        <form id="searchForm" action="#" method="post">
            <input class="form-control" type="search" id="searchInput" placeholder="Search here..." required="" />
            <button type="submit" class="btn1">
                <i class="fas fa-search"></i>
            </button>
        </form>
    </div>

    <div class="range" id="priceRange"></div>
    <div class="left-side">
    <h3 class="agileits-sear-head">Brand</h3>
       <div class="mydict">
        <div id="categoryFilters">
            
        </div>
    </div>
    </div>
    <div class="left-side" id="genderFilters"></div>
    <div class="left-side" id="brandFilters"></div>
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

function collectFilterData() {
  const selectedCategories = [];
  $('input[type="checkbox"]:checked').each(function () {
    selectedCategories.push($(this).attr("id")); // Use the ID of the category
  });

  //selected Gender is array 
  const selectedGender = $('input[name="gender"]:checked').val(); // Get selected gender
  const selectedBrand = $('input[name="brand"]:checked').val(); // Get selected brand (only one should be selected)
  const selectedSize = $('input[name="size"]:checked').val(); // Get selected size (only one should be selected)
  const selectedFrameShape = $('input[name="frameShape"]:checked').val(); // Get selected frame shape (only one should be selected)
  const selectedFrameMaterial = $('input[name="frameMaterial"]:checked').val(); // Get selected frame material (only one should be selected)
  const selectedLensType = $('input[name="lensType"]:checked').val(); // Get selected lens type (only one should be selected)
  const selectedReview = $('input[name="customerReview"]:checked').val(); // Get selected review (only one should be selected)
  const selectedDeal = $('input[name="specialDeals"]:checked').val(); // Get selected deal (only one should be selected)

  const priceRange = {
    min: $("#amount").val().split(" - ")[0], // Assuming the slider value is set in the input field
    max: $("#amount").val().split(" - ")[1],
  };

  const searchTerm = $("#searchInput").val(); // Get the search input value

  // Construct filters as an object
  const filters = {
    featured: selectedFeatured || "",
    SearchBy: selectedSearchBy || "",
    FilterBy: {
        optics_frames_style: {
            gender: selectedGender || "",
            shape: selectedShape || "",
            brand: selectedBrand || "",
            rim: selectedRim || "",
        }
    },
    categories: selectedCategories.join(","), // Convert array to comma-separated string
   
    front_color: selectedFrontColor || "",
    front_material: selectedFrontMaterial || "",
    front_material: selectedFrontMaterial || "",
    latest: selectedLatest || "",
    isActive: selectedIsActive || "",
    catCode: selectedCatCode || "",
    model: selectedModel || "",
    pricemin: selectedPriceMin || "",
    pricemax: selectedPriceMax || "",
    tryon: selectedTryon || "",
    sale: selectedSale || "",
    page: selectedPage || "",
    per_page: selectedPerPage || "",
    tags_count: selectedTagsCount || "yes",
    sub_shopCode: selectedSubShopCode || "gulzarioptics",
    size: selectedSize || "",
    frameShape: selectedFrameShape || "",
    frameMaterial: selectedFrameMaterial || "",
    lensType: selectedLensType || "",
    review: selectedReview || "",
    deal: selectedDeal || "",
   
  };

  
  return {
    filters,
    priceRange,
    searchTerm,
  };
}
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

async function createCategoryFilters() {
  //use map
    const categoryOptions=await listProductCategories();
    console.log("categoryOptions==>",categoryOptions);
  const categoryHtml = `<h3 class="agileits-sear-head">Category</h3><ul>
    ${categoryOptions
      .map(
        (category) => `
        <label>
                <input type="radio" name="radio" />
                <span>${category.label}</span>
        </label>
    `
      )
      .join("")}
    </ul>`;
  $("#categoryFilters").append(categoryHtml);
}

async function initFilters() {
//   const getProduct = await fetchProducts();
//   console.log("getProduct==>", getProduct);
  // createPriceRange();
  createCategoryFilters();
  // createGenderFilters();
  // createBrandFilters();
  // createSizeFilters();
  // createFrameShapeFilters();
  // createFrameMaterialFilters();
  // createLensTypeFilters();
  // createReviewFilters();
  // createSpecialDeals();
}

// Initialize filters on page load
document.addEventListener("DOMContentLoaded", initFilters);
$(document).ready(function () {
    initialFilterHtml();
    initFilters();
    });
// Handle search form submission
// document.getElementById('searchForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const searchTerm = document.getElementById('searchInput').value;
//     console.log('Searching for:', searchTerm);
//     // Add search handling logic here
// });

// function setProductFilters(filters) {

// }



