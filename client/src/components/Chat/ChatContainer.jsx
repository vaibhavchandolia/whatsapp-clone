import { useStateProvider } from "@/context/StateContext";
import { calculateTime } from "@/utils/CalculateTime";
import React from "react";
import MessageStatus from "../common/MessageStatus";

function ChatContainer() {

  const [{messages, currentChatUser, userInfo}] = useStateProvider()

  console.log(messages)

  return (
  <div className="h-full w-full relative flex-grow overflow-auto custom-scrollbar -z-10 box-border">
    <div className="bg-chat-background bg-fixed h-full w-full opacity-5 fixed left-0 top-0 -z-10"></div>
      <div className=" mx-5 my-5 relative bottom-0 z-40 left-0">
        <div className="flex w-full">
          <div className="flex flex-col justify-end w-full gap-1 overflow-auto">
            {messages.map((message, idx) => (
              <div 
                key={message.id} 
                className={`flex ${
                  message.senderId === currentChatUser.id
                  ? "justify-start" : "justify-end"
              }`}>
                {message.type === "text" && (
                  <div className={`text-white px-2 py-[5px] text-sm rounded-md flex gap-2 
                    items-end max-w-[45%] z-40
                    ${message.senderId === currentChatUser.id ? 
                    "bg-incoming-background" : "bg-outgoing-background"}`}
                  >
                    <span className="break-all">{message.message}</span>
                    <div className="flex gap-1 items-end">
                      <span className="text-bubble-meta text-[11px] pt-1 min-1-fit">
                        {calculateTime(message.createdAt)}
                      </span>
                      <span >
                        {
                          message.senderId === userInfo.id && 
                          <MessageStatus messageStatus={message.messageStatus}/>
                        }</span>
                    </div>
                  </div>
                )}

              </div>))}
          </div>
        </div>
      </div>
    {/* </div> */}
  </div>
  )
}

export default ChatContainer;
