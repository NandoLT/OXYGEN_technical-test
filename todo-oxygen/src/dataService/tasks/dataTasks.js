import client from '../client';

const tasksBaseUrl = '/api/tasks/';

export const createTask = (task) => {
    const url = `${tasksBaseUrl}newtask`;
    return client.post(url, task);
}

export const getTasks = () => {
    const url = tasksBaseUrl;
    return client.get(url);
}

export const updateState = (taskToUpdate) => {
    const url = `${tasksBaseUrl}updatetask`;
    return client.put(url, taskToUpdate, {headers: {
        'Content-Type': 'application/json'
    }});
}
