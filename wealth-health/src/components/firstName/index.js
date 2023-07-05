import { useSelector } from "react-redux";
import "../../Utils/Modal.css";
import '../../Utils/CreateEmployee.css';

function FirstName(){
    const err_firstname = useSelector((state) => state.formEmployees.err_firstname)
    return(
        <div>
            <label htmlFor="first-name">First Name</label> 
            <input type="text" id="first-name" name="name"className="input-text"/>
            {(err_firstname) ? <p className="form-error-message"> First Name field must not be empty</p> : <p></p>}  
        </div>
    )
}
export default FirstName