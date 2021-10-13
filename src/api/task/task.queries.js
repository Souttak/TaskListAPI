const CREATE_TASK = 'INSERT INTO task SET ?';
const GET_TASKS = 'SELECT * FROM task';
const GET_TASK_BY_ID = 'SELECT * FROM task WHERE task_id = ?';
const UPDATE_TASK = `UPDATE task SET ? WHERE task_id = ?`;
const DELETE_TASK = `DELETE FROM task WHERE task_id = ?`;

module.exports = {
    CREATE_TASK,
    GET_TASKS,
    GET_TASK_BY_ID,
    UPDATE_TASK,
    DELETE_TASK,
};
