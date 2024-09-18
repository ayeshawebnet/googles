document.addEventListener("DOMContentLoaded", function() {
    const galleryGroups = document.querySelectorAll('.image-gallery-group');
  
    // Simulate an API that returns images based on the selected color
    const api = {
      getImages: function(color) {
        const images = {
          black: [
            "images/dblack2.jpg",
            "images/dblack1.jpg",
            "images/dblack3.jpg"
          ],
          grey: [
            "images/dgrey1.jpg",
            "images/dgrey2.jpg",
            "images/dgrey3.jpg"
          ],
          white: [
            "images/dwhite1.jpg",
            "images/dwhite2.jpg",
            "images/dwhite3.jpg"
          ]
        };
        return images[color] || [];
      }
    };
  
    // Function to load images into the gallery
    function loadImages(galleryId, color) {
      const imageGallery = document.getElementById(`imageGallery-${galleryId}`);
      const imageUrls = api.getImages(color);
      imageGallery.innerHTML = imageUrls.map(url => `
        <li data-thumb="${url}">
          <div class="thumb-image">
            <img src="${url}" data-imagezoom="true" class="img-fluid" alt="${color}" />
          </div>
        </li>
      `).join('');
    }
  
    // Initialize all galleries with the default selected color
    galleryGroups.forEach(group => {
      const galleryId = group.dataset.galleryId;
      const defaultColor = group.querySelector('input[type="radio"]:checked').value;
      loadImages(galleryId, defaultColor);
  
      // Add event listeners to each radio button in this group
      group.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener("change", function() {
          loadImages(galleryId, this.value);
        });
      });
    });
  });
  