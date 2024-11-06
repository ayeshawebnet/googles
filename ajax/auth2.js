$(document).ready(function () {
  let isLogin = true; // Toggle between login and registration

  // Toggle between login and registration forms
  $("#toggleForm").click(function (e) {
    e.preventDefault();
    isLogin = !isLogin;
    if (isLogin) {
      $("#formTitle").text("Login Now");
      $("#registrationFields").hide();
      $("#forgotPasswordLink").show();
      $(".submit").text("Sign In");
      $("#toggleForm").text("New user? Register here");
    } else {
      $("#forgotPasswordLink").hide();
      $("#formTitle").text("Register Now");
      $("#registrationFields").show();
      $(".submit").text("Sign Up");
      $("#toggleForm").text("Already have an account? Sign in here");
    }
  });

  // Handle form submission for login and registration
  $("#authForm").submit(async function (e) {
    e.preventDefault();
    
    const email = $("#email").val();
    const password = $("#password").val();
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();

    const requestData = {
      jsonrpc: "2.0",
      method: isLogin ? "customers.login" : "customers.register_customer",
      params: isLogin
        ? { userName: email, password: password, userRole: "customer" }
        : {
            firstName: firstName,
            lastName: lastName,
            userName: email,
            password: password,
            userRole: "customer",
          },
      id: isLogin ? "Xl4E2zho" : "HpV9eY5Q",
    };

    try {
      const response = await $.ajax({
        url: "https://gulzarioptics.testspace.click/interface/index.php",
        method: "POST",
        data: JSON.stringify(requestData),
        dataType: "json",
      });
      
      if (response.error) {
        throw new Error(response.error.message || "Error during authentication");
      }

      if (isLogin) {
        alert("Login successful");
        // Perform any additional actions, like redirecting the user
      } else {
        alert("Registration successful");
        // Optionally switch to login view after successful registration
        isLogin = true;
        $("#toggleForm").click();
      }
    } catch (error) {
      console.error("Authentication error:", error.message);
      alert("An error occurred: " + error.message);
    }
  });

  // forgot password
   // Show the Forgot Password modal when the link is clicked
$("#forgotPasswordLink").click(function (e) {
  e.preventDefault();
  $("#forgotPasswordModal").modal();
});

// Handle Forgot Password form submission
$("#forgotPasswordForm").submit(async function (e) {
  e.preventDefault();
  const email = $("#forgotPasswordEmail").val();
  const requestData = {
    jsonrpc: "2.0",
    method: "users.forgotPassword",
    params: { userName: email },
    id: "HvPaQRoa",
  };

  try {
    const response = await $.ajax({
      url: "https://gulzarioptics.testspace.click/interface/index.php",
      method: "POST",
      data: JSON.stringify(requestData),
      dataType: "json",
    });

    if (response.error) {
      throw new Error(response.error.message || "Error resetting password");
    }

    alert("Password reset instructions sent to your email.");
    $("#forgotPasswordModal").modal('hide'); 
  } catch (error) {
    console.error("Forgot password error:", error.message);
    alert("An error occurred: " + error.message);
  }
});


$("#resetPasswordForm").submit(async function (e) {
  e.preventDefault();
  const token = "4b3aa4cd26d2a2152f5da653ce7348bf"; // Replace with the actual token or pass it dynamically
  const newPassword = $("#newPassword").val();
  const confirmPassword = $("#confirmPassword").val();

  // Validation
  if (newPassword !== confirmPassword) {
    $("#responseMessage").text("Passwords do not match. Please try again.");
    return;
  }

  const requestData = {
    jsonrpc: "2.0",
    method: "users.reset_password",
    params: {
      token: token,
      new_password: newPassword,
      confirm_password: confirmPassword
    },
    id: "HvPaQRoa"
  };

  $.ajax({
    url: "https://gulzarioptics.testspace.click/interface/index.php",
    type: "POST",
    data: JSON.stringify(requestData),
    dataType: "json",
    success: function (response) {
      if (response.result) {
        $("#responseMessage").text("Password reset successfully!");
      } else {
        $("#responseMessage").text("Error resetting password. Please try again.");
      }
    },
    error: function () {
      $("#responseMessage").text("An error occurred. Please try again.");
    }
  });
});

});
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