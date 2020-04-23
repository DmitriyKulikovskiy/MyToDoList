import React from 'react'
import s from './App.module.css';
import SetFormContainer from './components/SetItem/set-item-container';

const App = () => {
  
  return (
    <div>
      <div className={s.container}>
        <h1> It's me, <b>Tasker</b>. Let me refresh your memory.</h1>> 
        <SetFormContainer   />
        <div className={s.made}>Made by <b>Dima Kulikovskiy </b> &#169; 2020</div>
        <div className={s.version}>Version: <v>1 .1</v></div>
      </div>
    </div>
  )
}

export default App;
