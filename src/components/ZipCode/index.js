import { useSelector } from "react-redux";
import '../../styles/CreateEmployee.css';

function ZipCode(){
    const err_zipCode = useSelector((state) => state.formEmployees.err_zipCode)
    return(
        <div>
            <label htmlFor="zip">Zip Code</label>
            <input id="zip" name="zip" type="text" pattern="[0-9]*" className="input-text"></input>
            {(err_zipCode) ? <p className="form-error-message"> Zip Code field must not be empty</p> : <p></p> }
        </div>
    )
}
export default ZipCode