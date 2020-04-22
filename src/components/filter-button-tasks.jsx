import React from 'react'
import s from './../App.module.css'

const FilterButtonTasks = ({currentTasks,changeFilter,removeAllDone}) => {
    
    return (
        <div className={s.filterButtonsBox}>
            <button  onClick={() => changeFilter('all')}> all </button>
            <button  onClick={() => changeFilter('done')}> done</button>
            <button  onClick={() => changeFilter('active')}> active</button>
            {currentTasks.some(task => task.status)  
                ? <button onClick={removeAllDone}>Remove Done</button> 
                : null}
        </div>
    )
}

export default FilterButtonTasks;
