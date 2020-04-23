import React from "react";
import s from "./../../App.module.css";
import CurrentTasks from "../current-tasks";
import FilterButtonTasks from "../filter-button-tasks";
import ListTasks from "../tasks-list";

class SetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    if(this.state.text === '') {
      return undefined
    } 
    this.props.addTask(this.state.text)
    this.setState({
      text: ''
    })
  }

  filterTasks = (tasks, activeFilter) => {

    switch (activeFilter) {
      case 'done': {
        return tasks.filter(t => t.status);
      }
      case 'active': {
        return tasks.filter(t => !t.status);
      }
      default:
        return tasks;
    }
  }


  render() {
    const {tasks,editStatus,deleteTask,removeAllTasks,editTask,removeAllDone,changeFilter} = this.props;
    const currentTasks = this.filterTasks(this.props.tasks, this.props.filter);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input name={"text"} onChange={this.onInputChange} value={this.state.text}placeholder={"SET YOUR TASK"} className={s.setTask}/>
            <button onClick={this.handleSubmit} className={s.add}>ADD</button>
            <button onClick={removeAllTasks} className={s.clearAll}>Clear</button>
          </div> 
        </form>
        <CurrentTasks tasks={tasks}/>
        <ListTasks tasks={tasks} currentTasks={currentTasks} editStatus={editStatus} deleteTask={deleteTask} editTask={editTask}/>
        <FilterButtonTasks  currentTasks={currentTasks} changeFilter={changeFilter} removeAllDone={removeAllDone}/> 
      </div>
    )
  }
}



export default SetForm;

