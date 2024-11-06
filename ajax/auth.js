let isLogin = true;
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
    const response = await fetch(API_URL, {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message || "Error during authentication");
    }

    alert(isLogin ? "Login successful" : "Registration successful");
    if (!isLogin) {
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
    const response = await fetch(API_URL, {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message || "Error resetting password");
    }

    alert("Password reset instructions sent to your email.");
    $("#forgotPasswordModal").modal("hide");
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
      confirm_password: confirmPassword,
    },
    id: "HvPaQRoa",
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();

    $("#responseMessage").text(
      data.result
        ? "Password reset successfully!"
        : "Error resetting password. Please try again."
    );
  } catch (error) {
    $("#responseMessage").text("An error occurred. Please try again.");
    console.error("Reset password error:", error);
  }
});
