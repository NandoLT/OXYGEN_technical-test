'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const tasksSchema = new Schema({ 
    title: { type: 'string', required: true, index: true },
    tags: { type: Array, required: true, index: true },
    description: { type: 'string', required: true}, 
    state: { type: 'string', index:true}
});

const Tasks = mongoose.model('Tasks', tasksSchema);

module.exports = Tasks;