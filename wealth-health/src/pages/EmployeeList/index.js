import React from 'react';
import Employeestable from '../../components/EmployeesTable';
import { useDispatch } from "react-redux";
import { setInit } from "../../Utils/redux";

function EmployeeList() {
  const dispatch = useDispatch()
  // A chaque visite sur cette page, le formulaire d'ajout d'employé est "reset"
  dispatch(setInit())

  return(
    <div>
      <Employeestable />
    </div>
  )
  
}
export default EmployeeList





