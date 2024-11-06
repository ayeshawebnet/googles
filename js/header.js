

// Sample JSON data
// const menuData = [
//   {
//     label: "Home",
//     link: "/",
//     filter: null,
//   },
//   {
//     label: "Men",
//     link: null,
//     children: [
//       {
//         label: "New Arrivals",
//         filter: "/products/men-new-glasses",
//         link: null,
//         visible: true,
//       },
//       {
//         label: "Hottest Selling",
//         filter: "/products/men-hottest-glasses",
//         link: null,
//         visible: true,
//       },
//     ],
//     filter: "/products/men-glasses",
//     visible: true,
//   },
//   {
//     label: "Women",
//     link: null,
//     children: [
//       {
//         label: "All Glasses",
//         filter: "/products/women-glasses",
//         link: null,
//         visible: true,
//       },
//       {
//         label: "Designer Glasses",
//         filter: "designer_glasses",
//         visible: false,
//       },
//       {
//         label: "Economical Glasses",
//         filter: "/products/women-glasses-economical",
//         link: null,
//         visible: true,
//       },
//       {
//         label: "All Sunglasses",
//         filter: "/products/women-sunglasses",
//         link: null,
//         visible: true,
//       },
//       {
//         label: "Designer Sunglasses",
//         filter: "designer_sunglasses",
//         visible: false,
//       },
//       {
//         label: "Economical Sunglasses",
//         filter: "/products/women-sunglasses-economical",
//         link: null,
//         visible: true,
//       },
//       {
//         label: "All On Sale",
//         filter: "/products/women-glasses-sales",
//         link: null,
//         visible: true,
//       },
//       {
//         label: "New Arrivals",
//         filter: "/products/women-new-glasses",
//         link: null,
//         visible: true,
//       },
//       {
//         label: "Hottest Selling",
//         filter: "/products/women-hottest-glasses",
//         link: null,
//         visible: true,
//       },
//     ],
//     filter: "/products/women-glasses",
//     visible: true,
//   },
//   {
//     label: "Kids",
//     link: null,
//     children: [
//       {
//         label: "All Glasses",
//         filter: "/products/kids-glasses",
//         link: null,
//         visible: true,
//       },
//       {
//         label: "Designer Glasses",
//         filter: "designer_glasses",
//         visible: false,
//       },
//       {
//         label: "Economical Glasses",
//         filter: "/products/kids-glasses-economical",
//         link: null,
//         visible: true,
//       },
//       {
//         label: "All Sunglasses",
//         filter: "/products/kids-sunglasses",
//         link: null,
//         visible: true,
//       },
//       {
//         label: "Designer Sunglasses",
//         filter: "designer_sunglasses",
//         visible: false,
//       },
//       {
//         label: "Economical Sunglasses",
//         filter: "/products/kids-sunglasses-economical",
//         link: null,
//         visible: true,
//       },
//       {
//         label: "All On Sale",
//         filter: "/products/kids-glasses-sales",
//         link: null,
//         visible: true,
//       },
//       {
//         label: "New Arrivals",
//         filter: "/products/kids-new-glasses",
//         link: null,
//         visible: true,
//       },
//       {
//         label: "Hottest Selling",
//         filter: "/products/kids-hottest-glasses",
//         visible: true,
//         link: null,
//       },
//     ],
//     filter: "/products/kids-glasses",
//     visible: true,
//   },
//   {
//     label: "Frames",
//     link: null,
//     filter: "/products/frames",
//     visible: true,
//     children: [
//       {
//         label: "All Men",
//         link: null,
//         filter: "/products/men-glasses",
//         visible: true,
//       },
//       {
//         label: "All Women",
//         link: null,
//         filter: "/products/women-glasses",
//         visible: true,
//       },
//       {
//         label: "All Kids",
//         link: null,
//         filter: "/products/kids-glasses",
//         visible: true,
//       },
//       {
//         label: "All Frames",
//         link: null,
//         filter: "/products/frames",
//         visible: true,
//       },
//     ],
//   },
//   {
//     label: "Sunglasses",
//     filter: null,
//     children: [
//       {
//         label: "All Men",
//         filter: "/products/men-sunglasses",
//         link: null,
//         visible: true,
//       },
//       {
//         label: "All Women",
//         filter: "/products/women-sunglasses",
//         link: null,
//         visible: true,
//       },
//       {
//         label: "All Kids",
//         filter: "/products/kids-sunglasses",
//         link: null,
//         visible: true,
//       },
//       {
//         label: "All Glasses",
//         link: null,
//         filter: "/products/sunglasses",
//         visible: true,
//       },
//     ],
//     link: "/products",
//     visible: true,
//   },
//   {
//     label: "Eyeglasses",
//     link: "",
//     children: [
//       {
//         label: "All Men Eyeglasses",
//         filter: "all_men_eyeglasses",
//       },
//       {
//         label: "All Men Plastic Eyeglasses",
//         filter: "all_men_plastic_eyeglasses",
//       },
//       {
//         label: "All Men Metal Eyeglasses",
//         filter: "all_men_metal_eyeglasses",
//       },
//       {
//         label: "All Women Eyeglasses",
//         filter: "all_women_eyeglasses",
//       },
//       {
//         label: "All Women Plastic Eyeglasses",
//         filter: "all_women_plastic_eyeglasses",
//       },
//       {
//         label: "All Women Metal Eyeglasses",
//         filter: "all_women_metal_eyeglasses",
//       },
//       {
//         label: "All Kids Eyeglasses",
//         filter: "all_kids_eyeglasses",
//       },
//       {
//         label: "All Kids Plastic Eyeglasses",
//         filter: "all_kids_plastic_eyeglasses",
//       },
//       {
//         label: "All Kids Metal Eyeglasses",
//         filter: "all_kids_metal_eyeglasses",
//       },
//     ],
//     visible: false,
//   },
//   {
//     label: "Contact Lenses",
//     filter: "/products/frames",
//     visible: false,
//     link: null,
//     children: [
//       {
//         label: "Fresh Look",
//         link: null,
//         filter: null,
//         visible: true,
//       },
//     ],
//   },
//   {
//     label: "Transparent Lens",
//     filter: "transparent_lens",
//     children: [
//       {
//         label: "Dailies /. Material",
//         filter: "dailies_material",
//         visible: false,
//       },
//       {
//         label: "Monthly / Material",
//         filter: "monthly_material",
//       },
//       {
//         label: "Yearly / Material",
//         filter: "yearly_material",
//       },
//     ],
//     visible: false,
//   },
//   {
//     label: "Colour Lens",
//     filter: "colour_lens",
//     children: [
//       {
//         label: "Single Tone",
//         filter: "single_tone",
//       },
//       {
//         label: "Double Tone Lens",
//         filter: "double_tone_lens",
//       },
//       {
//         label: "Three Tone Lenses",
//         filter: "three_tone_lenses",
//       },
//     ],
//     visible: false,
//   },
//   {
//     label: "Prosthetic",
//     filter: "prosthetic",
//     children: [
//       {
//         label: "Three Colours",
//         filter: "three_colours",
//       },
//     ],
//     visible: false,
//   },
//   {
//     label: "Blue Filter",
//     filter: "blue_filter",
//     children: [
//       {
//         label: "Men",
//         filter: "men",
//       },
//       {
//         label: "Women",
//         filter: "women",
//       },
//       {
//         label: "Kids",
//         filter: "kids",
//       },
//     ],
//     visible: false,
//   },
//   {
//     label: "Sale",
//     filter: "/products/sale",
//     visible: true,
//     link: null,
//   },
//   {
//     label: "Try-On",
//     link: null,
//     filter: null,
//     visible: false,
//     children: [
//       {
//         label: "Men",
//         link: null,
//         filter: null,
//         visible: true,
//       },
//       {
//         label: "Women",
//         link: null,
//         filter: null,
//         visible: true,
//       },
//       {
//         label: "Kids",
//         link: null,
//         filter: null,
//         visible: true,
//       },
//     ],
//   },
//   {
//     label: "MY MENU ITEM",
//     link: null,
//     filter: null,
//     visible: true,
//   },
// ];

// Function to render menu from JSON data
function renderMenu(menuItems, parentElement) {
    menuItems.forEach((item, index) => {
      // Only display items with visible: true or the "Home" link
      if (item.visible || item.link === "/") {
        const li = document.createElement("li");
  
        if (item.link) {
          // For items with a direct link
          li.innerHTML = `<a href="${item.link}">${item.label}</a>`;
        } else {
          // For dropdowns without a direct link
          const labelLink = document.createElement("a");
          labelLink.href = "#";
          labelLink.textContent = item.label;
  
          li.appendChild(labelLink);
  
          if (item.children) {
            const arrowIcon = document.createElement("i");
            arrowIcon.className = "fa fa-chevron-down htmlcss-arrow arrow";
            li.appendChild(arrowIcon);
  
            // Create sub-menu for children items
            const subMenu = document.createElement("ul");
            subMenu.className = "htmlCss-sub-menu sub-menu";
  
            item.children.forEach((subItem) => {
              if (subItem.visible) {
                const subLi = document.createElement("li");
                subLi.innerHTML = `<a href="${subItem.filter || "#"}">${subItem.label}</a>`;
                subMenu.appendChild(subLi);
              }
            });
            
            // Add submenu to the list item
            li.appendChild(subMenu);

            const toggleSubMenu = () => {
                let subMenu = arrowIcon.nextElementSibling;
                subMenu.classList.toggle("show-submenu");
              };

              arrowIcon.addEventListener("click", toggleSubMenu);
              labelLink.addEventListener("click", (e) => {
                e.preventDefault(); // Prevent the default anchor action
                toggleSubMenu();
              });
          }
        }
        // Append to the parent element
        parentElement.appendChild(li);
      }
    });
  }
  initializeMenu();

  async function initializeMenu() {
    try {
      const menuItems = await fetchMenuItems();
      const menuContainer = document.querySelector(".ecomm-links");
      renderMenu(menuItems, menuContainer);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  }
  
  
  
