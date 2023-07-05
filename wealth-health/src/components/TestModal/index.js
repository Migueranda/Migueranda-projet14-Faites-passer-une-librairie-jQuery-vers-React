import React from "react";
import "../../Utils/TestModal.css"
// import "./Modal.css";
// import { useState } from "react";
// import "../../Utils/Modal.css"
// import { Link } from "react-router-dom";


function TestModal(props){

    let {content, handleChange, value} = props
    
    // close modal by using setState from parent component
    const closeModal = _ => {
        handleChange(false)
    }

    return (
       <div>
            {
                value && (
                    <aside className='background-Modal'>
                        <div className='container-Modal'>
                            <button className="button-Modal" onClick={closeModal}>&#x2715;</button>
                            <h3>{content}</h3>
                        </div>
                    </aside>
                )
           
            }
       </div>
    )
}
export default TestModal;