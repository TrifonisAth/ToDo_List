import "./style.css";

const projects = [];
projectLoader();

function projectLoader() {
  if (!localStorage.getItem("projects")) {
    console.log(10);
    localStorage.setItem("projects", [1, 2, 3]);
  } else {
    console.log(11);
    console.log(localStorage.getItem("projects"));
    projects = localStorage.getItem("projects");
  }
}

/////////////////////////////////////

function addProject(project) {
  projects.push(project);
}

function removeProject(projectIndex) {
  projects.splice(projectIndex, 1);
}

function findProject(projectName) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].getName() === projectName) return projects[i];
  }
}

const projectRenamer = (oldName, newName) => {
  findProject(oldName).setName(newName);
};

class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
  }

  getName() {
    return this.name;
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
}

////////////////////

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
const projectPrompt = document.querySelector(".project-prompt");
const promptInput = projectPrompt.querySelector("input");
const promptRedBtn = projectPrompt.querySelector(".red-btn");
const promptGreenBtn = projectPrompt.querySelector(".green-btn");
const renamePrompt = document.querySelector(".rename-prompt");
const renameInput = renamePrompt.querySelector("input");
const renameGreenBtn = renamePrompt.querySelector(".rename-btn");
const renameRedBtn = renamePrompt.querySelector(".cancel-btn");

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
promptRedBtn.onclick = () => {
  projectPrompt.classList.add("hidden");
  promptInput.value = "";
};

promptGreenBtn.onclick = createProject;
renameGreenBtn.onclick = renameProject;
renameRedBtn.onclick = cancelRename;

document.addEventListener("click", (e) => {
  if (openDialog === null) return;
  // Click outside of dialog should close the dialog.
  if (!openDialog.contains(e.target)) removeDialog(openDialog);
});

function createProject() {
  const project = document.createElement("div");
  project.classList.add("project");
  project.insertAdjacentHTML(
    "afterbegin",
    '<img src="../src/dot.png" alt="dot" class="side-logo project-dot"/>'
  );
  const p = document.createElement("p");
  p.textContent = promptInput.value;
  // Clear input prompt.
  promptInput.value = "";
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
  projectPrompt.classList.add("hidden");
  projectsTab.appendChild(project);

  addProject(new Project(p.textContent));
  console.log(projects[0].getName());
}

function contentDisplay(tab) {
  tab.classList.add("selected-tab");
  // The 2nd element is always a <p> with the tab's title.
  contentTitle.textContent = tab.children[1].textContent;
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
  for (let i = 3; i < projectsTab.children.length; i++) {
    if (projectsTab.children[i].classList.contains("selected-tab")) {
      projectsTab.removeChild(projectsTab.children[i]);
      // There are 3 children that are not projects themselves. The project index inside the array is i - 3.
      // Update data.
      removeProject(i - 3);
      console.log(projects);
    }
  }
  openDialog = null;
  changeTab(todayTasksTab, true);
  project.onclick = null;
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
  // Update html content.
  openRename.children[1].textContent = renameInput.value;
  cancelRename();
}

function cancelRename() {
  openRename.classList.remove("hidden");
  renamePrompt.classList.add("hidden");
  openRename = null;
}

function taskLoader(projectName) {
  const project = findProject(projectname);
  const tasks = project.getTasks();
  for (task of tasks) {
    const div = document.createElement("div");
    const taskNamePara = document.createElement("p");
    const taskDetailsPara = document.createElement("p");
    const taskDatePara = document.createElement("p");
    const favoriteImg = document.createElement("img");
  }
}
