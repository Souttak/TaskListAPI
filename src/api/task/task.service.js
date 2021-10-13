const db = require('../../db');
const queries = require('./task.queries');

const createTask = (task) => {
    return new Promise((resolve, reject) => {
        db.query(queries.CREATE_TASK, [task], (error, results) => {
            if (error) reject(error);
            resolve({
                success: true,
                data: task,
            });
        });
    });
};

const getTasks = () => {
    return new Promise((resolve, reject) => {
        db.query(queries.GET_TASKS, (error, results) => {
            if (error) reject(error);
            if (results.length > 0) {
                resolve({
                    success: true,
                    data: results,
                });
            } else {
                resolve({
                    success: true,
                    data: [],
                });
            }
        });
    });
};

const getTaskByID = (task_id) => {
    return new Promise((resolve, reject) => {
        db.query(queries.GET_TASK_BY_ID, [task_id], (error, results) => {
            if (error) reject(error);
            if (results.length > 0) {
                resolve({
                    success: true,
                    data: results,
                });
            } else {
                resolve({
                    success: true,
                    data: [],
                });
            }
        });
    });
};

const updateTask = (task, task_id) => {
    return new Promise((resolve, reject) => {
        db.query(queries.UPDATE_TASK, [task, task_id], (error, results) => {
            if (error) reject(error);
            resolve({
                success: true,
                data: task,
            });
        });
    });
};

const deleteTask = (task_id) => {
    return new Promise((resolve, reject) => {
        db.query(queries.DELETE_TASK, [task_id], (error, results) => {
            if (error) reject(error);
            resolve({
                success: true,
                data: null,
            });
        });
    });
};

module.exports = {
    createTask,
    getTasks,
    getTaskByID,
    updateTask,
    deleteTask,
};
