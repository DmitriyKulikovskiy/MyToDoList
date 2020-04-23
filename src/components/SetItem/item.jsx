import React from 'react'
import s from "./../../App.module.css";
import SetDate from './Date/date-marker';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            statusChange: false,
            task: this.props.task,
            index: 0
        }
    }

    activeStatusChange = () => {
        this.setState( {
            statusChange: true
           }
       );        
    }

    deActivateStatusChange = () => {
        this.setState({
          statusChange: false
        });
        this.props.editTask(this.state.task);
    };

    onStatusChange = (e) => {
        this.setState({
            task: e.target.value
        }) 
    }

    
    
    
    render(){
        const {deleteTask,status,editStatus} = this.props;

        return (
            <div>
                <div className={s.item}>
                    <SetDate/>
                    <span onClick={editStatus} className={s.statusTask}>
                        {status ? <img src="https://img.icons8.com/doodle/48/000000/checkmark.png"/> 
                                : <img src="https://img.icons8.com/emoji/48/000000/red-circle-emoji.png"/>}
                    </span>

                    { this.state.statusChange 
                        ? <input className={s.task} onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateStatusChange} value={this.state.task}/> 
                        : <span  className={this.props.status === true ? s.task : s.taskFalse} onClick={this.activeStatusChange}> {this.state.task} </span>}
                    <span onClick={deleteTask} className={s.close}>
                        <img src="https://img.icons8.com/color/48/000000/close-window.png"/>
                    </span>
                </div>
            </div>
        )
    }
}

export default Item;
