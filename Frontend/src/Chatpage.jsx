import {
    MultiChatSocket,
    MultiChatWindow,
    useMultiChatLogic,
} from "react-chat-engine-advanced";
import React from 'react'

const Chatpage = (props) => {
    const chatProps=useMultiChatLogic(
        "cdb6a3de-3f9c-4b19-8a05-549f7995c148",
        props.user.username,
        props.user.secret
    );
  return (
    <div style={{height:"100vh"}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:"100%"}}/>
    </div>
  )
}

export default Chatpage