
// Get saved projects

function getProjects() {
    var data = localStorage.getItem("projects");

    if (data == null) {
        return [];
    }

    return JSON.parse(data);
}


// Save New Project

function saveProject() {

    var name = document.getElementById("projectName").value;
    var client = document.getElementById("client").value;
    var start = document.getElementById("startDate").value;
    var deadline = document.getElementById("deadline").value;
    var budget = document.getElementById("budget").value;
    var status = document.getElementById("status").value;

    // Form Validation

    if (name.trim() == "" || client.trim() == "" ||
        start == "" || deadline == "" || budget == "") {

        alert("Please fill in all fields!");
        return false;
    }

    if (deadline < start) {
        alert("Deadline cannot be before starting date!");
        return false;
    }

    if (Number(budget) <= 0) {
        alert("Budget must be greater than zero!");
        return false;
    }

    // Create Project Object

    var project = {
        name: name,
        client: client,
        start: start,
        deadline: deadline,
        budget: budget,
        status: status
    };

    // Save Project

    var projects = getProjects();

    projects.push(project);

    localStorage.setItem("projects", JSON.stringify(projects));

    alert("Project Saved Successfully!");

    window.location.href = "project.html";

    return false;
}


// Display Projects

function showProjects() {

    var projects = getProjects();

    var table = document.getElementById("projectTable");

    table.innerHTML = "";

    if (projects.length == 0) {
        table.innerHTML =
            "<tr><td colspan='4'>No projects found.</td></tr>";
        return;
    }

    for (var i = 0; i < projects.length; i++) {

        var row = document.createElement("tr");

        var nameCell = document.createElement("td");
        nameCell.textContent = projects[i].name;

        var clientCell = document.createElement("td");
        clientCell.textContent = projects[i].client;

        var deadlineCell = document.createElement("td");
        deadlineCell.textContent = projects[i].deadline;

        var statusCell = document.createElement("td");
        statusCell.textContent = projects[i].status;

        row.appendChild(nameCell);
        row.appendChild(clientCell);
        row.appendChild(deadlineCell);
        row.appendChild(statusCell);

        table.appendChild(row);
    }
}


// Display Report

function showReport() {

    var projects = getProjects();

    var total = projects.length;

    var complete = 0;
    var running = 0;
    var pending = 0;

    for (var i = 0; i < total; i++) {

        if (projects[i].status == "Complete") {
            complete++;
        }
        else if (projects[i].status == "Running") {
            running++;
        }
        else if (projects[i].status == "Pending") {
            pending++;
        }
    }

    // Show Project Counts

    document.getElementById("total").textContent = total;
    document.getElementById("complete").textContent = complete;
    document.getElementById("running").textContent = running;
    document.getElementById("pending").textContent = pending;

    // Calculate Percentages

    var completePercent = 0;
    var runningPercent = 0;
    var pendingPercent = 0;

    if (total > 0) {
        completePercent = Math.round((complete / total) * 100);
        runningPercent = Math.round((running / total) * 100);
        pendingPercent = Math.round((pending / total) * 100);
    }

    // Show Percentages

    document.getElementById("completePercent").textContent =
        completePercent + "%";

    document.getElementById("runningPercent").textContent =
        runningPercent + "%";

    document.getElementById("pendingPercent").textContent =
        pendingPercent + "%";

    // Update Progress Bars

    document.getElementById("completeBar").value = completePercent;
    document.getElementById("runningBar").value = runningPercent;
    document.getElementById("pendingBar").value = pendingPercent;
}
