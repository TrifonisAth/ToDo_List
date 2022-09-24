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

tabs[0].onclick = () => changeTab(allTasksTab);
tabs[1].onclick = () => changeTab(todayTasksTab);
tabs[2].onclick = () => changeTab(nextWeekTasksTab);
tabs[3].onclick = () => changeTab(importantTasksTab);

let inputProject;

menuBtn.onclick = showMenu;
addBtn.onclick = addProject;

function contentDisplay(tab) {
  tab.classList.add("selected-tab");
  // The 2nd element is always a <p> with the tab's title.
  contentTitle.textContent = tab.children[1].textContent;
}

// Show/Hide menu.
function showMenu() {
  sideBtn.classList.toggle("hidden");
}

// Project adding name prompt.
function addProject() {
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
  greenBtn.textContent = "Add";

  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Project Name");
  input.setAttribute("name", "project");
  input.setAttribute("id", "project");
  input.setAttribute("maxlength", "20");
  input.setAttribute("autocomplete", "off");

  buttons.classList.add("buttons");

  greenBtn.addEventListener("click", addOption);
  redBtn.addEventListener("click", cancelOption);

  buttons.appendChild(greenBtn);
  buttons.appendChild(redBtn);
  div.appendChild(input);
  div.appendChild(buttons);
  projectsTab.insertAdjacentElement("beforeend", div);
  inputProject = input;
}

// Create project.
function addOption() {
  addBtn.onclick = addProject;
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
function cancelOption() {
  addBtn.onclick = addProject;
  projectsTab.removeChild(projectsTab.lastElementChild);
}

function changeTab(selectedTab) {
  if (selectedTab === currentTab) return;
  currentTab.classList.remove("selected-tab");
  currentTab = selectedTab;
  contentDisplay(currentTab);
}

function settingsClicked(project, e) {
  // Avoid triggering the document click event that will be added.
  e.stopPropagation();
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
  contentTitle.textContent = "";
}

function renameProject(project) {
  project.classList.add("hidden");
}

function removeDialog(el) {
  if (el.lastElementChild.classList.contains("options-panel"))
    el.removeChild(el.lastElementChild);
}
