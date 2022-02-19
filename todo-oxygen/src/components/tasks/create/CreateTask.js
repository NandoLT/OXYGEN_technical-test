import React, { useState } from 'react';
import Layout from '../../commons/layout/Layout';
import {createTask} from '../../../dataService/tasks/dataTasks';

export default function CreateTask() {

    const initState = { 
        title: '',
        tags: '',
        description: '',
        state: 'todo'
    }

    const [formData, setFormData] = useState(initState);
    const {title, tags, description} = formData;

    const handleChange = e => {
        let {name, value} = e.target;
        value = name==='tags' ? value.split(',') : value;
        setFormData(oldData => ({
            ...oldData,
            [name]: value,
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        createTask(formData)
            .then(window.location.href = '/')

    }

    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input className="input" type="text" name="title" placeholder="Add title" onChange={handleChange} value={title} required/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tags</label><span>[separated by commas]</span>
                    <div className="control">
                        <input className="input" type="text" name="tags" placeholder="Add tags" onChange={handleChange} value={tags} required/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea className="textarea" name="description" placeholder="Add Task description" onChange={handleChange} value={description} required></textarea>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-link" disabled={!title || !tags || !description} >Submit</button>
                    </div>
                </div>
            </form>
        </Layout>
    )
}
