import React from "react";
import s from "./../../App.module.css";
import Item from "./item"
import CurrentTasks from "../current-tasks";
import FilterButtonTasks from "../filter-button-tasks";


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

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              name={"text"}
              onChange={this.onInputChange}
              value={this.state.text}
              placeholder={"Set your task"}
              className={s.setTask}
            />
            <button onClick={this.handleSubmit} className={s.add}>ADD</button>
          </div> 
        </form>
        <CurrentTasks tasks={this.props.tasks}/>
        {this.props.tasks.map(t => (<Item editStatus={() => this.props.editStatus(t.id)}
                                          deleteTask={() => this.props.deleteTask(t.id)}
                                          key={t.id} task={t.task} status={t.status}/>))}
        <FilterButtonTasks  tasks={this.props.tasks} />
      </div>
    )
  }
}
 


export default SetForm;
