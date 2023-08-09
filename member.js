function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var memberButton = document.getElementById("memberButton");
    var skillsButton = document.getElementById("skillsButton");
    var projectsButton = document.getElementById("projectsButton");
    member.style.display = "block";
    skills.style.display = "none";
    projects.style.display = "none";
    memberButton.style.backgroundColor = "#2c3e50";
    skillsButton.style.backgroundColor = "#34495e";
    projectsButton.style.backgroundColor = "#34495e";
}
