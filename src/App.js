import React from "react"
import Channel from "./components/Channel"
import Message from "./components/Message"
import InputMessage from "./components/InputMessage"


export default function App(){
    return(
        <div>

           <Channel />
           <Message/>
           <InputMessage />

        </div>
    )
    
    
}