//Home Page: trending, new arrival and fetch product : Reusable function to fetch and render product lists
async function fetchAndRenderProductList({ filters, skeletonId, listId, label = "" }) {
    showSkeletonLoader(skeletonId);
  
    const productListElement = $(listId);
    // Destroy any existing carousel on the list element
    productListElement.trigger("destroy.owl.carousel");
  
    try {
      const products = await fetchProducts(filters);
  
      if (products?.list?.length) {
        // Populate the HTML with the product data
        productListElement.html(generateProductSliderHTML(products.list));
       
        if (label) $(".gender-selection-btn").text(label); // Update label if provided
  
        // Initialize carousel for the list
        initializeCarousel(listId);
        
      } else {
        productListElement.html("<p>No products found.</p>");
      }
    } catch (error) {
      console.error(`Failed to load products for ${listId}:`, error);
      productListElement.html("<p>Error loading products.</p>");
    } finally {
      hideSkeletonLoader(skeletonId);
    }
}
  
  