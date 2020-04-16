import React from 'react'
import s from './App.module.css';
import SetForm from './components/set-item';
import Item from './components/item'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      chooseCurrentTaskStatus: 'all'
      
    }
  }

  addTask = task => {

    this.setState(state => ({
      tasks: [task, ...state.tasks]
    }));

  };

  editStatus = id => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if(task.id === id) {
          return {
            ...task,
            status: !task.status
          } 
        } else {
          return task;
        }
      })
    })
  }

  showCurrentTasks = (i) => {
    this.setState({
      chooseCurrentTaskStatus: i
    })
  }
  
  taskDelete = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    })
  }

  allTaskCompletedDelete = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(task => !task.status)
    })
  }

  
  
  render() {

    let tasks = [];

    if(this.state.chooseCurrentTaskStatus === 'all') {
      tasks = this.state.tasks
    } else if(this.state.chooseCurrentTaskStatus === 'active') {
      tasks = this.state.tasks.filter(task => !task.status)
    } else if(this.state.chooseCurrentTaskStatus === 'completed') {
      tasks = this.state.tasks.filter(task => task.status)
    }

    return (
      <div>

        <div className={s.container}>
          <h1> It's me, <b>Tasker</b>. Let me refresh your memory.</h1>

          <SetForm addTask={this.addTask} />

          <div className={s.currentTasks}> <b>Active tasks:</b> {this.state.tasks.filter(task => !task.status).length} </div>

          {tasks.map(task => (<Item  editStatus={() => this.editStatus(task.id)} 
                                              key={task.id} 
                                              text={task.text}
                                              status={task.status}
                                              taskDelete={() => this.taskDelete(task.id)} 
                                               />))}
          <button onClick={() => this.showCurrentTasks('all') }>All</button>
          <button onClick={() => this.showCurrentTasks('active') }>active</button>
          <button onClick={() => this.showCurrentTasks('completed') }>done</button>
          {this.state.tasks.some(task => task.status) 
              ? <button onClick={this.allTaskCompletedDelete}>remove done</button>
              : null}   

          <div className={s.made}>
            Made by <b>Dima Kulikovskiy </b> &#169; 2020
          </div>

        </div>
        
      </div>
      
    )
  }
}



export default App;
