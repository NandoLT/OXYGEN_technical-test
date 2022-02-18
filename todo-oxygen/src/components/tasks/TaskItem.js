import React from 'react';

import '../../assets/css/taskItem.css';

export default function TaskItem({task}) {

    let{ title, tags, description, state } = task
    state === 'todo' ? state = 'done' : state = 'todo';
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
                <div className="content">
                {tags.map(tag => {
                    return <tag>{tag}</tag>
                })}
                </div>
            </div>
            <footer className="card-footer">
                <button className="button is-success"> go to {state}</button>
            </footer>
        </div>
    )
}
