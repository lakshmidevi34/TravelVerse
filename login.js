document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");
  
    // Simple login check (just for learning/demo)
    if (username === "admin" && password === "12345") {
      alert("Login successful!");
      errorMsg.textContent = "";
    } else {
      errorMsg.textContent = "Invalid username or password.";
    }
  });
  