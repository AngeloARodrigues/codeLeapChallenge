import React, { useState, useContext} from "react";
import { UserContext } from "./UserContext";
import "./Modals.css";
import ConfirmationModal from "./ConfirmationModal";

export default function LoginModal(props) {
    const [modal, setModal] = useState(true);//keep it true
    const [confirmation, setconfirmation] = useState(false)//keep it false
    const [userName, setName] = useState("");
    const {user, setUser} = useContext(UserContext);

    const theUserName = (event) => {
        setName(event.target.value);
        setUser(event.target.value);
    };

    const toggleConfirmation = () =>{
        setconfirmation(!confirmation);
        setName(null);
    }

    const toggleModal = () => {
        setModal(!modal);
    };

    props.childRef.current = {
        toggleModal:toggleModal,
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            {modal && (
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <h2>Welcme to CodeLeap network!</h2>
                    <p>Please enter your username</p>
                    <input className="modal-input" required placeholder="Username" onChange={theUserName}/><br/>
                    <button className={userName? "close-modal-white" : "close-modal-gray"} onClick={userName? toggleConfirmation : null }>ENTER</button>
                </div>
                {confirmation && (<ConfirmationModal toggleModal={toggleModal} toggleConfirmation={toggleConfirmation}/>)}
            </div>)}
        </>
    );
}