import React from 'react'
import s from "./../App.module.css";



export default props =>  
    <div className={s.item}>
        <span onClick={props.editStatus} className={s.statusTask}>
            {props.status   ? <img src="https://img.icons8.com/doodle/48/000000/checkmark.png"/> 
                            : <img src="https://img.icons8.com/emoji/48/000000/red-circle-emoji.png"/>}
        </span>
        
        <span className={props.status === true ? s.task : s.taskFalse}>{props.text}</span>


        <span onClick={props.taskDelete} className={s.close}><img src="https://img.icons8.com/color/48/000000/close-window.png"/></span>
    </div>

