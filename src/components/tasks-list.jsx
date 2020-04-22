import React from 'react'
import Item from './SetItem/item'

const ListTasks = ({currentTasks,editStatus,deleteTask}) => {
    return (
        currentTasks.map(t => (<Item editStatus={() => editStatus(t.id)}
        deleteTask={() => deleteTask(t.id)}
        key={t.id} task={t.task} status={t.status}/>))
    )
}

export default ListTasks;