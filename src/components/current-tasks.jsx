import React from 'react'
import s from './../App.module.css'


const CurrentTasks = ({tasks}) => {
    return (
        <div className={s.currentTasks}> <b>Active tasks:</b> {tasks.filter(task => !task.status).length} </div>
    )
}

export default CurrentTasks;