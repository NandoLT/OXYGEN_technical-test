import React, { useState, useEffect } from 'react'
import TaskItem from './TaskItem';

import '../../assets/css/taskList.css';

export default function TaskList({ tasks, changeStateTask }) {

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tasks]);

    return (
        <>
            <div className="add-newtask">
                <button className="button is-primary is-large is-fullwidth is-rounded" ><a href="/newtask">Add new Task</a></button>
            <hr/>
            </div>
            <div id="container-tasklist">
                <div id="column-task-todo">
                    <h2>TASKS TO DO</h2>
                    {
                        taskTodo.map(task =>{
                            return <TaskItem key={task._id} task={task} changeStateTask={changeStateTask}/>
                        })
                    }
                </div>
                <div id="column-task-done">
                    <h2>TASKS DONE</h2>
                    {
                        taskDone.map(task =>{
                            return <TaskItem key={task._id} task={task} changeStateTask={changeStateTask}/>
                        })
                    }
                </div>
            </div>
        </>
        
    )
}
