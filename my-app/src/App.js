import React, { useState, createContext } from "react"



function App() {

  const [callId, setCallId] = useState("John");

  return (
    <div>
      <p>{callId} is calling</p>
      <MissedCalls/>
    </div>
  );
}

function MissedCalls({ callId }) {
  return (
    <>
      <p>You have 10 missed calls</p>
      <Outgoing callId={callId} />
    </>
  );
}

function Outgoing({ callId }) {
  return (
    <>
      <p>You have 10 outgoing calls</p>
      <IndividualCalls callId={callId} />
    </>
  );
}

function IndividualCalls({callId}){
  return(
    <>
      <p>You have 10 missed calls from {callId} and 20 outgoing calls to {callId}</p>
    </>    
  )
}


export default App;
