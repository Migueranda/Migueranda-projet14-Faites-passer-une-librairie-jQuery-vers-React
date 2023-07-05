import React from "react";
// import "./Modal.css";
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
                    {/* <h1>Are You Sure You Want to Continue?</h1> */}
                </div>
                <div className="body">
                    {/* <p>The next page looks amazing. Hope you want to go there!</p> */}
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
                        {/* <p>create new employee</p> */}
                    </button>
                    <button
                       
                    >
                        <Link to='/EmployeeList'>See new employee</Link> 
                        {/* <p>See new employee</p> */}
                        
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Modal;