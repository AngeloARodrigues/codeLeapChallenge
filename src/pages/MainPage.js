import PostBox from "../components/PostBox";
import "./MainPage.css"
import quit from "../icons/quit.png"
import Postlist from "../components/PostList";
import LoginModal from "../components/LoginModal";
import { useRef, useState, useReducer, useMemo} from "react";
import { UserContext } from "../components/UserContext";
import { useStore } from "../components/hooks/useStore";

export default function MainPage(){
    const childRef = useRef(null);
    const [toggle, setToggle] = useState();
    const [ignored,forceUpdate] = useReducer(x => x +1,0);
    const [posts] = useStore((state)=>[state.posts]);

    const[user, setUser]= useState();
    const providerUser = useMemo(() => ({user, setUser}),[user, setUser]);

    const handleSubmition = () => {
        forceUpdate();
    }

    return(
        <div>                       
            <div className="topBar">
                <h4>CodeLeap Network @{user}</h4>
                <img onClick={()=>setToggle(childRef.current.toggleModal())} src={quit} alt="DATA"/>
            </div>            
            <div className="postingArea">
                <UserContext.Provider value={providerUser}>
                    <PostBox handleSubmition={handleSubmition}/>                
                    <Postlist items={posts}/>
                </UserContext.Provider> 
            </div>
            <UserContext.Provider value={providerUser}>
                <LoginModal childRef={childRef} />
            </UserContext.Provider>
        </div>
    );
}

