import React, { useState } from 'react'

const UseStateObject = () => {
  // setting up the hook
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  })
  //below is setting up the state values
  const [name, setName] = useState('peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('random message')

  const changeMessage = () => {
    //below is using the spread operator to only change the message, not the name or age of the person.
    //setPerson({ ...person, message:'hello world' })
    setMessage('hello world')
  }
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  )
}

export default UseStateObject
