document.addEventListener("DOMContentLoaded", function () {
  const galleryGroups = document.querySelectorAll(".image-gallery-group");

  // Simulate an API that returns images based on the selected color
  const api = {
    getImages: function (color) {
      const images = {
        grey: ["images/dgrey1.jpg", "images/dgrey2.jpg", "images/dgrey3.jpg"],
        black: [
          "images/dblack2.jpg",
          "images/dblack1.jpg",
          "images/dblack3.jpg",
        ],

        white: [
          "images/dwhite1.jpg",
          "images/dwhite2.jpg",
          "images/dwhite3.jpg",
        ],
      };
      return images[color] || [];
    },
  };

  // Function to load images into the gallery
  function loadImages(color) {
    const imageGallery = document.getElementsByClassName("imageGallery-1")[0];
    const imageUrls = api.getImages(color);
    imageGallery.innerHTML = imageUrls
      .map(
        (url) => `
        <li data-thumb="${url}">
          <div class="thumb-image">
            <img src="${url}" data-imagezoom="true" class="img-fluid" alt="${color}" />
          </div>
        </li>
      `
      )
      .join("");
  }

  // Initialize all galleries with the default selected color
  // console.log(galleryGroups);
  galleryGroups.forEach((group) => {
    // const galleryId = group.dataset.galleryId;

    const defaultColor = group.querySelector(
      'input[type="radio"]:checked'
    ).value;

    loadImages(defaultColor);

    // Add event listeners to each radio button in this group
    group.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.addEventListener("change", function () {
       
          $(".flexslider1").flexslider({
            animation: "slide",
            controlNav: "thumbnails",
          });

        loadImages(this.value);
      });
    });
  });
});

// $(document).ready(function () {
//   // Initialize the Flexslider
//   $('.flexslider').flexslider({
//     animation: "slide",
//     controlNav: "thumbnails",
//   });

//   // Function to update image gallery based on radio selection
//   $('input[name="radio-gallery-1"]').on('change', function () {
//     var selectedColor = $(this).val(); // Get the value of the selected radio

//     var imageGallery = $('#imageGallery-1');
//     var newImages = [];

//     // Define images for each color
//     if (selectedColor === 'black') {
//       newImages = [
//         { src: 'images/dblack1.jpg', thumb: 'images/dblack1.jpg' },
//         { src: 'images/dblack2.jpg', thumb: 'images/dblack2.jpg' },
//         { src: 'images/dblack3.jpg', thumb: 'images/dblack3.jpg' }
//       ];
//     } else if (selectedColor === 'grey') {
//       newImages = [
//         { src: 'images/dgrey1.jpg', thumb: 'images/dgrey1.jpg' },
//         { src: 'images/dgrey2.jpg', thumb: 'images/dgrey2.jpg' },
//         { src: 'images/dgrey3.jpg', thumb: 'images/dgrey3.jpg' }
//       ];
//     } else if (selectedColor === 'white') {
//       newImages = [
//         { src: 'images/dwhite1.jpg', thumb: 'images/dwhite1.jpg' },
//         { src: 'images/dwhite2.jpg', thumb: 'images/dwhite2.jpg' },
//         { src: 'images/dwhite3.jpg', thumb: 'images/dwhite3.jpg' }
//       ];
//     }

//     // Clear the current images in the slider
//     imageGallery.empty();

//     // Add the new images to the slider
//     $.each(newImages, function (index, image) {
//       imageGallery.append(
//         `<li data-thumb="${image.thumb}">
//             <div class="thumb-image">
//               <img src="${image.src}" data-imagezoom="true" class="img-fluid" alt=" " />
//             </div>
//           </li>`
//       );
//     });

//     // Completely destroy the current Flexslider instance
//     $('.flexslider').flexslider('destroy');

//     // Reinitialize Flexslider with the updated image list
//     $('.flexslider').flexslider({
//       animation: "slide",
//       controlNav: "thumbnails",
//     });
//   });
// });
