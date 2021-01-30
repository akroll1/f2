import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Typography} from '@material-ui/core'
import {Label} from '../../css/editor'
import moment from 'moment'

export const Datepicker = ({ handleTimeSelect }) => {
    const [time, setTime] = useState(new Date());
    const [showTime, setShowTime] = useState(false);
    const getTime = (date) => {
        setShowTime(false);
		console.log('date: ',date.getTime());
        let momentDate = moment().toDate();
        setTime(date);
        // handleTimeChange(date);
    }
 
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // console.log('time: ',time.toLocaleString('en-US'));
    return (
        <>
            <Label style={{fontSize:'1rem',color: '#727070',margin: '1rem auto',width: '100%'}}>Scheduled Time: &nbsp;&nbsp;&nbsp;<span style={{color:'#4d4d4d'}}>{time.toLocaleString('us-US').replace(',',' at')}</span></Label>
            {showTime && <Typography variant='overline' align='left'>Date and Time</Typography>}
            <DatePicker
                showTimeSelect
                selected={time}
                onChange={getTime}
                onSelect={handleTimeSelect}
            />
        </>
    )
};
