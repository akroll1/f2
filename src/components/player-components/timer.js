import React, {useState,useEffect} from 'react'
import {TimerText} from '../../css/live'

const Timer = ({gameType,counter, setCounter,setStartTimer, startTimer, setShowScore, showScore, setButtonsDisabled}) => {

    useEffect(() => {
        if(startTimer){
            var timers;
            if(gameType === 'quiz'){
                timers =
                counter > 0 && setInterval(() => setCounter(counter-1), 50);
            } else {
                timers =
                counter > 0 && setInterval(() => setCounter(counter-1), 1000);
            }
            return () => {
                clearInterval(timers);
            }
        }
    }, [counter,startTimer]);  

    if(counter == 0){
        setButtonsDisabled(true);
        setStartTimer(false);
        setShowScore(false);
        setCounter(100);
    } 
    return (
        <div style={{display: 'inline-flex'}}>
            <TimerText>Timer:</TimerText>
            <TimerText id="timer">{counter}</TimerText>
        </div>
    )
};

export default Timer;