import { useStateProvider } from "@/context/StateContext";
import { ADD_MESSAGE_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import {ImAttachment} from 'react-icons/im'
import { MdSend } from "react-icons/md";

function MessageBar() {
  
  const [{userInfo, currentChatUser}, dispatch] = useStateProvider()
  const [message, setMessage] = useState("")
  const sendMessage = async () => {
    try{
     const { data } = await axios.post(ADD_MESSAGE_ROUTE, {
      to: currentChatUser?.id,
      from: userInfo?.id,
      message,
     })
     setMessage("")
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="bg-panel-header-background h-20 px-4 flex items-center gap-6 relativeo">
      <>
        <div className="flex gap-6"> 
          <BsEmojiSmile 
          className="text-panel-header-icon cursor-pointer text-xl" 
          title="Emoji"
          />
          <ImAttachment
          className="text-panel-header-icon cursor-pointer text-xl"
          title="Attach File"
          />
        </div>
        <div className="w-full rounded-lg h-10 flex items-center">
          <input type="text" 
          placeholder="Type a message" 
          className="bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full" 
          onChange={e => setMessage(e.target.value)}
          value={message}
          />
        </div>
        <div className="flex w-10 item-center justify-center">
          <button>
            <MdSend 
            title="Send Message" 
            className="text-panel-header-icon cursor-pointer text-xl"
            onClick={sendMessage}
            />
            {/* <FaMicrophone 
            title="Record"
            className="text-panel-header-icon cursor-pointer text-xl"/> */}
          </button>
        </div>
      </>

    </div>
  )
}

export default MessageBar;
