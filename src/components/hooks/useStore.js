import create from "zustand";

//it's default for zustand reducers to be built as hooks

export const useStore = create((set)=>({
    posts:[{
        id: 1664391203062,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Dictum sit amet justo donec enim diam vulputate ut pharetra. Dictum varius duis at consectetur lorem. Penatibus et magnis dis parturient. Enim ut sem viverra aliquet eget sit amet. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque.",
        timeStamp: "10/02/2022 15:53",
        title: "Lorem ipsum1",
        user: "user"
    },
    {
        id: 1664391202404,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Dictum sit amet justo donec enim diam vulputate ut pharetra. Dictum varius duis at consectetur lorem. Penatibus et magnis dis parturient. Enim ut sem viverra aliquet eget sit amet. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque.",
        timeStamp: "9/30/2022 15:53",
        title: "Lorem ipsum2",
        user: "user"
    },
    {
        id: 1264302944982,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Dictum sit amet justo donec enim diam vulputate ut pharetra. Dictum varius duis at consectetur lorem. Penatibus et magnis dis parturient. Enim ut sem viverra aliquet eget sit amet. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque.",
        timeStamp: "7/13/2022 10:49",
        title: "Lorem ipsum3",
        user: "user"
    },
    {
        id:1664372576128,
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Dictum sit amet justo donec enim diam vulputate ut pharetra. Dictum varius duis at consectetur lorem. Penatibus et magnis dis parturient. Enim ut sem viverra aliquet eget sit amet. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque.",
        timeStamp:"1/02/2020 10:42",
        title:"Lorem ipsum4",
        user:"user"
    }],
    addPost:(id,timeStamp,user,title,text) => {
        set((prev)=>({
            posts:[                
                {
                    id:id,
                    timeStamp:timeStamp,
                    user:user,
                    title:title,
                    text:text
                },
                ...prev.posts,
            ]
        }))
    },

    deletePost:(id) => {
        set((prev)=>({
            posts:prev.posts.filter((post)=>post.id !== id)
        }));        
    },

    editPost:(id,title,text)=>{
        set((prev)=>({
            posts:prev.posts.map(obj=>{
                if(obj.id === id){
                    return {...obj, title:title, text:text};
                }
                return obj;
            })
        }))
    }
}));