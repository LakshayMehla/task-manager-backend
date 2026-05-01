// Task Model

let tasks = [];
let currentId = 1;

const TaskModel = {
    findAll: () => tasks,
    findById: (id) => tasks.find(task => task.id === id),
    create: (taskData) => {
        const newTask = {
            id: currentId++,
            title: taskData.title,
            description: taskData.description || "",
            completed: taskData.completed || false
        };
        tasks.push(newTask);
        return newTask;
    },
    update: (id, updateData) => {
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) return null;
        tasks[taskIndex] = { ...tasks[taskIndex], ...updateData };
        return tasks[taskIndex];
    },
    delete: (id) => {
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) return false;
        tasks.splice(taskIndex, 1);
        return true;
    }
};

module.exports = TaskModel;
