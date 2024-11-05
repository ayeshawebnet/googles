$(document).ready(function () {
    let isLogin = true; // Toggle between login and registration
  
    // Toggle between login and registration forms
    $("#toggleForm").click(function (e) {
      e.preventDefault();
      isLogin = !isLogin;
      if (isLogin) {
        $("#formTitle").text("Login Now");
        $("#registrationFields").hide();
        $(".submit").text("Sign In");
        $("#toggleForm").text("New user? Register here");
      } else {
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
  });
  