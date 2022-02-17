const express = require('express');
const router = express.Router();

const { TasksController } = require('../controllers');

/**
 * GET /
 * Get all task from DB
 */
router.get('/', TasksController.getTasks);

/**
 * GET /:taskId
 * Get a specific task from DB
 */
router.get('/:taskId', TasksController.getTask);

/**
 *  POST /newtask
 * Create new task
 */
router.post('/newtask', TasksController.createTask);

/**
 * PUT /:taskId
 * Update an exisiting task
 */
router.put('/updatetask', TasksController.updateTask);

/**
 * DELETE /deletetask
 * Delete a specific task
 */
router.delete('/deletetask', TasksController.deleteTask);

module.exports = router;
