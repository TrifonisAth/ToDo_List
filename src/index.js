import "./style.css";
import "./view";

const projects = [];

class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
  }

  addTask(taskName, details, date) {
    const task = new Task(taskName, details, date);
  }

  removeTask(taskIndex) {
    this.taskList.splice(taskIndex, 1);
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
