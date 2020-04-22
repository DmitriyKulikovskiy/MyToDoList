import React from 'react'
import SetForm from './set-item'
import { compose } from 'redux'
import { addTask, editStatus, deleteTask} from '../../redux/main-reducer';
import { connect } from 'react-redux';




export class SetFormContainer extends React.Component {

    render(){
        return (
            <SetForm/>
        )
        
    }
}


const mapStateToProps = (state) => {
    return {
        tasks: state.mainReducer.tasks
    }
}


export default compose(connect(mapStateToProps,{editStatus ,addTask,deleteTask}))(SetForm)
    

