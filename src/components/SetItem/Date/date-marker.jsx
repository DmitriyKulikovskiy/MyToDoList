import React from 'react'
import s from './../../../App.module.css'

class SetDate extends React.Component {
    constructor() {
        super();

        const today = new Date(),
            date = today.toLocaleDateString()

        this.state = {
            date: date
        };
    }
    render() {
        return (
            <div>
                <span className={s.numeration} />
                <div className={s.MyDate}>{this.state.date}</div>
            </div>
        );
    }
}

export default SetDate;