import React from 'react'
import CurrentTaskContainer from '../containers/current-task-container'

const ToDoList = ({tasks,addTask,getTaskValue,taskValue,removeAllTasks,removeAllDone,changeFilter}) => {
    
    const addTaskKey = (e) => {
        if(e.keyCode === 13) {
            addTask(taskValue)
            getTaskValue('')
        }
    }

    const addTaskClick = () => {
        if(taskValue.length > 0) {
            addTask(taskValue)
            getTaskValue('')
        }else {
            return null
        }
    }
    
    return (
        <div className="container">
            <div className="row justify-content-center to-do-wrapper">
                <div className="col-lg-9 to-do-container">
                    <h1> It's me, <i>Tasker</i>.<br/> Let me refresh your memory. </h1>

                    <input  onChange={e => getTaskValue(e.target.value)} 
                            value={taskValue} 
                            type='text' 
                            placeholder='Set your task...'
                            onKeyDown={addTaskKey}
                    />
                    <button onClick={addTaskClick}>add</button>
                    <button onClick={removeAllTasks}>clear</button>
                    <h2>ACTIVE TASKS: <i>{tasks.filter(task => !task.status).length}</i></h2>

                    <CurrentTaskContainer />

                    <div className="filter-buttons">
                        <button onClick={() => changeFilter('all')}>all</button>
                        <button onClick={() => changeFilter('done')}>done</button>
                        <button onClick={() => changeFilter('active')}>active</button>
                        {
                            tasks.some(task => task.status)  
                                ?   <button onClick={removeAllDone}>clear done</button> 
                                : null
                        }
                    </div>

                    <div className='made'>Made by <i>Dima Kulikovskiy</i>&#169;2020</div>
                    <div className='version'>Version: <i>2 .0</i></div>
                </div>
            </div>
        </div>
    )
}

export default ToDoList
