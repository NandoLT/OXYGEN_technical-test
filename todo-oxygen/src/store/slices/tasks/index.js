import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
    name: 'tasks', //nombre del slice, así lo referiremos dentro del estado del
    initialState: { //estado inicial
        list:[],
    },
    reducers: { //objeto de reducers
        setTaskList: (state, action) => {
            state.list = action.payload;
        }
    },
});

export const { setTaskList } = tasksSlice.actions; 
export default tasksSlice.reducer; //importo por defecto el reducer del slice de users para importarlo 
                                    //en los reducers del store.

