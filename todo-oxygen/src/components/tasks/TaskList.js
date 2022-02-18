import React, { useState, useEffect } from 'react'
import TaskItem from './TaskItem';

import '../../assets/css/taskList.css';

export default function TaskList({ tasks }) {

    const [taskTodo, setTaskTodo] = useState([]);
    const [taskDone, setTaskDone] = useState([]);
    let todo = [];
    let done = [];

    useEffect(() => { 
        tasks.map(task => {
            task.state === 'todo' ?  todo.push(task) : done.push(task);
            return null;
        });

        setTaskTodo(todo);
        setTaskDone(done);
    }, []);

    return (
        <div id="container-tasklist">
            <div id="">
                <h2>TASKS TO DO</h2>
                {
                    taskTodo.map(task =>{
                        return <TaskItem task={task}/>
                    })
                }
            </div>
            <div>
                <h2>TASKS DONE</h2>
                {
                    taskDone.map(task =>{
                        return <TaskItem task={task}/>
                    })
                }
            </div>
        </div>
    )
}
