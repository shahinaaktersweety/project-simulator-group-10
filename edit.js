document.getElementById("profileBtn").addEventListener("click", function() {
    window.location.href = "profile.html";
});

document.getElementById("settingsBtn").addEventListener("click", function() {
    window.location.href = "Settings.html";
});

document.getElementById("changePassBtn").addEventListener("click", function() {
    window.location.href = "Password.html";
});

document.getElementById("backBtn").addEventListener("click", function() {
    window.location.href = "Settings.html";
});

document.getElementById("exitBtn").addEventListener("click", function() {
    if (confirm("Are you sure you want to exit?")) {
        window.close();
        document.body.innerHTML = "<h2 style='text-align:center; margin-top:50px;'>Application Closed.</h2>";
    }
});

// Photo Selection
document.getElementById("photoBox").addEventListener("click", function() {
    document.getElementById("photoInput").click();
});

document.getElementById("photoInput").addEventListener("change", function() {
    if (this.files.length > 0) {
        document.getElementById("photoText").textContent = "Selected: " + this.files[0].name;
    }
});

// Form Validation
document.getElementById("editProfileForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("fullName").value.trim();
    let email = document.getElementById("emailAddr").value.trim();
    let phone = document.getElementById("phoneNum").value.trim();
    let errorSpan = document.getElementById("editError");

    if (name === "" || email === "" || phone === "") {
        errorSpan.textContent = "Please fill in Full Name, E-mail, and Phone Number.";
    } else {
        errorSpan.textContent = "";
        alert("Profile Updated Successfully!");
    }
});