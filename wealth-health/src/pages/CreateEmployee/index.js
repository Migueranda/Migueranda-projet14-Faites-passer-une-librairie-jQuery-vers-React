import { Link } from "react-router-dom";
import React, { useState, useEffect} from "react";
// import Address from "../../components/Address";
import City from "../../components/City";
import DatePickerBirth from "../../components/DatePickerBirth";
import DatePickerStartDate from "../../components/DatePickerStartDate";
import SelectDepartement from "../../components/SelectDepartement";
import SelectState from "../../components/SelectState";
import ZipCode from "../../components/ZipCode";
import { useDispatch, useSelector} from "react-redux";
import { addEmployee, checkData, setInit } from "../../Utils/redux";
import Modal from "react-modal-package-npm";
import 'react-modal-package-npm/dist/index.css';
import FirstName from "../../components/firstName";
import LastName from "../../components/LastName";
import '../../Utils/CreateEmployee.css'
import Street from "../../components/Address";

function CreateEmployee(){ 
    const dispatch = useDispatch()
   
    const form_validation = useSelector((state) => state.formEmployees.validation)
    const [open, setOpen] = useState(false)
    const [employee, setEmployee] = useState({})

    const handleData = (event) =>{   
        event.preventDefault(); 
        const employee_local = { // scope function handleData
                firstName: event.target.form[0].value,
                lastName: event.target.form[1].value,
                startDate: event.target.form[2].value,           
                birth: event.target.form[3].value,
                street: event.target.form[4].value,
                city: event.target.form[5].value, 
                state: event.target.form[7].value,          
                zipCode: event.target.form[8].value,
                departement: event.target.form[10].value 
        }
        // pour hériter de la bonne valeur employee dans le use effect (re render)
        setEmployee(employee_local)
        // validation formulaire
        dispatch(checkData(employee_local))
    }

    // tracking de la variable form_validation pour récupérer le résultat du dispatch checkdata en asynchrone
    useEffect(()=>{
        console.log('form_validation : ', form_validation, 'open : ', open)
        // Form validé => ajout du nouvel employé à la liste des employés => affichage PopUp
        if(form_validation === 'SUCCESS' && open === false){
            // ajout de l'employé validé à la liste des employés
            dispatch(addEmployee(employee))
            // affichage de la modal
            setOpen(true)
        }
        // PoP Up s'affiche => Reset Form
        if(open){
            console.log('modal open : true')
            dispatch(setInit())
            document.getElementById("create-employee").reset();
        }
    },[form_validation, open])

    return(   
        <div className="container-form" >    
            <div className="title">
                <h1>HRnet</h1>                            
            </div>               
            <div className="link-home">
               <nav><Link to='/EmployeeList' id="link-home">View Current Employees</Link></nav> 
            </div>                      
            <div className="form-employee">
                <div className="title-create-employee">
                    <h2>Create Employee</h2>                    
                </div>
                <form action="#" id="create-employee">
                    <FirstName/>
                    <LastName/>
                    <DatePickerStartDate />
                    <DatePickerBirth/>                   
                    {/* <fieldset className="address"> */}
                    {/* <legend>Address */}
                        <Street />
                        <City />
                        <SelectState/>                       
                        <ZipCode />
                    {/* </legend> */}
                    {/* </fieldset> */}
                    <SelectDepartement/>
                    <div className="App">
                        <button
                            className="openModalBtn"
                            onClick={handleData}
                        >
                            Save                            
                        </button>                
                    </div>                        
                </form>                    
            </div>
            <Modal content='Employee created !' handleChange={setOpen} value={open}/>                  
        </div>  
    )
}
export default CreateEmployee