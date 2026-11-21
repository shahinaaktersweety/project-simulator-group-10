document.getElementById("profileBtn").addEventListener("click", function() {
    window.location.href = "profile.html";
});

document.getElementById("editProfileBtn").addEventListener("click", function() {
    window.location.href = "edit.html";
});

document.getElementById("settingsBtn").addEventListener("click", function() {
    window.location.href = "Settings.html";
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

document.getElementById("changePassForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let currentPass = document.getElementById("currentPass").value.trim();
    let newPass = document.getElementById("newPass").value.trim();
    let confirmPass = document.getElementById("confirmPass").value.trim();
    let errorText = document.getElementById("passError");

    if (currentPass === "") {
        errorText.style.color = "#dc2626";
        errorText.textContent = "Please enter current password.";
        return;
    }

    if (newPass.length < 8) {
        errorText.style.color = "#dc2626";
        errorText.textContent = "Password must be at least 8 characters.";
        return;
    }

    if (newPass !== confirmPass) {
        errorText.style.color = "#dc2626";
        errorText.textContent = "New password and Confirm password do not match!";
        return;
    }

    errorText.style.color = "#16a34a";
    errorText.textContent = "Password changed successfully!";
    alert("Password changed successfully!");
});