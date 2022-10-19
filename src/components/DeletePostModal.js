import "./Modals.css"
import React from "react";

export default function DeletePostModal(props){
    return(
        <div className="delete-modal">
            <div className="post-modal-content">
                <h2>Delet Post?</h2>
                <div className="postBtn-Container">
                    <button onClick={()=> props.toggleConfirmation() || props.deleteItem()} className='btn'>Yes</button>
                    <button onClick={()=> props.toggleConfirmation()} className='btn'>No</button>
                </div>
            </div>
        </div>
    );
}