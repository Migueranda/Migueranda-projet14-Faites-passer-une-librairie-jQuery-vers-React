import { useSelector } from "react-redux";
import "../../styles/Modal.css";
import '../../styles/CreateEmployee.css';

function Street(){
const err_street = useSelector((state) => state.formEmployees.err_street)

    return(
        <div> 
            <div>               
                <label htmlFor="street">Street</label>
                <input id="street" type="text" className="input-text" required/>
                {(err_street) ? <p className="form-error-message">Street field must not be empty</p>:<p></p>}
            </div>
        </div>
    )
}
export default Street