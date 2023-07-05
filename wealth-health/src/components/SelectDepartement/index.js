import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import '../../Utils/CreateEmployee.css';

const options=[
    { value: 'Sales', label: 'Sales' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Human Resources', label: 'Human Resources' },
    { value: 'Legal', label: 'Legal' },

];

function SelectDepartement(){
    const form_validation = useSelector((state) => state.formEmployees.validation)
    const err_departement = useSelector((state) => state.formEmployees.err_departement)
    const [selectedOption, setSelectedOption] = useState(null);
    

    useEffect(()=>{
      // Si formulaire validé
      if(form_validation === 'NONE'){
          // Reset valeur selectionné dans react-select
          setSelectedOption(null)
      }
  },[form_validation])

  return (
    <div className="Departement">
      <p className='input-title'>Departement</p>
      <Select
        value={selectedOption}
        onChange={setSelectedOption}
        options={options}
        name='selectionDepartement' // afin d'avoir tout le temps un champ input même sans valeur selectionnée     
      />
      {(err_departement) ? <p className="form-error-message">Departement field must not be empty</p> : <p></p>}
    </div>
  )
}
export default SelectDepartement