
// create context by import createContext
import React, { useState, createContext, useContext } from "react"

//initialize creat context
const CallIdContext = createContext()
const UserContext = createContext()

function ContextApp() {

  const [callId, setCallId] = useState("John");
  const [user, setUser] = useState('Nick')

  return (


    //use the .Provider to wrap all the components that need access to the property
    <CallIdContext.Provider value={callId} >
        <UserContext.Provider value={user} >
           <div>
             <p>{user} is calling</p>
             <MissedCalls callId={user}/>
           </div>
        </UserContext.Provider>

    </CallIdContext.Provider>

  );
}

function MissedCalls() {
  return (
    <>
      <p>You have 10 missed calls</p>
      <Outgoing/>
    </>
  );
}

function Outgoing() {
  
  return (
    <>
      <p>You have 10 outgoing calls</p>
      
      <IndividualCalls />
    </>
  );
}


//use useContext hook to make the property accessible to a child component
function IndividualCalls(){

  const callId = useContext(CallIdContext)
  const user = useContext(UserContext)

  return(
    <>
    <p>{user} is the user</p>
      <p>You have 10 missed calls from {callId} and 20 outgoing calls to {callId}</p>
    </>    
  )
}


export default ContextApp;