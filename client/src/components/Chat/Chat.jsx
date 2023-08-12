import React from "react";
import ChatContainer from "./ChatContainer";
import ChatHeader from "./ChatHeader";
import MessageBar from "./MessageBar";

function Chat() {
  return (
    <div className="border-conversation-boder border-l w-full bg-conversation-panel-background flex flex-col h-[100vh] z-10">
      <ChatHeader />
      <ChatContainer />
      <MessageBar />
    </div>  
  )
}

export default Chat;
