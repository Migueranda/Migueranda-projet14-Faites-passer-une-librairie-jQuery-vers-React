import React from "react";
import "../../Utils/Modal.css"
import { Link } from "react-router-dom";

function Modal({setOpenModal }){
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                    X
                    </button>
                </div>
                <div className="title">
                </div>
                <div className="body">
                    <p>Employee created!</p>
                </div>
                <div className="footer">
                    <button
                        onClick={() => {
                        setOpenModal(false);
                        }}
                        id="cancelBtn"
                    >                        
                        <Link to='/CreateEmployee'>create new employee</Link> 
                    </button>
                    <button>                     
                        <Link to='/EmployeeList'>See new employee</Link> 
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Modal;