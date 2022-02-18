import React, { useEffect, useState } from 'react'
import Layout from '../commons/layout/Layout';
import TaskList from './TaskList';
import { getTasks } from '../../dataService/tasks/dataTasks';
import Loader from '../commons/Loader';

import '../../assets/css/tasks.css';

export default function Tasks() {

    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
        
    useEffect(() => {
        setIsLoading(true);
        getTasks()
        .then(response => setTasks(response.result))
            .catch( error => {
                console.log(error);
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

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
                                <TaskList tasks={tasks} />
                            :
                            <button className="btn btn-primary">Add New Task</button>
                        }     
                    </>
            }
        </Layout>
    )
}
