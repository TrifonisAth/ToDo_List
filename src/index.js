import "./style.css";
import "./index.html";
import Settings from "./settings.png";
import Dot from "./dot.png";
import Unimportant from "./star.png";
import Fav from "./important.png";

Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
  const value = this.getItem(key);
  return value && JSON.parse(value);
};

// Set value to 0 or localStorage saved, if it exists.
let currentId = localStorage.getObject("currentId") || 0;
// Set value to empty array or localStorage saved, if it exists.
let projects = localStorage.getObject("projectsList") || [];

function updateLocalStorageProjectList() {
  localStorage.setObject("projectsList", projects);
}

function updateLocalStorageId() {
  localStorage.setItem("currentId", currentId);
}

/////////////////////////////////////

function addProject(project) {
  projects.push(project);
}

function removeProject(id) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id == id) {
      projects.splice(i, 1);
      break;
    }
  }
}

function findProject(projectName) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name === projectName) return projects[i];
  }
}

function findProjectById(pid) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id == pid) return projects[i];
  }
}

const projectRenamer = (oldName, newName) => {
  findProject(oldName).name = newName;
};

class Project {
  constructor(name) {
    this.name = name;
    this.id = currentId++;
    this.taskList = [];
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  setName(newName) {
    this.name = newName;
  }

  addTask(taskName, details, date) {
    const task = new Task(taskName, details, date);
    this.taskList.push(task);
  }

  renameProject(newName) {
    this.name = newName;
  }

  removeTask(taskIndex) {
    this.taskList.splice(taskIndex, 1);
  }

  getTasks() {
    return this.taskList;
  }
}

class Task {
  constructor(name, details, date) {
    this.name = name;
    this.details = details;
    this.date = date;
    this.important = false;
  }

  edit(name, details, date) {
    this.name = name;
    this.details = details;
    this.date = date;
  }

  getName() {
    return this.name;
  }

  getDetails() {
    return this.details;
  }

  getDate() {
    return this.date;
  }

  toggleImportant() {
    this.important = !this.important;
  }

  getImportant() {
    return this.important;
  }
}

////////////////////

const addBtn = document.querySelector(".add-project");
const projectsTab = document.querySelector(".projects");
const content = document.querySelector(".content");
const contentTitle = document.getElementById("content-title");
const sideBtn = document.querySelector(".side-panel");
const menuBtn = document.getElementById("menu");
const tabs = document.querySelectorAll(".home-tab");
const allTasksTab = document.querySelector(".all-tasks");
const todayTasksTab = document.querySelector(".today-tasks");
const nextWeekTasksTab = document.querySelector(".next-week");
const importantTasksTab = document.querySelector(".important");
const projectPrompt = document.querySelector(".project-prompt");
const promptInput = projectPrompt.querySelector("input");
const promptRedBtn = projectPrompt.querySelector(".red-btn");
const promptGreenBtn = projectPrompt.querySelector(".green-btn");
const renamePrompt = document.querySelector(".rename-prompt");
const renameInput = renamePrompt.querySelector("input");
const renameGreenBtn = renamePrompt.querySelector(".rename-btn");
const renameRedBtn = renamePrompt.querySelector(".cancel-btn");
const openTaskPrompt = document.querySelector(".add-task");
const formTask = document.querySelector("form");
const taskNameInput = document.getElementById("task-name");
const taskDetailsInput = document.getElementById("task-details");
const taskDateInput = document.getElementById("task-date");
const taskAddBtn = document.getElementById("task-add-btn");
const taskCancelBtn = document.getElementById("task-cancel-btn");

let currentTab = allTasksTab;
contentDisplay(currentTab);
let openDialog = null;
let openRename = null;
tabs[0].onclick = () => changeTab(allTasksTab);
tabs[1].onclick = () => changeTab(todayTasksTab);
tabs[2].onclick = () => changeTab(nextWeekTasksTab);
tabs[3].onclick = () => changeTab(importantTasksTab);

let inputProject; // Check if it is needed or not.
// Menu sandwich button.
menuBtn.onclick = showMenu;
// Click Add project, action.
addBtn.onclick = () => {
  projectPrompt.classList.remove("hidden");
  promptInput.focus();
};
promptRedBtn.onclick = hideProjectPrompt;

promptGreenBtn.onclick = createProject;
renameGreenBtn.onclick = renameProject;
renameRedBtn.onclick = cancelRename;
openTaskPrompt.onclick = clickOpenTaskPrompt;
taskAddBtn.onclick = createTask;
taskCancelBtn.onclick = cancelTaskPrompt;

document.addEventListener("click", (e) => {
  if (openDialog === null) return;
  // Click outside of dialog should close the dialog.
  if (!openDialog.contains(e.target)) removeDialog(openDialog);
});

function createProject() {
  addProject(new Project(promptInput.value));
  hideProjectPrompt();
  updateLocalStorageId();
  updateLocalStorageProjectList();
  loadProjects("single");
}

function hideProjectPrompt() {
  projectPrompt.classList.add("hidden");
  promptInput.value = "";
}

loadProjects();

// Load the projects into html.
function loadProjects(arg) {
  for (let i = 0; i < projects.length; i++) {
    // If arg === 'single' load only the last project.
    if (arg === "single") i = projects.length - 1;
    const proj = projects[i];
    const div = document.createElement("div");
    div.dataset.id = proj.id; // Bug here!
    div.classList.add("project");
    const dot = new Image();
    dot.src = Dot;
    dot.alt = "dot";
    dot.setAttribute("class", "side-logo project-dot");
    div.insertAdjacentElement("afterbegin", dot);
    const p = document.createElement("p");
    p.textContent = proj["name"];
    p.classList.add("project-name");
    div.appendChild(p);
    const settings = new Image();
    settings.src = Settings;
    settings.alt = "settings";
    settings.setAttribute("class", "settings");
    div.insertAdjacentElement("beforeend", settings);
    div.lastElementChild.addEventListener("click", (e) =>
      settingsClicked(div, e)
    );
    div.onclick = () => changeTab(div);
    projectsTab.appendChild(div);
    // Exit loop after 1 rep, if arg === 'single'
    if (arg === "single") break;
  }
}

function contentDisplay(tab) {
  tab.classList.add("selected-tab");
  // The 2nd element is always a <p> with the tab's title.
  contentTitle.textContent = tab.children[1].textContent;
  clearContent(); // Test maybe bugs here.
}

// Show/Hide menu.
function showMenu() {
  sideBtn.classList.toggle("hidden");
}

function changeTab(selectedTab, bool) {
  if (selectedTab === currentTab && !bool) return;
  currentTab.classList.remove("selected-tab");
  currentTab = selectedTab;
  contentDisplay(currentTab);
  if (selectedTab.classList.contains("project")) {
    taskDisplay();
  } else openTaskPrompt.classList.add("hidden");
}

function settingsClicked(project, e) {
  // Click diffrent project settings => close previous settings.
  if (openDialog !== null && openDialog !== project) removeDialog(openDialog);
  // Click the same settings again.
  if (openDialog === project) return;
  openDialog = project;
  const options = document.createElement("div");
  options.classList.add("options-panel");
  const renameProjectPara = document.createElement("p");
  renameProjectPara.textContent = "Rename";
  renameProjectPara.addEventListener("click", () => editProjectName(project));
  const deleteProjectPara = document.createElement("p");
  deleteProjectPara.textContent = "Delete";
  deleteProjectPara.addEventListener("click", () => deleteProject(project));
  options.appendChild(renameProjectPara);
  options.appendChild(deleteProjectPara);
  options.onblur = () => {
    console.log("focusout");
    removeDialog(project);
  };
  project.appendChild(options);
}

function deleteProject(project) {
  removeProject(project.dataset.id);
  // Clear projectTab and reload projects.
  clearProjectTab();
  loadProjects();
  updateLocalStorageProjectList();
  openDialog = null;
  changeTab(todayTasksTab, true);
  project.onclick = null;
}

function clearProjectTab() {
  while (projectsTab.children.length > 3) {
    projectsTab.removeChild(projectsTab.lastChild);
  }
}

function editProjectName(project) {
  removeDialog(project);
  if (openRename !== project && openRename !== null) {
    openRename.classList.remove("hidden");
  }
  openRename = project;
  const projectName = project.children[1].textContent;
  project.classList.add("hidden"); // Remove hidden class in final steps!! -----
  renamePrompt.classList.remove("hidden");
  renameInput.value = projectName;
  renameInput.focus();

  openDialog = null;
}

function removeDialog(el) {
  el.removeChild(el.lastElementChild);
  openDialog = null;
}

function renameProject() {
  // Update data.
  projectRenamer(openRename.children[1].textContent, renameInput.value);
  updateLocalStorageProjectList();
  // Update html content.
  openRename.children[1].textContent = renameInput.value;
  cancelRename();
}

function cancelRename() {
  openRename.classList.remove("hidden");
  renamePrompt.classList.add("hidden");
  openRename = null;
}

function taskDisplay() {
  openTaskPrompt.classList.remove("hidden");
  const project = findProjectById(currentTab.dataset.id);
  taskLoaderProject(project.taskList);
}

function taskLoaderProject(taskList) {
  for (let i = 0; i < taskList.length; i++) {
    const task = taskList[i];
    const div = document.createElement("div");
    const top = document.createElement("div");
    const group = document.createElement("div");
    group.classList.add("group");
    top.classList.add("top");
    const bottom = document.createElement("div");
    bottom.classList.add("bottom");
    const taskNamePara = document.createElement("p");
    taskNamePara.textContent = task.taskName;
    taskNamePara.classList.add("task-name");
    const taskDetailsPara = document.createElement("p");
    taskDetailsPara.classList.add("task-details");
    taskDetailsPara.textContent = task.taskDetails;
    const taskDatePara = document.createElement("p");
    taskDatePara.textContent = task.taskDate || "no due date";
    taskDatePara.classList.add("task-date");
    const img = new Image();
    img.src = task.isImportant ? Fav : Unimportant;
    img.alt = "icon";
    img.setAttribute("class", "star"); // change it to task logo class
    const img2 = new Image();
    img2.src = Settings;
    img2.alt = "settings";
    img2.setAttribute("class", "sets");
    top.appendChild(taskNamePara);
    group.appendChild(taskDatePara);
    group.appendChild(img);
    group.appendChild(img2);
    div.classList.add("task");
    top.appendChild(group);
    div.appendChild(top);
    bottom.appendChild(taskDetailsPara);
    div.appendChild(bottom);
    content.appendChild(div);
  }
}

// Open task form.
function clickOpenTaskPrompt() {
  formTask.classList.remove("hidden");
}

function createTask() {
  // NOTE: the task gets created in the last selected project.
  const project = findProjectById(currentTab.dataset.id);
  const task = {
    taskName: taskNameInput.value,
    taskDetails: taskDetailsInput.value,
    taskDate: taskDateInput.value,
    isImportant: false,
  };
  project.taskList.push(task);
  updateLocalStorageProjectList();
  cancelTaskPrompt();
}

// Hide task form and clear input fields.
function cancelTaskPrompt() {
  formTask.classList.add("hidden");
  taskNameInput.value = "";
  taskDetailsInput.value = "";
  taskDateInput.value = "";
}

function clearContent() {
  while (content.children.length > 3) {
    content.removeChild(content.lastChild);
  }
}
