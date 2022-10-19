import React, {useContext, useState, useRef} from "react";
import { UserContext } from "./UserContext";
import "./PostBox.css";
import { useStore } from "./hooks/useStore";

export default function PostBox(props){
    
    const [titleInput ,setTitleInput] = useState();
    const [textInput, setTextInput] = useState();
    const {user, setUser} = useContext(UserContext);
    const [addPost] = useStore((state)=>[state.addPost]);
    const formRef = useRef();

    function submitPost(event){        
        event.preventDefault();
        const timeout = setTimeout(updateDelay,10)
        const enteredTitle = titleInput;
        const enteredText = textInput;
        const idGenerator = Date.now();
        const dategen =  new Date();
        const timeStamp = `${dategen.getMonth()+1}/${dategen.getUTCDate()}/${dategen.getFullYear()} ${dategen.getHours()}:${dategen.getMinutes()}`;
   
        addPost(idGenerator,timeStamp,user,enteredTitle,enteredText);

        formRef.current.reset();
    }

    const updateDelay = () =>{
        props.handleSubmition();        
    } 

    return(
        <form ref={formRef} className="postBox" onSubmit={submitPost}>
            <p className="callToAction"><strong>What's on your mind?</strong></p>

            <label className="PBLabel">Title</label><br/>
            <input type='text' required id="title" onChange={event => setTitleInput(event.target.value)}/><br/>

            <label className="PBLabel">Content</label><br/>
            <textarea type='text' required onChange={event => setTextInput(event.target.value)}></textarea><br/>

            <button onClick={updateDelay} className="PBbtn">CREATE</button>
        </form>
    );
}