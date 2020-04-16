import React from "react";
import s from "./../App.module.css";
import shortid from 'shortid';


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

      if(this.state.text.length === 0) {
        return null;
      }

      this.props.addTask({
        id: shortid.generate(),
        text: this.state.text,
        status: false
      });
        
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
      </div>
    );
  }
}

export default SetForm;
