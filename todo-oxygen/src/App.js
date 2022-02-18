import React from 'react';
import NotFound from './components/commons/NotFound';
import { Routes, Route, Navigate } from 'react-router-dom';
import Tasks from './components/tasks/Tasks';
import CreateTask from './components/tasks/create/CreateTask';

import './assets/css/App.css';

function App() {
  return (
    <div className="App">
            <Routes>

                <Route path="/" element={ <Tasks /> } />

                <Route path="/newtask" element={ <CreateTask /> } />

                <Route path="/404" element={ <NotFound /> } />

                <Route path="*" element={ <Navigate to="/404" /> } />

            </Routes>
        </div>
  )
}

export default App;
