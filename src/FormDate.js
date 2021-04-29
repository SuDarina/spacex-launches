import "./App.css"
import Timer from "./Timer";

function FormDate (props){
    let r = true
    let className = "white-font"
    function printDate() {
        let day = props.date
        if(String(day).length === 1) day = '0' + String(day)
        let month = props.months
        if(String(month).length === 1) month = '0' + String(month)
        let year = props.years
        let quarter = props.quarter

        let hour = props.hours
        if(String(hour).length === 1) hour = '0' + String(hour)
        let minute = props.minutes
        if(String(minute).length === 1) minute = '0' + String(minute)

        if (day === null || month === null || year === null || hour === null || minute === null || quarter === null) {
            r = false
            className = "grey-font"
        }
        if (day === null) day = '??'
        if (month === null) month = '??'
        if (year === null) year = '????'
        if (hour === null) hour = '??'
        if (minute === null) minute = '??'
        if (quarter === null) quarter = '?'


        return <h3 className={className}>{day + '.' + month + '.' + year +' (' + quarter + ' quarter), ' + hour + ':' + minute}</h3>
    }
    function timerRender(){
        if (r) {
            return (<Timer years={props.years} months={props.months} date={props.date} hours={props.hours}
                   minutes={props.minutes} quarter={props.quarter}/>)
        } else {
            return "Exact launch time unknown"
        }
    }

    return(
        <div>
            {printDate()}
            {timerRender()}
        </div>);

}
export default FormDate;