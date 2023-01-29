import React from 'react'
import add from "../images/add.png";
import cam from "../images/cam.png";
import more from "../images/more.png";
import Messages from "./Messages";
import Input from "./Input";
const Chat = () => {
    return (
        <div className='chat'><div className="chatInfo">
            <span>Afreen</span>
            <div className="chatIcons">
                <img src={add} alt="" />
                <img src={cam} alt="" />
                <img src={more} alt="" />
            </div>
            
             </div>
             <Messages/>
             <Input/>
             </div>

    )
}
export default Chat