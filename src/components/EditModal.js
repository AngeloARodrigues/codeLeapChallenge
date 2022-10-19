import {useState} from "react";
import "./PostBox.css";
import "./Modals.css"
import { useStore } from "./hooks/useStore";

export default function PostBox(props){

    const [titleValue, setTitleValue] = useState();
    const [textValue, setTextValue] = useState();
    const [editPost] = useStore((state)=>[state.editPost]);

    if(titleValue === undefined){
        setTitleValue(props.title)
    }

    if(textValue === undefined){
        setTextValue(props.text)
    }

    const hadleTitleChage = (event) =>{
        setTitleValue(event.target.value);
        
    };
    const hadleTextChage = (event) =>{
        setTextValue(event.target.value);
    };    

    const saveEdit = (event) =>{
        event.preventDefault();
        editPost(props.id,titleValue,textValue)       
        props.toggleEdit();         
    }

    return(
        <div className="edit-modal">
            <div className="post-modal-content">
                <form ref={props.contentRef} className="editBox" onSubmit={saveEdit}>

                <input type='text' value={titleValue} required onChange={hadleTitleChage} /><br/>

                <textarea type='text' value={textValue} required onChange={hadleTextChage} /><br/>
                <div className="PBbtn">
                    <button onClick={() => props.toggleEdit()}>CANCEL</button>
                    <button>SAVE</button>
                </div>
                </form>
            </div>
        </div>
    );    
}