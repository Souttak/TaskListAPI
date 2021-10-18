const db = require('../../db');
const queries = require('./task.queries');
const Task = require('./task.model');

const createTask = (task) => {
    return new Promise(async (resolve, reject) => {
        try {
            const newTask = await task.save();
            resolve({
                success: true,
                data: newTask,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const getTasks = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const tasks = await Task.find();
            resolve({
                success: true,
                data: tasks,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const getTaskByID = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const task = await Task.findById(id);
            resolve({
                success: true,
                data: task,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const updateTask = (task, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const reference = (await getTaskByID(id)).data;

            reference.description = task.description;
            reference.done = task.done;
            reference.location = task.location;

            const updatedTask = await reference.save();
            resolve({
                success: true,
                data: updatedTask,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const deleteTask = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const task = await getTaskByID(id);
            await task.data.remove();
            resolve({
                success: true,
                data: null,
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createTask,
    getTasks,
    getTaskByID,
    updateTask,
    deleteTask,
};
