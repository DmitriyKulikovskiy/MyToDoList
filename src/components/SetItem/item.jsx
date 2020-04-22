import React from 'react'
import s from "./../../App.module.css";


const Item = (props) => {
    return (
        <div className={s.item}>
        <span onClick={props.editStatus} className={s.statusTask}>
            {props.status   ? <img src="https://img.icons8.com/doodle/48/000000/checkmark.png"/> 
                            : <img src="https://img.icons8.com/emoji/48/000000/red-circle-emoji.png"/>}
        </span>
        
        <span className={props.status === true ? s.task : s.taskFalse}>{props.task}</span>


        <span onClick={props.deleteTask} className={s.close}><img src="https://img.icons8.com/color/48/000000/close-window.png"/></span>
        
    </div>
    )
}

export default Item;

