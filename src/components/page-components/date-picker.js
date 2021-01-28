import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Typography} from '@material-ui/core'
import {Label} from '../../css/editor'
import moment from 'moment'

export const Datepicker = ({ handleTimeChange}) => {
    const [time, setTime] = useState(new Date());
    const getTime = (date) => {
		console.log('date: ',date);
        let momentDate = moment().toDate();
        setTime(date);
        // handleTimeChange(date);
    }
    const handleSelect = x => {
        console.log('x: ', x);
        
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
                onSelect={handleSelect}
            />
             <Label style={{marginTop: '1rem',marginBottom:'5rem',width: '100%'}}>Podcast Time: {time.toLocaleString('us-US').replace(',',' at')}</Label>
        </>
    )
};
