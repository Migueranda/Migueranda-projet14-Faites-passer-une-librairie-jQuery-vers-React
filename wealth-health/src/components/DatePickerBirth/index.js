import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../Utils/CreateEmployee.css';

function DatePickerBirth(){
    //Plugin de sélection de date
    const [BirthDate, SetBirthDate] = useState(new Date());

    
  
    return(
        <div>
            <p className='input-title'>Date of Birth</p>
            <DatePicker            
                selected={BirthDate}
                onChange={(date) => SetBirthDate(date)}            
                dateFormat="dd/MM/yyyy"
                id='birth'
                className="input-text"
             />
        </div>
    )
}
export default DatePickerBirth