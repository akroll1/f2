import React, {useState,useEffect, useRef} from 'react'
import {TimerText} from '../../css/live'

const Timer = ({getTime,score,gameType,setStartTimer, startTimer, setButtonsDisabled}) => {
    const [counter, setCounter] = useState(100);
    const timer = useRef(counter);
    useEffect(() => {
        if(startTimer){
            var timers;
            // if(gameType === 'quiz'){
                timers = setInterval(() => setCounter(x => x-1), 75);
            // } 
            // else {
            //     timers =
            //     counter > 0 && setInterval(() => setCounter(counter-1), 1000);
            }
            return () => {
                clearInterval(timers);
            }
        // }
    }, [startTimer, counter]);  

    if(startTimer == false && counter != 0){
        console.log('getTime');
        getTime(counter);
    }

    if(counter === 0){
        setButtonsDisabled(true);
        setStartTimer(false);
        setTimeout(() => {
            setCounter(100);
        },3000);
    } 
    // console.log('counter: ',counter);
    let t = timer.current = counter;
    return (
        <div style={{display: 'inline-flex',justifyContent: 'space-around'}}>
            <TimerText id="timer">Score: {score}</TimerText>
            <TimerText>Timer: {t}</TimerText>
            {/* <TimerText>Score: {score}</TimerText> */}
        </div>
    )
};

export default Timer;