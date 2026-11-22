// Get the three page sections
var registerPage = document.getElementById("registerPage");
var loginPage = document.getElementById("loginPage");
var dashboardPage = document.getElementById("dashboardPage");

// Get the forms
var registerForm = document.getElementById("registerForm");
var loginForm = document.getElementById("loginForm");

// Show only the selected page
function showPage(pageToShow) {
    registerPage.classList.add("hidden");
    loginPage.classList.add("hidden");
    dashboardPage.classList.add("hidden");

    pageToShow.classList.remove("hidden");
}

// Login link from Registration page
document.getElementById("goToLogin").addEventListener("click", function(event) {
    event.preventDefault();
    showPage(loginPage);
});

// Registration form
registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var fullName = document.getElementById("fullName").value;
    var userName = document.getElementById("userName").value;
    var email = document.getElementById("registerEmail").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("registerPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        document.getElementById("registerMessage").innerText = "Passwords do not match!";
        return;
    }

    var user = {
        fullName: fullName,
        userName: userName,
        email: email,
        phone: phone,
        password: password
    };

    localStorage.setItem("projectFlowUser", JSON.stringify(user));

    document.getElementById("registerMessage").innerText = "";
    document.getElementById("loginEmail").value = email;
    document.getElementById("loginMessage").innerText = "";

    // Registration successful: move to Login page
    showPage(loginPage);
});

// Previous button on Login page
document.getElementById("backToRegister").addEventListener("click", function() {
    showPage(registerPage);
});

// Login form
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var enteredEmail = document.getElementById("loginEmail").value;
    var enteredPassword = document.getElementById("loginPassword").value;

    var savedUser = localStorage.getItem("projectFlowUser");

    if (savedUser === null) {
        document.getElementById("loginMessage").innerText = "Please register first.";
        return;
    }

    var user = JSON.parse(savedUser);

    if (enteredEmail === user.email && enteredPassword === user.password) {
        document.getElementById("loginMessage").innerText = "";
        showPage(dashboardPage);
    } else {
        document.getElementById("loginMessage").innerText = "Incorrect email or password.";
    }
});

// Logout returns to Login page
document.getElementById("logoutButton").addEventListener("click", function() {
    document.getElementById("loginPassword").value = "";
    showPage(loginPage);
});

// Highlight the selected sidebar item
var menuButtons = document.querySelectorAll(".menu-button");

for (var i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener("click", function() {
        for (var j = 0; j < menuButtons.length; j++) {
            menuButtons[j].classList.remove("active");
        }

        this.classList.add("active");
    });
}
