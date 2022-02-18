import React from 'react'

import '../../assets/css/taskList.css';

export default function TaskList({ title, goto }) {
    return (
        <div className="card list-card">
            <header className="card-header">
                <p className="card-header-title">
                    {title}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
                </div>
            </div>
            <footer className="card-footer">
                <button class="button is-success">{goto}</button>
            </footer>
        </div>
    )
}
