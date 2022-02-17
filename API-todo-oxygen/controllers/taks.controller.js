'use strict';

const { Tasks } = require('../models');
const mongoose = require('mongoose');


class TasksController {
    

    /**
     * GET /
     * Get all task from DB
     */
    async getTasks(req, res, next) {
        try {
            let tasks = await Tasks.find({});
            tasks = !!tasks ? 'Tasks is empty' : tasks;

            res.status(200).json({
                result: tasks
            })
        } catch (error) {
            res.status(505).json({message: error.message})
        }

    }
    
    /**
     * GET /:taskId
     * Get a specific task from DB
     */
    async getTask(req, res, next) {
        console.log('entro en id')
        try {
            const _id = req.params.taskId;
            console.log('params', req.params)
            console.log('entro en id', _id)

            if ( mongoose.isValidObjectId(_id) ) {
                const task = await Tasks.findOne({ _id });

                res.status(200).json({ result: task });
            } else {
                res.status(404).json({ message: 'Not found' });
                return;
            }

        } catch (error) {
            res.status(505).json({ message: error.message })
        }
    }

    /**
     *  POST /newtask
     * Create new task
     */
    async createTask(req, res, next) {
        try {
            const data = req.body

            const task = new Tasks(data);
            const newTask = await task.save();

            res.status(201).json({ result: newTask })

        } catch (error) {
            res.status(505).json({ message: error.message })
        }
    }

    /**
     * PUT /updatetask
     * Update an exisiting task
     */
    async updateTask(req, res, next) {
        try {
            const data = req.body;
            const filter = { _id: data.taksId };

            const updateTask = await Tasks.findOneAndUpdate(filter, data, {
                new: true
            });

            res.status(201).json({ result: updateTask })
        } catch (error) {
            res.status(505).json({ message: error.message })
        }
    }

    /**
     * DELETE /deletetask
     * Delte a specific task
     */
    async deleteTask(req, res, next) {
        console.log('delte task');
        try {
            const { taskId }= req.body;

            await Tasks.findOneAndDelete({ _id: taskId });
            res.status(200).json({ result: `Task ${ taskId } deleted successfully` });
        } catch (error) {
            res.status(505).json({ message: error.message })
        }
    }
}


module.exports = new TasksController();