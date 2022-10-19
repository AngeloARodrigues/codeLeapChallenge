import { UserContext } from "./UserContext";
import{ useContext } from "react";
import "./Modals.css"
import React from "react";

export default function ConfirmationModal(props){
    const {user, setUser} = useContext(UserContext);
    return(
        <div className="confirmation-modal">
            <div className="confirmation-modal-content">
                <h2>@{user} is your username?</h2>
                <div className="confirmatioBtnContainer">
                    <button onClick={()=> props.toggleModal() || props.toggleConfirmation()} className='btn'>Yes</button>
                    <button onClick={()=> props.toggleConfirmation()} className='btn'>No</button>
                </div>
            </div>
        </div>
    );
}