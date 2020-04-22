import React from 'react'
import s from './App.module.css';
import SetFormContainer from './components/SetItem/set-item-container';


const App = (props) => {
  
 
  return (
    <div className={s.container}>
       <h1> It's me, <b>Tasker</b>. Let me refresh your memory.</h1>> 
       <SetFormContainer   />
       <div className={s.made}>Made by <b>Dima Kulikovskiy </b> &#169; 2020</div>
    </div>

  )
}


export default App;
