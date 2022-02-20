import React from 'react';

import '../../assets/css/taskItem.css';

export default function TaskItem({task, changeStateTask}) {

    let{ title, tags, description, state, _id } = task

    return (
        <div className="card list-card">
            <header className="card-header">
                <p className="card-header-title">
                    {title}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                {description}
                </div>
                <div className="content tags">
                {tags.map(tag => {
                    return <span className="tag is-warning">{tag}</span>
                })}
                </div>
            </div>
            <footer className="card-footer">
                <button className="button is-success" onClick={() => changeStateTask(_id)}> go to {state === 'todo' ?  'done' : 'todo'}</button>
            </footer>
        </div>
    )
}
