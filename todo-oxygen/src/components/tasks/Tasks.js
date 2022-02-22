import React, { useEffect, useState } from 'react'
import Layout from '../commons/layout/Layout';
import TaskList from './TaskList';
import { getTasks, updateState } from '../../dataService/tasks/dataTasks';
import Loader from '../commons/Loader';
import { setTaskList } from '../../store/slices/tasks';
import { useDispatch, useSelector } from 'react-redux';

import '../../assets/css/tasks.css';

export default function Tasks() {

    const {list: tasks} = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    // const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
        
    useEffect(() => {
        dispatch(getAllData());
    }, []);

    const getAllData = () => (dispatch) => {
        setIsLoading(true);
        getTasks()
        // .then(response => setTasks([...response.result]))
        .then(response => { 
            dispatch(setTaskList([...response.result])) 
        })
        .catch( error => {
            console.log(error);
            setError(error);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    const changeStateTask = (_id) => {
        let [taskToUpdate] = tasks.filter( task => task._id === _id);
        taskToUpdate.state = taskToUpdate.state === 'todo' ? 'done' : 'todo';

        const tasksUpdates = tasks.map(task => {
            if(task._id === _id) {
                task.state = taskToUpdate.state
            } 
            return task
        })
        // setTasks([...tasksUpdates]);
        dispatch(setTaskList([...tasksUpdates]));
        updateState(taskToUpdate);
    }

    return (
        <Layout>
            {error ?
                <h2> Something go wrong, please try it again later </h2> 
                :
                isLoading ? 
                    <Loader />
                    :
                    <>
                        {
                            tasks.length > 0 ?
                                <TaskList tasks={tasks} changeStateTask={changeStateTask}/>
                            :
                            <button className="button is-warning"><a href="/newtask">Add New Task</a></button>
                        }     
                    </>
            }
        </Layout>
    )
}
