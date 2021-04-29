import React, {Component} from "react";
import "./App.css"

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {new_date: null, new_hours: null, new_minutes:null, flag: null};
    }

    componentDidMount() {
        this.tick()
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    getCountDownDate(){
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthName =  monthNames[this.props.months - 1];
        return new Date(monthName + ' ' + this.props.date + ' ' + this.props.years+ ' ' + this.props.hours + ':' + this.props.minutes + ':00')
    }

    tick() {
        let now = new Date().getTime();
        const countDownDate = this.getCountDownDate().getTime();
        const flag = countDownDate - now > 0 ? 1:-1;
        const distance = Math.abs(countDownDate - now);
        const days = Math.floor((distance / (1000 * 60 * 60 * 24)));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
        const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
        this.setState({
            new_days: days,
            new_hours: hours,
            new_minutes: minutes,
            flag: flag,
        })

    }

    modifyOutput(){
        if (!isNaN(this.state.new_days) && !isNaN(this.state.new_hours) && !isNaN(this.state.new_minutes)){
            let prefix = this.state.flag === 1 ? "Left: " : "Passed: "
            return <section> {prefix} <div className="timer">{this.state.new_days} <small>days</small> {this.state.new_hours} <small>hours</small>  {this.state.new_minutes} <small>minutes</small></div></section>

        }
    }

    render() {
        return (
            <div>
                {this.modifyOutput()}
            </div>
        );
    }
}
export default Timer;