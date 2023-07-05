import { useSelector } from "react-redux";
import "../../Utils/Modal.css";
import '../../Utils/CreateEmployee.css';

function LastName(){
    const err_lastname = useSelector((state) => state.formEmployees.err_lastname)
    return(
        <div>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" className="input-text"/>
            {(err_lastname) ? <p className="form-error-message"> First Name field must not be empty</p> : <p></p>}  
        </div>
    )
}
export default LastName