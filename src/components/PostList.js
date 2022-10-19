import PostItem from "./PostItem";
import "./PostList.css"

export default function Postlist(props){
    
    return(        
            <ul className="listStyle">
                {props.items.map((item) => (
                    <PostItem 
                        key={item.id} 
                        id={item.id}
                        timeStamp={item.timeStamp}
                        user={item.user}
                        title={item.title}  
                        text={item.text}
                    />
                ))}
            </ul>
        
    );
}