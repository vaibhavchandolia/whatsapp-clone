import { useStateProvider } from "@/context/StateContext";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import { data } from "autoprefixer";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ChatList from "./Chatlist/ChatList";
import Empty from "./Empty";

function Main() {
  const router = useRouter()
  const [{userInfo}, dispatch] = useStateProvider('/login')
  const [redirectLogin, setRedirectLogin] = useState(false)

  useEffect(() => {
    if(redirectLogin) router.push("/login")
  }, [redirectLogin])

  onAuthStateChanged(firebaseAuth, async(currentUser) => {
    if(!currentUser) setRedirectLogin(true)
    if(!userInfo && currentUser?.email) {

      const {data} = await axios.post(CHECK_USER_ROUTE, {email: currentUser.email})
    }
    if(!data.status){
      router.push("/login")
    }
    dis
  })
  return <>
  <div className="grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden">
    <ChatList />
    <Empty />
  </div>
  </>;
}

export default Main;
