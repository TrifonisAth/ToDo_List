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
  for (i = 1; i < projectsTab.children.length; i++) {
    if (projectsTab.children[i].classList.contains("selected-tab"))
      projectsTab.removeChild(projectsTab.children[i]);
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
  openRename.children[1].textContent = renameInput.value;
  cancelRename();
}

function cancelRename() {
  openRename.classList.remove("hidden");
  renamePrompt.classList.add("hidden");
  openRename = null;
}
