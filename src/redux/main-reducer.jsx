import React from 'react'
import shortid from 'shortid';

const ADD_TASK = 'ADD_TASK'
const EDIT_STATUS = 'EDIT_STATUS'
const TASK_DELETE = 'TASK_DELETE'
const REMOVE_ALL_DONE = 'REMOVE_ALL_DONE'

const initialState = {
    tasks: []
};



const mainReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TASK: {
            return {
                ...state,
                tasks: [{
                    id: shortid.generate(),
                    task: action.task,
                    status: false
                }, ...state.tasks]
            }
        }

        case EDIT_STATUS: {
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.id ? {...task, status: !task.status} : task)
            }
        }

        case TASK_DELETE: {
            return {
                ...state,
                tasks: state.tasks.filter(t => t.id !== action.id)
            }
        }

        case REMOVE_ALL_DONE: {
            return {
                ...state,
                tasks: state.tasks.filter(t => !t.status)
            }
        }

    default:
        return state
    }
}


export const addTask = task => ({type: 'ADD_TASK', task});
export const editStatus = id => ({type: 'EDIT_STATUS', id})
export const deleteTask = id => ({type: 'TASK_DELETE', id})
export const removeAllDone = () => ({type:'REMOVE_ALL_DONE'})


export default mainReducer;


