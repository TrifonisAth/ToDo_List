const addBtn = document.querySelector(".add-project");
const projectsTab = document.querySelector(".projects");
const contentTitle = document.getElementById("content-title");
const sideBtn = document.querySelector(".side-panel");
const menuBtn = document.getElementById("menu");
const tabs = document.querySelectorAll(".home-tab");
const allTasksTab = document.querySelector(".all-tasks");
const todayTasksTab = document.querySelector(".today-tasks");
const nextWeekTasksTab = document.querySelector(".next-week");
const importantTasksTab = document.querySelector(".important");

let currentTab = allTasksTab;
let openDialog = null;
tabs[0].onclick = () => changeTab(allTasksTab);
tabs[1].onclick = () => changeTab(todayTasksTab);
tabs[2].onclick = () => changeTab(nextWeekTasksTab);
tabs[3].onclick = () => changeTab(importantTasksTab);

let inputProject;
contentDisplay(currentTab);
menuBtn.onclick = showMenu;
addBtn.onclick = () => addProject();

function contentDisplay(tab) {
  tab.classList.add("selected-tab");
  // The 2nd element is always a <p> with the tab's title.
  contentTitle.textContent = tab.children[1].textContent;
}

// Show/Hide menu.
function showMenu() {
  sideBtn.classList.toggle("hidden");
}

// Project adding name prompt. Arg is stating if it is a rename prompt instead aof a new project.
function addProject(event, project, arg = false) {
  addBtn.onclick = null;
  const input = document.createElement("input");
  const redBtn = document.createElement("button");
  const greenBtn = document.createElement("button");
  const div = document.createElement("div");
  const buttons = document.createElement("div");

  div.classList.add("project-prompt");
  redBtn.classList.add("red-btn");
  redBtn.textContent = "Cancel";
  greenBtn.classList.add("green-btn");
  greenBtn.textContent = arg !== true ? "Add" : "Rename";

  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Project Name");
  input.setAttribute("name", "project");
  input.setAttribute("id", "project");
  input.setAttribute("maxlength", "20");
  input.setAttribute("autocomplete", "off");

  buttons.classList.add("buttons");
  if (arg) {
    redBtn.addEventListener("click", () =>
      cancelOption(undefined, project, true)
    );
  } else {
    redBtn.addEventListener("click", cancelOption);
  }
  greenBtn.addEventListener("click", addOption);

  buttons.appendChild(greenBtn);
  buttons.appendChild(redBtn);
  div.appendChild(input);
  div.appendChild(buttons);
  projectsTab.insertAdjacentElement("beforeend", div);
  inputProject = input;
}

// Create project. If arg === true rename existing project.
function addOption(param, arg = false) {
  addBtn.onclick = addProject;
  if (arg) {
    console.log("hey");
    projectsTab.removeChild(projectsTab.lastChild);
  }

  const project = document.createElement("div");
  project.classList.add("project");
  project.insertAdjacentHTML(
    "afterbegin",
    '<img src="../src/dot.png" alt="dot" class="side-logo project-dot"/>'
  );
  const p = document.createElement("p");
  p.textContent = inputProject.value;
  p.classList.add("project-name");
  project.appendChild(p);
  project.insertAdjacentHTML(
    "beforeend",
    '<img src="../src/settings.png" alt="settings" class="settings" />'
  );
  project.lastElementChild.addEventListener("click", (e) =>
    settingsClicked(project, e)
  );
  project.onclick = () => changeTab(project);
  projectsTab.removeChild(projectsTab.lastChild);
  projectsTab.appendChild(project);
}

// Cancel project creation.
function cancelOption(event, project, arg = false) {
  addBtn.onclick = addProject;
  if (arg) {
    project.classList.remove("hidden");
    projectsTab.removeChild(projectsTab.lastChild);
  } else {
    projectsTab.removeChild(projectsTab.lastChild);
    console.log("cancel creation");
  }
}

function changeTab(selectedTab) {
  if (selectedTab === currentTab) return;
  currentTab.classList.remove("selected-tab");
  currentTab = selectedTab;
  contentDisplay(currentTab);
}

function settingsClicked(project, e) {
  if (openDialog !== null && openDialog !== project) removeDialog(openDialog);
  openDialog = project;
  // Avoid triggering the document click event that will be added.
  e.stopPropagation();
  //   console.log(project);

  const options = document.createElement("div");
  options.classList.add("options-panel");
  const renameProjectPara = document.createElement("p");
  renameProjectPara.textContent = "Rename";
  const deleteProjectPara = document.createElement("p");
  deleteProjectPara.textContent = "Delete";
  options.appendChild(renameProjectPara);
  options.appendChild(deleteProjectPara);
  project.appendChild(options);
  document.addEventListener("click", (e) =>
    checkClick(e, renameProjectPara, deleteProjectPara, project)
  );
}

function checkClick(event, option1, option2, project) {
  console.log(openDialog === project);
  if (event.target == option1) renameProject(project);
  if (event.target == option2) deleteProject(project);
  // You might want to remove the listener!!!
  removeDialog(project);
}

function deleteProject(project) {
  for (i = 1; i < projectsTab.children.length; i++) {
    if (projectsTab.children[i].classList.contains("selected-tab"))
      projectsTab.removeChild(projectsTab.children[i]);
  }
  changeTab(todayTasksTab); // Display today's content.
}

function renameProject(project) {
  const projectName = project.children[1].textContent;
  project.classList.add("hidden"); // Remove hidden class in final steps!! -----
  addProject(undefined, project, true);
  projectsTab.lastChild.children[0].value = projectName; // Input placeholder = project old name.
}

function removeDialog(el) {
  if (el.lastElementChild.classList.contains("options-panel"))
    el.removeChild(el.lastElementChild);
}
