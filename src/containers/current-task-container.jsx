import React from 'react'
import { addTask, editStatus, deleteTask,removeAllDone,removeAllTasks,editTask, getTaskValue} from '../redux/main-reducer';
import {changeFilter} from '../redux/filter-reducer'
import { connect } from 'react-redux';
import CurrentTask from '../components/current-task';


class CurrentTaskContainer extends React.Component {

    render(){
        return (
            <CurrentTask {...this.props} />
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


export default connect(mapStateToProps,{editStatus ,addTask,deleteTask,changeFilter,removeAllDone,removeAllTasks,editTask,getTaskValue})(CurrentTaskContainer)