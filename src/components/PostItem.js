import { useState, useContext} from "react";
import { UserContext } from "./UserContext";
import "./PostItem.css";
import DeletePostModal from "./DeletePostModal";
import EditModal from "./EditModal";
import editBtn from "../icons/edit.png"
import deleteBtn from "../icons/delet.png"
import { useStore } from "./hooks/useStore";


export default function PostItem(props){
    const {user, setUser} = useContext(UserContext);
    const [deletePost,] = useStore((state)=>[state.deletePost]);
    const formatter = new Intl.RelativeTimeFormat('en');
    const diff = new Date() - new Date(props.timeStamp);
    const diffInMinutes = Math.ceil((diff / 1000) / 60);
    let timeDisplay = '';
    const [deleteConfirmation, setDeleteConfirmation] = useState(false); //keep it false
    const [editConfirmation, setEditConfirmation] = useState(false); //keep it false

    const timePassed = () =>{
        if (diffInMinutes < 60){
            timeDisplay = formatter.format(Math.ceil(-diff/(1000*60)), "minutes");
        }
        else if(diffInMinutes < 1440 && diffInMinutes > 60){
            timeDisplay = formatter.format(Math.ceil(-diff/(1000*60*60)), "hours");
        }
        else if(diffInMinutes < 43200 && diffInMinutes > 1440){
            timeDisplay = formatter.format(Math.ceil(-diff/(1000*60*60*24)), "days");
        }
        else if(diffInMinutes < 518400 && diffInMinutes > 43200){
            timeDisplay = formatter.format(Math.ceil(-diff/(1000*60*60*24*30)), "months");
        }
        else{
            timeDisplay = "more than a year";
        }
    }

    const toggleConfirmation = () => {
        setDeleteConfirmation(!deleteConfirmation);
    }

    const toggleEdit = () => {
        setEditConfirmation(!editConfirmation)       
    }

    if(deleteConfirmation) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    timePassed();
    
    const deleteItem = () =>{
        deletePost(props.id);
    }
    
    function openEdit(){
        console.log(props.user)
        toggleEdit();
    };
    /*props.user === user?"showBtns":"hideBtns"*/ 
    return(
        <li>
            <div className="postConteiner">
                <div>
                    <div className="postTitle">
                        <div className ="postHead">
                            <div className="postTitleConteiner">
                                <span>{props.title}</span>
                            </div>                         
                            <div className={props.user === user?"":"visible"}>
                                    <img className={editConfirmation? "hideBtns" : "showBtns"} onClick={toggleConfirmation} src={deleteBtn} alt="delete button"/>                                     
                                    <img className={deleteConfirmation? "hideBtns" : "showBtns"} onClick={openEdit} src={editBtn} alt="edit button"/>
                            </div>                             
                        </div>                
                    </div>
                    <div className="postBody">
                        <div className="postInfo">
                            <div className="postUserName">
                                <span>@{props.user}</span>
                            </div>
                            <div className="postTimePosted">
                                <span>{timeDisplay}</span>
                            </div>
                        </div>
                        <div className="postText">
                            <div>
                                <p>{props.text}</p>
                            </div>
                        </div>
                    </div>
                </div>                
                {editConfirmation && (<EditModal title={props.title} text={props.text} id={props.id} toggleEdit={toggleEdit} />)}
                {deleteConfirmation && (<DeletePostModal toggleConfirmation={toggleConfirmation} deleteItem={deleteItem}/>)}            
            </div>       
        </li>        
         
    );
}