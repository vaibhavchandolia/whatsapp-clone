import { useStateProvider } from "@/context/StateContext";
import React from "react";
import Avatar from "../common/Avatar";

function ChatHeader() {

  const [{userInfo}, dispatch] = useStateProvider()

  return <div className="h-16 px-4 py-3 flex justify-between items-center">
    <div className="cursor-pointer">
      <Avatar type='sm' image={userInfo?.profileImage} />
    </div>
    <div className="flex"></div>
  </div>;
}

export default ChatHeader;
