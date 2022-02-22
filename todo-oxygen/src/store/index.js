import {configureStore} from '@reduxjs/toolkit';
//reducers
import tasks from './slices/tasks';

export default configureStore({
    reducer: { 
        tasks
    }
})