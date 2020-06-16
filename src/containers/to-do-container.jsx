import React from 'react'
import { addTask, editStatus, deleteTask,removeAllDone,removeAllTasks,editTask, getTaskValue} from '../redux/main-reducer';
import {changeFilter} from '../redux/filter-reducer'
import { connect } from 'react-redux';
import ToDoList from '../components/to-do';


class ToDoContainer extends React.Component {

    render(){
        return (
            <ToDoList {...this.props} />
        )
        
    }
}


const mapStateToProps = (state) => {
    return {
        tasks: state.mainReducer.tasks,
        filter: state.filtersReducer,
        taskValue: state.mainReducer.taskValue
    }
}


export default connect(mapStateToProps,{editStatus ,addTask,deleteTask,changeFilter,removeAllDone,removeAllTasks,editTask,getTaskValue})(ToDoContainer)