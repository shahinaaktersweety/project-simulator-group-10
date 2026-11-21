document.getElementById("goProfileBtn").addEventListener("click", function() {
    window.location.href = "profile.html";
});

document.getElementById("goEditProfileBtn").addEventListener("click", function() {
    window.location.href = "edit.html";
});

document.getElementById("goChangePassBtn").addEventListener("click", function() {
    window.location.href = "Password.html";
});

document.getElementById("backBtn").addEventListener("click", function() {
    window.location.href = "profile.html";
});

document.getElementById("exitBtn").addEventListener("click", function() {
    if (confirm("Are you sure you want to exit?")) {
        window.close();
        document.body.innerHTML = "<h2 style='text-align:center; margin-top:50px;'>Application Closed.</h2>";
    }
});

document.getElementById("settings").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("languageError").textContent = "";
    let language = document.getElementById("language").value.trim();

    if (language === "") {
        document.getElementById("languageError").textContent = "Please select a language.";
    } else {
        alert("Settings Saved Successfully!");
    }
});

document.querySelectorAll('input[name="mode"]').forEach(function(radio) {
    radio.addEventListener("change", function() {
        if (this.value === "dark") {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
    });
});