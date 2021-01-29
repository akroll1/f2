import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Typography} from '@material-ui/core'
import {Label} from '../../css/editor'
import moment from 'moment'

export const Datepicker = ({ handleTimeSelect }) => {
    const [time, setTime] = useState(new Date());
    const getTime = (date) => {
		console.log('date: ',date.getTime());
        let momentDate = moment().toDate();
        setTime(date);
        // handleTimeChange(date);
    }
 
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // console.log('time: ',time.toLocaleString('en-US'));
    return (
        <>
            <Typography variant='overline' align='left'>Date and Time</Typography>
            <DatePicker
                showTimeSelect
                selected={time}
                onChange={getTime}
                onSelect={handleTimeSelect}
            />
            <Label style={{color: '#727070',marginTop: '1rem',width: '100%'}}>Scheduled Time: &nbsp;&nbsp;&nbsp;<span style={{letterSpacing:'0.5px',color:'#4d4d4d'}}>{time.toLocaleString('us-US').replace(',',' at').replace(':00 ',' ')}</span></Label>
        </>
    )
};
