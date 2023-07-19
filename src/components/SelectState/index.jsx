import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import '../../styles/CreateEmployee.css';

const options = [
    { value: 'Alabama', label: 'Alabama' },
    { value: 'Alaska', label: 'Alaska' },
    { value: 'American Samoa', label: 'American Samoa' },
    { value: 'Arizona', label: 'Arizona' },
    { value: 'Arkansas', label: 'Arkansas' },
    { value: 'California', label: 'California' },
    { value: 'Colorado', label: 'Colorado' },
    { value: 'Connecticut', label: 'Connecticut' },
    { value: 'Delaware', label: 'Delaware' },
    { value: 'District Of Columbia', label: 'District Of Columbia' },
    { value: 'Federated States Of Micronesia', label: 'Federated States Of Micronesia' },
    { value: 'Florida', label: 'Florida' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Guam', label: 'Guam' },
    { value: 'Hawaii', label: 'Hawaii' },
    { value: 'Idaho', label: 'Idaho' },
    { value: 'Illinois', label: 'Illinois' },
    { value: 'Indiana', label: 'Indiana' },
    { value: 'Iowa', label: 'Iowa' },
    { value: 'Kansas', label: 'Kansas' },
    { value: 'Kentucky', label: 'Kentucky' },
    { value: 'Louisiana', label: 'Louisiana' },
    { value: 'Maine', label: 'Maine' },
    { value: 'MMarshall IslandsH', label: 'Marshall Islands' },
    { value: 'MDMaryland', label: 'Maryland' },
    { value: 'Massachusetts', label: 'Massachusetts' },
    { value: 'Michigan', label: 'Michigan' },
    { value: 'Minnesota', label: 'Minnesota' },
    { value: 'Mississippi', label: 'Mississippi' },
    { value: 'Missouri', label: 'Missouri' },
    { value: 'Montana', label: 'Montana' },
    { value: 'Nebraska', label: 'Nebraska' },
    { value: 'Nevada', label: 'Nevada' },
    { value: 'New Hampshire', label: 'New Hampshire' },
    { value: 'New Jersey', label: 'New Jersey' },
    { value: 'New Mexico', label: 'New Mexico' },
    { value: 'New York', label: 'New York' },
    { value: 'North Carolina', label: 'North Carolina' },
    { value: 'North Dakota', label: 'North Dakota' },
    { value: 'Northern Mariana Islands', label: 'Northern Mariana Islands' },
    { value: 'Ohio', label: 'Ohio' },
    { value: 'Oklahoma', label: 'Oklahoma' },
    { value: 'Oregon', label: 'Oregon' },
    { value: 'Palau', label: 'Palau' },
    { value: 'Pennsylvania', label: 'Pennsylvania' },
    { value: 'Puerto Rico', label: 'Puerto Rico' },
    { value: 'Rhode Island', label: 'Rhode Island' },
    { value: 'South Carolina', label: 'South Carolina' },
    { value: 'South Dakota', label: 'South Dakota' },
    { value: 'Tennessee', label: 'Tennessee' },
    { value: 'Texas', label: 'Texas' },
    { value: 'Utah', label: 'Utah' },
    { value: 'Virgin Islands', label: 'Virgin Islands' },
    { value: 'Virginia', label: 'Virginia' },
    { value: 'Washington', label: 'Washington' },
    { value: 'West Virginia', label: 'West Virginia' },
    { value: 'Wisconsin', label: 'Wisconsin' },
    { value: 'Wyoming', label: 'Wyoming' },    
  ];

function SelectState(){
//  Plugin Menus déroulants
  const form_validation = useSelector((state) => state.formEmployees.validation)
  const err_state = useSelector((state) => state.formEmployees.err_state)
  const [selectedOption, setSelectedOption] = useState(null);

  // track reset form
  useEffect(()=>{
    // Si formulaire validé
    if(form_validation === 'NONE'){
        // Reset valeur selectionné dans react-select
        setSelectedOption(null)
    }
  },[form_validation])

  return (
    <div className="App">
      <p className='input-title select-state' >State</p>
      <Select
        value={selectedOption}
        onChange={setSelectedOption}
        options={options}
        name='selectionState' // afin d'avoir tout le temps un champ input même sans valeur selectionnée
   
      />
       {(err_state) ? <p className="form-error-message"> State field must not be empty </p>:<p></p>} 
    </div>
  )
}
export default SelectState