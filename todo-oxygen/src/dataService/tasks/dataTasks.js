import client from '../client';

const tasksBaseUrl = '/api/tasks/';

export const getTasks = () => {
    const url = tasksBaseUrl;
    return client.get(url);
}