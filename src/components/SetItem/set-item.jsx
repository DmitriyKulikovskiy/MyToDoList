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

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

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
        return tasks.filter(task => task.status);
      }
      case 'active': {
        return tasks.filter(task => !task.status)
      }
      default:
        return tasks;
    }
  }


  render() {
    const currentTasks = this.filterTasks(this.props.tasks, this.props.filter);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input name={"text"} onChange={this.onInputChange} value={this.state.text}placeholder={"Set your task"} className={s.setTask}/>
            <button onClick={this.handleSubmit} className={s.add}>ADD</button>
          </div> 
        </form>
        <CurrentTasks tasks={this.props.tasks}/>
        <ListTasks  currentTasks={currentTasks} editStatus={this.props.editStatus} deleteTask={this.props.deleteTask}/>
        <FilterButtonTasks  currentTasks={currentTasks} changeFilter={this.props.changeFilter} removeAllDone={this.props.removeAllDone}/> 
      </div>
    )
  }
}



export default SetForm;

