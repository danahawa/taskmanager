class Task {
    constructor(id, description) {
        this.id = id;
        this.description = description;
        this.completed = false;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
        }

    addTask(description) {
        const id = this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1;
          this.tasks.push(new Task(id, description));
    }

    viewTasks() {
          this.tasks.forEach(task => {
            console.log(`${task.id}: ${task.description} [${task.completed ? true : false}]`);
        });
        }

    toggleTask(id) {
        const task = this.tasks.find(task => task.id === id);
         if (task) task.completed = !task.completed;
    }

    removeTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
         }

    updateTask(id, newDescription) {
        const task = this.tasks.find(t => t.id === id);
        if (task) task.description = newDescription;
    }

    searchTasks(query) {
        return this.tasks.filter(t => t.description.toLowerCase().includes(query.toLowerCase()));
    }
}

const taskManager = new TaskManager();
taskManager.addTask("go shopping ");
taskManager.addTask("house cleaning");
taskManager.viewTasks();
taskManager.toggleTask(1);
taskManager.updateTask(2, "cleaning the house in the morning");
taskManager.removeTask(1);
const results = taskManager.searchTasks("go shopping ");
console.log(results);