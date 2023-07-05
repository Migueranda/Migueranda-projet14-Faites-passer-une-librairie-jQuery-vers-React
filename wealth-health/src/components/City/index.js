import { useSelector } from "react-redux";
import "../../Utils/Modal.css";
import '../../Utils/CreateEmployee.css';


function City(){
    const err_city = useSelector((state) => state.formEmployees.err_city)
    return(
        <div>
            <label htmlFor="city">City</label>
             <input id="city" type="text" className="input-text"/>
             {(err_city) ? <p className="form-error-message">City field must not be empty</p>:<p></p>}
        </div>
    )
}
export default City