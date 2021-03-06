import React, { useState, useEffect } from "react";
import "./SidebarChats.css"
import { Avatar } from "@material-ui/core";
import db from "../../firebase"
// // import {Link} from "react-router-dom"
function SidebarChat( { id, name, addNewChat }) {
    const [seed, setSeed] = useState("");
//     const [ messages, setMessages]=useState("");
    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const createChat = () => {
        const roomName = prompt("please enter a name for chat")
        if (roomName) {
            db.collection('rooms').add({ name: roomName })
        }
    }


    
    // 
//         <Link to={`/rooms/${id}`}>

        return  !addNewChat ? (  
            <div className="sidebarChat">
                <Avatar src={'https://avatars.dicebear.com/api/human/' + seed + '.svg'} />
                <div className="sidebarChar_info">
                    <h2>{name}</h2>
                    <p>
                       The Last Message 
                    </p>
                </div>

            </div>
    
//         </Link>

    ) : (

            <div onClick={createChat}
                className="sidebarChat">
                <h2>
                    Add New Chat
                </h2>
            </div>

        )
}
export default SidebarChat