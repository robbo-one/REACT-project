import React, { useState } from 'react'

const UseStateObject = () => {
  // setting up the hook
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  })
  
  const changeMessage = () => {
    //below is using the spread operator to only change the message, not the name or age of the person.
    setPerson({...person, message:'hello world' })
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  )
}

export default UseStateObject
