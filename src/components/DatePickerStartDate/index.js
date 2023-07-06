import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../styles/CreateEmployee.css';
function DatePickerStartDate(){
    //PPlugin de sélection de date
    const [StartDate, SetStartDate] = useState(new Date());

    return(  
        <div>
            <p className='input-title'>Start Date</p>
            <DatePicker
                selected={StartDate}
                onChange={(date) => SetStartDate(date)}
                dateFormat="dd/MM/yyyy"                
                id='start-date'
                className="input-text"          
             />
        </div>
    )
}
export default DatePickerStartDate