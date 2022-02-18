import React from 'react'
import Layout from '../commons/layout/Layout';
import TaskList from './TaskList';

import '../../assets/css/tasks.css';

export default function Tasks() {
    return (
        <Layout>
            <div className="lists-container">
                <TaskList title={'TO-DO'} goto={'done'} />
                <TaskList title={'DONE'} goto={'todo'}/>
            </div>
        </Layout>
    )
}
