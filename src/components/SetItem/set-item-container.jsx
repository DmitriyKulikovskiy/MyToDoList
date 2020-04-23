import React from 'react'
import SetForm from './set-item'
import { compose } from 'redux'
import { addTask, editStatus, deleteTask,removeAllDone,removeAllTasks,editTask} from '../../redux/main-reducer';
import {changeFilter} from '../../redux/filter-reducer'
import { connect } from 'react-redux';




export class SetFormContainer extends React.Component {

    render(){
        return (
            <SetForm />
        )
        
    }
}


const mapStateToProps = (state) => {
    return {
        tasks: state.mainReducer.tasks,
        filter: state.filtersReducer
    }
}


export default compose(connect(mapStateToProps,{editStatus ,addTask,deleteTask,changeFilter,removeAllDone,removeAllTasks,editTask}))(SetForm)
    

