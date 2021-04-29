import React from 'react';
import LaunchData from './data/launches.json';
import './App.css';
import FormDate from "./FormDate";

function LaunchesList(){
         return (
            <div className="App">
                {LaunchData.map((launchDetail, index) => {
                    let className = "launch-block mars"
                    if(index % 3 === 1){
                           className ="launch-block stars"
                    }
                    if(index % 3 === 2){
                        className ="launch-block earth"
                    }
                    return (
                    <div className={className} key={index.toString()}>
                            <h1>{launchDetail.mission}</h1>
                            <FormDate years={launchDetail.launch.years} months={launchDetail.launch.months} date={launchDetail.launch.date} hours={launchDetail.launch.hours}
                                      minutes={launchDetail.launch.minutes} quarter={launchDetail.launch.quarter}/>
                            <h3>{launchDetail.vehicle}</h3>
                            <h3>{launchDetail.location}</h3>
                        </div>
                    )

                })}
            </div>
        );
}

export default LaunchesList;
